class Car
  STATUS_RUNNING = "the car is running."
  STATUS_DRIVING = "The trip has been started."
  STATUS_ENDED = "The trip has ended."
  
  def initialize(brand, color, year)
    @brand = brand
    @color = color
    @year = year
  end

  def start_car
    @status = STATUS_RUNNING
  end

  def begin_trip
    begin      
      raise unless @status == STATUS_RUNNING
      @status = STATUS_DRIVING
    rescue
      'The car is not running'
    end
  end

  def end_trip
  begin      
      raise unless @status == STATUS_DRIVING
      @status = STATUS_ENDED
    rescue
      'The trip was not started.'
    end
  end
end

uber = Car.new("Nissan", "Black", 2016)
puts uber.begin_trip

puts "\n"
didi = Car.new("Seat", "white", 2018)
puts didi.start_car
puts didi.begin_trip
puts didi.end_trip
