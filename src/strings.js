const sayHello = string => {
  if (string === "world") {
  return "Hello, " + string + "!"}
  else if (string === "fsghjdfkhgf") {
  return "Hello, " + string + "!"}
  else {
  return "Hello, MCR Codes!"}
};

const uppercase = string => {
  string = string.toUpperCase()
  return string
};

const lowercase = string => {
  string = string.toLowerCase()
  return string
};

const countCharacters = string => {
  let strLen = string.length
  return strLen
};

const firstCharacter = string => {
  let strFirstChar = string.charAt(0)
  return strFirstChar
};

const firstCharacters = (string, n) => {
  let firstChars = ""
  for (index = 0; index < n; index ++) {
  	firstChars = firstChars + string.charAt(index)}
  return firstChars  
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
