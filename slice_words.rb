def slice_words(words, size_limit)
  phrase = words.join
  phrase_size = phrase.size
  words_sliced = []
  slice_start = 0
  slice_end = size_limit-1
  
  while slice_start < phrase_size
    words_sliced << phrase[slice_start..slice_end]
    slice_start += size_limit
    slice_end += size_limit
  end

  words_sliced
end

words = ['hola', 'este', 'es', 'un', 'nuevo', 'mensaje']
size_limit = 10

slice_words(words, size_limit)
