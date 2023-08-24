const name = "jarvis"
const repoCount = 50

console.log(`hello my name is ${name} and repocount is ${repoCount}`);

const GameName = new String ('Jarvis') 
console.log(GameName[0]);
console.log(GameName.toUpperCase());
console.log(GameName.charAt(5));
console.log(GameName.indexOf('i'));
const newString = GameName.substring(0, 4);
console.log(newString);

const anotherString = GameName.slice(-8, 4)
console.log(anotherString);
 
const newStringOne = "  Jarvis  "
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(GameName.split('-'));