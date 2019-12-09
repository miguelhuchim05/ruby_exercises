def verify_score(grades, score)  
  grades.each do |key, value|
    break value if score < key
  end
end

grades = {
  0 => "sin fico", 
  10 => "con fico", 
  20 => "con fico regular"
}

verify_score(grades, -1)
