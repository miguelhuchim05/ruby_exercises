def guess_words(words, key)
  missing_words = words.size - key.size
  deleted_word = delete_words(words, key) unless missing_words == 0
  words = deleted_word if deleted_word

  added_word = add_words(words, key) unless missing_words == 0
  key = added_word if added_word

  replace(words, key) 
end

def delete_words(keys, key)  
  phrase = []  

  key.chars.uniq.each do |word|
    keys.each_char.with_index do |letter, index|
      next unless word == letter
      phrase << index
    end
  end
  phrase = phrase.select { |word_index| word_index >= phrase[0]}
  index_start = phrase[0]
  phrase.sort.each.with_index(index_start) do |word, index|    
    break keys = delete_at(keys, index) unless index == word
  end

  keys
end

def delete_at(text, index)
  puts "Eliminar #{text[index]}"
  text.slice(0, index) + text.slice(index+1, text.length)
end

def add_words(keys, key)  
  add_left = add_left_word(keys, key) 
  key = add_left if add_left
   
  add_right = add_right_words(keys, key)
  key = add_right if add_right 
  key
end

def add_left_word(keys, key)  
  index_key = keys.index(key) - 1
  return if index_key == -1
  
  left_words = keys[0..index_key]
  left_words.each_char do |word|   
    puts "Agregar #{word}"
  end
  
  left_words + key
end

def add_right_words(keys, key) 
  keys = keys.reverse 
  index_key = keys.index(key.reverse) - 1 
  return if index_key == -1
  
  right_words = keys[0..index_key].reverse
  right_words.each_char do |word|
    puts "Agregar #{word}"
  end
  
  key + right_words
end

def replace(keys, key)
  keys.each_char.with_index do |word, index|
    puts "Reemplazar #{key[index]} por #{word}" unless word.eql?(key[index])
  end
end

words = "nocandadxote"
key_word = "dado"
guess_words(words, key_word)
