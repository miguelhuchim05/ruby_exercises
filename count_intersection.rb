def count_intersection(ranks)
  ranks = ranks.sort
  next_index = 1
  total_intersections = 0

  ranks.size.times do |index|
    intersect = line_collision?(ranks[index], ranks[next_index])
    total_intersections += 1 if intersect
    next_index += 1
  end

  total_intersections
end

def line_collision?(line_one, line_two)
  return false unless line_two  
  (line_one[0] <= line_two[0]) || (line_one[1] >= line_two[1])
end

ranks = [
  [40, 85], 
  [10, 60], 
  [70, 160]   
]

count_intersection(ranks)
