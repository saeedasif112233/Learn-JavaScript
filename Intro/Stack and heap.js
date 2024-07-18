// Stack memory ma copy jati or ye primitive datatype ma hote 

let username = 'saeed'
let anotheruser = username;

anotheruser = 'waheed'

console.log(username);
console.log(anotheruser);

//Heap memory ma non-primitive types hote or is ma sirf ref pass hota


let userOne = {
    email: 'saeed.com',
    uid: 324444
}

let userTwo = userOne;

userTwo.email = 'Saeedasif576881@gmail.com'


console.log(userOne.email);
console.log(userTwo.email);