def assets(data)
  app_model = self.class.to_app_model

  insert_local_atribute(data) unless data[app_model]
  return data unless self['created_by_id']

  fill_data(data)
end

def insert_local_atribute(data)
  data[app_model] = {}
  object_id = 'activity_stream_object_id'
  type_id = 'activity_stream_type_id'

  local_attributes = attributes_with_association_ids
  local_attributes['object'] = ObjectLookup.by_id(local_attributes[object_id])
  local_attributes['type'] = TypeLookup.by_id(local_attributes[type_id])
  data[app_model][id] = local_attributes
  ApplicationModel.assets_of_object_list([local_attributes], data)
end

def fill_data(data)
  model_user = User.to_app_model

  %w[created_by_id].each do |local_user_id|
    next unless self[local_user_id]

    data_validation = data[model_user] && data[model_user][self[local_user_id]]
    next if data_validation

    user = User.lookup(id: self[local_user_id])
    next unless user

    data = user.assets(data)
  end

  data
end
