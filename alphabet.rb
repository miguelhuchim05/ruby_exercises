def validate_consecutive_by_word(text)
  words = text[0..text.length-2]
  words.each_char.with_index(1) do |word, index|
    valid_consecutive = text[index].eql?(word.succ)
    return valid_consecutive unless valid_consecutive
  end
  true
end
def consecutive?(words)
  words.each do |word|        
    return false unless validate_consecutive_by_word(word)
  end
  true
end

words = ['AB','BCD','EF', 'GHIJ']
puts consecutive?(words)
