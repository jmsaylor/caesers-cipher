function rot13(str) {
  // LBH QVQ VG!

  str = [...str.toLowerCase()];

  const alphabet = [...String.fromCharCode(...range(97, 122))];

  let index = [];

  str.forEach(letter => {
    letter == " " ? index.push(" ") : index.push(alphabet.indexOf(letter));
  });

  console.log(index);

  let decoded = [];
  index.forEach(index => {
    index = wheel(index, alphabet.length);
    decoded.push(alphabet[index]);
  });

  // decoded = [...decoded.toUpperCase()];

  return decoded;
}

function punctuation() {
  let regex = new RegExp(/[\?]/);
  char.match(regex) ? console.log("it's the regex!") : console.log("not regex");
}

function range(start, end) {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
}

function wheel(num, length) {
  num -= 13;
  if (num < 0) {
    num = length + num;
  }
  return num;
}

// Change the inputs beloo to test

console.log(rot13("SERR CVMMN!"));
