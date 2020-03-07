//ROS13 TOS13??
//Move 13 characters up to encrypt message

//need to rewrite this cool code I found
function range(start, end) {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
}

class Cipher {
  constructor([...original]) {
    let alphabet = [...String.fromCharCode(...range(97, 122))];
    console.log(typeof alphabet);
    this.encrypted = [];
    original.forEach(letter => {
      this.encrypted.push(alphabet.indexOf(letter) + 13);
    });
  }
  decode() {}
}
let cipher = new Cipher("abc");

console.log(cipher);
