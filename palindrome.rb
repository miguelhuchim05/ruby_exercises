def palindrome?(word)
  word.downcase.reverse == word.downcase
end

palindrome? "Malayalam"
