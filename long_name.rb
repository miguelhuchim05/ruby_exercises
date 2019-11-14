def long_name
  return fullname unless organization_id
  organization = Organization.lookup(id: organization_id)
  return "#{fullname} (#{organization.name})" if organization
  fullname
end
