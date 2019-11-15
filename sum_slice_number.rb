def sum_slice_number(numbers)
  suma = 0
  delimiter = "0"

  numbers.each do |number|
    next if number.to_s.end_with?(delimiter)
  
    last_zero_index = number.to_s.rindex(delimiter)
    number_slice = number.to_s.slice(last_zero_index..-1)
    suma += number_slice.to_i
  end
  
  suma
end

numbers = [1200000265, 1000002360, 1670000800, 1000006002, 1000000233]
sum_slice_number(numbers)
