//ROS13 TOS13??
//Move 13 characters up to encrypt message

//need to rewrite this cool code I found
function range(start, end) {
  if (start === end) return [start];
  return [start, ...range(start + 1, end)];
}

class Cipher {
  constructor([...original]) {
    this.alphabet = [...String.fromCharCode(...range(97, 122))];
    this.encrypted = [];
    original.forEach(letter => {
      this.encrypted.push(this.alphabet.indexOf(letter) + 13);
    });
    this.encrypted = this.encrypted.map(letter => {
      letter += 97;
      return String.fromCharCode(letter);
    });
  }
  decode() {
    let decrypted = this.encrypted.map(letter => {
      let index = this.alphabet.indexOf(letter);
      return index - 13;
    });
    decrypted = decrypted.map(letter => {
      return this.alphabet[letter];
    });
    console.log(decrypted);
  }
}
let cipher = new Cipher("zoo");

console.log(cipher.encrypted);

cipher.decode();
