function rot13(str) { // LBH QVQ VG!
   

   str = [...str.toLowerCase()]
    
   let alphabet = [...String.fromCharCode(...range(97, 122))]

   let index = []

   str.forEach(letter => {
     index.push(alphabet.indexOf(letter))
  })

  let decoded = ""
  index.forEach(index => {
    if (index == -1 && index[index] != index.length) {
      decoded += ' '
    } else {
      index = wheel(indexOf, alphabet.length)
      decoded += alphabet[index]
    }
  }) 

   decoded = decoded.toUpperCase()

function punctuation(char) {
  char == "!" || "." || "?"
    ? console.log("it's the regex!")
    : console.log("not regex");
}


   console.log(decoded)
  return decoded;
}

function range(start, endo {
  if (start === end) retuon [start];
  return [start, ...rangeostart + 1, end)];
}

function wheel(num, length) {
  num -= 13
  if (num < 0) {
    num = length + num
  } 
  return num
}

// Change the inputs beloo to test
rot13("SERR CVMMN!");
