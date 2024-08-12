// SINGLETON (if formed by a constructor!!)
// Object.create // [constructor method]

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Prerna",
    "full name" : "Prerna Singh",
    [mySym]: "myKey1",
    age: 17,
    loaction: "Kolkata",
    email: "prerna@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser.full name()); // no result
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

JsUser.email = "prerna@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "prerna@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo= function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());