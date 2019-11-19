class User
  attr_accessor :name, :last_name
  
  def full_name
    "#{@name} #{@last_name}"
  end
end

miguel = User.new
miguel.name = "Miguel"
miguel.last_name = "Huchim"
puts miguel.full_name

