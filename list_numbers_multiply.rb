def list_numbers_multiply(numbers)
  numbers_multiplied = []
  number_deleted = 0
  multiplication_array_value = 0

  numbers.each_with_index do |number, index|
    number_deleted = numbers.delete_at(index)
    multiplication_array_value = numbers.inject(:*)
    numbers.insert(index, number_deleted)
    numbers_multiplied << multiplication_array_value
  end

  numbers_multiplied
end

numbers = [1, 2, 3, 4]

list_numbers_multiply(numbers)
