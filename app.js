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
    this.whitespace = [];
    this.punctuation = [];

    for (let x = 0; x < original.length; x++) {
      if (original[x] == " ") {
        this.whitespace.push(x);
        original.splice(x, 1);
      }
    }

    const regex = new RegExp(/[\?\!\.]/);

    for (let x = 0; x < original.length; x++) {
      if (original[x].match(regex)) {
        this.punctuation.push([x, original[x]]);
        original.splice(x, 1);
      }
    }

    original.forEach(letter => {
      let index = this.alphabet.indexOf(letter) + 13;
      if (index > this.alphabet.length) {
        index = index - this.alphabet.length;
      }
      this.encrypted.push(index);
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

  wheel(num, length) {
    num -= 13;
    if (num < 0) {
      num = length + num;
    }
    return num;
  }
  savePunctuation() {}
  addPunctuation() {}
  saveWhiteSpace() {}
}
let cipher = new Cipher("zoo is cool!");

console.log(cipher.encrypted);

console.log(cipher.whitespace);
console.log(cipher.punctuation);

cipher.decode();
