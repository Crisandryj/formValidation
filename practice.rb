def caesar_cipher(string, _num)
  arry = string.split('')
  puts ('a'..'z').to_a

  puts
end

# caesar_cipher('gp', 5)

def adjusted_index(index, offset)
  (index + offset) % 26
end

puts adjusted_index(25, 2)
