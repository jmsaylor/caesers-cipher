//ROS13 TOS13??
//Move 13 characters up to encrypt message

//need to rewrite this cool code I found
const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

class Cipher {
  constructor(original) {
    this.original = [...original];

    let alphabet = String.fromCharCode(...range(97, 122));

    this.encrypted = this.original.forEach(letter => {
      alphabet.indexOf(letter);
    });
  }
}
let cipher = new Cipher("hello");
// cipher.encrypt();
console.log(cipher);
