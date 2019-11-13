def update_info(data, key, value)
  data[key.to_sym] = value 
  data
end

data = {
  enterprise: 'Homie',
  years: 4
}

update_info(data, "enterprise", "Homie bootcamp v2")
