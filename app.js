//ROS13 TOS13??
//Move 13 characters up to encrypt message

//need to rewrite this cool code I found
const range = (start, end, length = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

class Cipher {
  constructor(original) {
    this.original = [...original];
  }

  encrypt() {
    let array = String.fromCharCode(...range(97, 122));
    let encrypted = [];
    this.original = this.original.map(letter => {
      encrypted.push(array.indexOf(letter) + 13);
    });
  }
}

let cipher = new Cipher("hello");
cipher.encrypt();
console.log(cipher.original);
