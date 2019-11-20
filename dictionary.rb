class Dictionary
  SPANISH = "spanish"
  ENGLISH = "english"

  def self.translate(language, word)
    case language.downcase
    when SPANISH
      spanish_words[word.downcase.to_sym]
    when ENGLISH
      english_words[word.downcase.to_sym]
    else
      "#{language.capitalize} language not detected: try again please."
    end
  end

  private

  def self.english_words
    {
      departamento: "department",
      inquilino: "tenant",
      propietario: "owner",
      renta: "rent"
    }
  end

  def self.spanish_words
    {
      department: "departamento",
      tenant: "inquilino",
      owner: "owner",
      rent: "renta"
    }
  end
end

puts Dictionary.translate("ENGLISH", "Renta")
puts Dictionary.translate("Spanish", "department")
puts Dictionary.translate("maya", "renta")
