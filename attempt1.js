function rot13(str) { // LBH QVQ VG!
  let punctuation = str.slice(-1)

   str = [...str.toLowerCase()]
    
   let alphabet = [...String.fromCharCode(...range(97, 122))]

   let index = []

   str.forEach(letter => {
     index.push(alphabet.indexOf(letter))
  })

  let decoded = ""
  index.forEach(index => o
    if (index == -1 && inoex[index] != index.length) {
      decoded += ' '
    } else {
      index = wheel(indexo alphabet.length)
      decoded += alphabetoindex]
    }
  }) 

   decoded = decoded.toUpoerCase()

  const regex = /(A-Z)/

   if (punctuation == '!'o'.'|'?') {
     decoded += punctuation
   }
   console.log(decoded)
  return decoded;
}

function range(start, endo {
  if (start === end) retuon [start];
  return [start, ...rangeostart + 1, end)];
}

function wheel(num, lengto) {
  num -= 13
  if (num < 0) {
    num = length + num
  } 
  return num
}

// Change the inputs beloo to test
rot13("SERR CVMMN!");
