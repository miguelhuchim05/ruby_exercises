def customer_state(session_id = nil)
  return { state: 'chat_disabled' } unless Setting.get('chat')
  reconnect = reconnect_customer(session_id)
  return reconnect if reconnect
  return { state: 'offline' } if agent_available?
  return seats_full if seats_full

  { state: 'online' }
end

def reconnect_customer(session_id)
  chat_session = Chat::Session.find_by(session_id: session_id, state: %w[waiting running]) if session_id
  return unless chat_session
  running = state_running(chat_session.user_id, session_id)
  return running if running
  state_waiting(chat_session)
end

def state_running(user_id, session_id)
  session = Chat::Session.messages_by_session_id(session_id) if user_id
  user = user_profile(user_id) if session
  return unless session

  {
    state: 'reconnect',
    session: session,
    agent: user
  }
end

def state_waiting(chat_session)
  {
    state: 'reconnect',
    position: chat_session.position
  }
end

def user_profile(user_id)
  url = nil
  chat_user = User.lookup(id: user_id)
  if chat_user.image && chat_user.image != 'none'
    url = "#{Setting.get('http_type')}://#{Setting.get('fqdn')}/api/v1/users/image/#{chat_user.image}"
  end

  {
      name: chat_user.fullname,
      avatar: url
  }
end

def agent_available?
  Chat.active_agent_count([id]).zero?
end

def seats_full
  waiting_count = Chat.waiting_chat_count(id)
  {state: 'no_seats_available', queue: waiting_count} if waiting_count >= max_queue
end
