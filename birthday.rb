require 'json'
require 'stringio'
def birthday(chocolate_bar, day, month)
  square_segment_count = 0

  chocolate_bar.each_with_index do |square, index|
    next if chocolate_bar.slice(index, month).size < month

    square_segment = chocolate_bar.slice(index, month)
    square_segment_count += 1 if square_segment.sum == day
  end

  square_segment_count
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.strip.to_i

chocolate_bar = gets.rstrip.split.map(&:to_i)

dm = gets.rstrip.split

day = dm[0].to_i

month = dm[1].to_i

result = birthday(chocolate_bar, day, month)

fptr.write result
fptr.write "\n"

fptr.close()
