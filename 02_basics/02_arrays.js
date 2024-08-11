const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros); // MUCH PREFERD

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]
// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


console.log(Array.isArray("Prerna"))
console.log(Array.from("Prerna"))
console.log(Array.from({name:"Prerna"})) // Important

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));