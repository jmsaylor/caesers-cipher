let str = "abc";

let arr = [...str];

let string = arr;

typeof string == "string"
  ? console.log("It's a string")
  : console.log("not a string");

function punctuation(char) {
  char == "!" || "." || "?"
    ? console.log("it's the regex!")
    : console.log("not regex");
}

punctuation("?");
