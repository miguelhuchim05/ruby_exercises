require 'json'
require 'stringio'
def staircase(n)
  number_sign_amount = 1
  space_amount = n-1

  while n > 0
    space_sing = " " * space_amount
    number_sign = "#" * number_sign_amount

    puts "#{space_sing}#{number_sign}"
    
    n -=1
    
    number_sign_amount +=1
    space_amount -=1
  end
end

n = gets.to_i

staircase n
