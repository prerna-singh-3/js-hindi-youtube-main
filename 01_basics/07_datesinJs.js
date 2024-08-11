// DATES

let myDate = new Date() // Object type

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 2, 24)
console.log(myCreatedDate.toDateString());

let myCreatedDates = new Date("05-22-2004")
console.log(myCreatedDates.toLocaleString());
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); // To convers from milisec to sec

let myTimeStamp = Date.now()
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
weekday : "long"
})