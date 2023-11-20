def adjusted_index(index, offset)
  ((index.to_i + offset.to_i) % 26) - 1
end

def caesar_cipher(string, _num)
  arry = string.split('')
  alphabet = ('a'..'z').to_a
  newString = ''
  arry.each do |_l|
    if !alphabet.include?(_l.downcase)
      newString << _l
    else
      orginalIndex = alphabet.index(_l.downcase)
      newIndex = adjusted_index(orginalIndex, _num)
      newString << alphabet[newIndex]
    end
  end
  newString
end

puts caesar_cipher('What a string!', 6)
