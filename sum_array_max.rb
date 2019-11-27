def max_sum_array(numbers)
  row_sum = 0
  row_sum_max = 0
  column_sum = 0
  column_sum_max = 0

  numbers.each_with_index do |element, index|
    row_sum = element.sum
    row_sum_max = row_sum if row_sum > row_sum_max

    column_sum = numbers.transpose[index].inject(:+)
    column_sum_max = column_sum if column_sum > column_sum_max
  end

  row_sum_max > column_sum_max ? row_sum_max : column_sum_max
end

numbers = [[6, 7, 8], [1, 4, 29], [4, 78, 12]]
max_sum_array(numbers)
