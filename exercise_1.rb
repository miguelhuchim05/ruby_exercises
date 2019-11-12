require 'date'
def increment_date(initial_date, final_date, day)
  dates = []
  counter_months = 1
  index_month = 0
  months_number = final_date.mon - initial_date.mon
  compare_dates = initial_date.mday <=> day

  while counter_months <= months_number
    dates[0] = initial_date
    month = initial_date.mon if compare_dates == -1
    month = initial_date.next_month.mon if compare_dates == 1
    dates[0] = Date.new(initial_date.year, month, day)
    dates[counter_months] = dates[index_month].next_month
    index_month = counter_months
    counter_months +=1
  end

  dates
end

initial_date = Date.new(2018, 1, 2)
final_date = Date.new(2018, 5, 5)
increment_date(initial_date, final_date, 4)
