require 'json'
require 'stringio'
def plusMinus(arr)
  total_positive_number = arr.count{|number| number > 0}
  total_negative_number = arr.count{|number| number < 0}
  total_zero = arr.count(0)
  denominator = arr.size
  
  puts total_positive_number.fdiv(denominator)
  puts total_negative_number.fdiv(denominator)
  puts total_zero.fdiv(denominator)
end

n = gets.to_i

arr = gets.rstrip.split(' ').map(&:to_i)

plusMinus arr

