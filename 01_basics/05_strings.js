const name = "prerna"
const repoCount = 50

// console.log(name + " " + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('prerna-ps')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4) // we can't take negative value
console.log(newString);

const anotherString = gameName.slice(-8, 4) // we can take negative value
console.log(anotherString);

const newStringOne = "      prerna       "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://prerna.com/prerna%20singh"
console.log(url.replace('%20', '-')) 

console.log(url.includes('prerna'))
console.log(url.includes('tanmay'))


console.log(gameName.split('-'))




