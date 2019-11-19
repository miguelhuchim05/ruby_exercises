class Contact
  def self.all
    [
      {age: 20, name: "Jose", last_name: "Lopez", gender: :male},
      {age: 21, name: "Oscar", last_name: "Perez", gender: :male},
      {age: 22, name: "Martha", last_name: "Sanchez", gender: :female}
    ]
  end

  def self.find_by(key, value)
    all.find do |person|
      person[key] == value 
    end
  end
end

#Contact.all
Contact.find_by(:gender, :female)
