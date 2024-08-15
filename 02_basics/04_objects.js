// const tinderUser = new Object() // Singleton Object

const tinderUser = {} // Non Singleton Object

tinderUser.id = "123abc" 
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//  console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname:{
        usersfullname:{
            firstname: "prerna",
            lastname: "singh"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.usersfullname);
// console.log(regularUser.fullname.usersfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({}, obj1, obj2) // Same result as the above syntax but this is more apt and it is more preferd!!!

const obj3 = {...obj1, ...obj2} //90% time we will use this
// console.log(obj3);
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh",
}
//  course.courseInstructor // we can use this there's no problem in it

const {courseInstructor} = course
// console.log(courseInstructor);

// or

const {courseInstructor: instructor} = course
// console.log(instructor);




