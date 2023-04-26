let firstName = "wow";
let lastName = "Programmer";
let fullName = firstName + " " + lastName;
//Getting String Character
console.log(firstName[2])
//String Methods
console.log(firstName.toLocaleLowerCase())
console.log(firstName.toLocaleUpperCase())
console.log(firstName.toLowerCase())
console.log(lastName.indexOf("g"))
// Common Strings Methods

let hobbies = 'code read run';

//trim method
let result = hobbies.trim()
console.log(hobbies);
console.log(result);
//used to delete the spaces
//indexof 
console.log(result.indexOf("code"))
console.log(result.lastIndexOf("run"))

// includes method
console.log(result.includes("read"))
//slice method
let fullerName = "wowprogrammer";

console.log(fullerName.slice(0,5))
//Imp  Note Does not mutate original array


//String "Split" method

let favoriteColors = "Brown Blue Black Gray";
let arrColors = favoriteColors.split(' ');
//String to array conversion

console.log(arrColors)
//Javascript strings are Immutable
//However we can add extra words

let str ="Hello";

str = str + "Programmers";

console.log(str)
//Loose Equality(==) vs (===) Strict Equality
//Loose Equality(==) operator
let age = 22;//number type value
console.log(age  == '22')//string conversion Focus only value and not the type
//(===) Strict Equality operator

console.log(age === 22)//Focus on both value and its type
//not equal loose Equality
console.log(age!='22')
//not equal strictly equality
console.log(age!=='22')

//Arrays
let dishes =["briyani","chat","paratha"];
console.log(dishes[0]);
dishes[0]="milk"
console.log(dishes[0]);

//Array Methods
//Join
console.log(dishes.join('-'))
//indexof
console.log(dishes.indexOf("chat"))//case sensitive
//concat method
let newDishes = ["sweet", "panipoori"]; 
console.log(dishes.concat(newDishes))
//Length Method
console.log(dishes.length)
//push method
console.log(dishes.push("dum"))
console.log(dishes)
//method pop
console.log(dishes.pop())
console.log(dishes)