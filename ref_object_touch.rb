def ref_object_touch(record)
  return true if Setting.get('import_mode')

  organization_id_changed = record.saved_changes['organization_id']
  member_ids = []
  member_ids = old_organization(organization_id_changed) if organization_id_changed

  member_ids += new_organization(record) if record.organization

  record_id = record.id
  old_customer(member_ids, record_id)
end

def old_organization(organization_id_changed)
  organization_id_first = organization_id_changed[0]
  return unless organization_id_first
  return if organization_id_first == organization_id_changed[1]
  return unless User.where(organization_id: organization_id_first).count < 100

  organization = Organization.find(organization_id_changed[0])
  organization.touch
  organization.member_ids
end

def new_organization(record)
  return unless User.where(organization_id: record.organization_id).count < 100
  record.organization.touch
  record.organization.member_ids
end

def old_customer(members_ids, record_id)
  members_ids.uniq.each do |user_id|
    next if user_id == record_id
    User.find(user_id).touch
  end

  true
end
