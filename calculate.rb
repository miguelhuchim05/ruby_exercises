def calculate(number_one, number_two)
  yield(number_one, number_two) if block_given?
end

puts calculate(15, 10) {|a, b| a - b}
puts calculate(15, 10) {|a, b| a + b}
puts calculate(15, 10) {|a, b| a * b}
puts calculate(15, 10) {|a, b| a / b}

