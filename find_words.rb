def find_words(words, phrase)
  text = ''
  words_found = []
  keys = words.map { |word| word.chr }

  phrase.each_char.with_index do |word, index|
    key_found = keys.join.include?(phrase[index])
    text = '' if key_found
    
    text << word    
    text_found = words.include?(text)
    words_found << text if text_found
    text = '' if text_found
  end

  words_found
end

words = ['hola', 'de', 'nuevo']
phrase = 'mundogabodenuevogatohola'

find_words(words, phrase)
