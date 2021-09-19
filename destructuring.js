/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];

// let john = age[0];
// let amy = age[1];
// let joe = age[2];
// console.log(john, amy, joe);
// commented out is without

let = [john, ann, joe] = ages
console.log(john, ann, joe)

// Destructuring objects
let jobs = {
    mike: "desighner",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , annNative, annSecondary] = languages

console.log(annNative, annSecondary)

let languages2 = {
    firstlanguage: "english",
    secondlanguage: "french",
    thirdlanguage: "german",
    fourthlanguage: "japanese",
};

let {firstlanguage, thirdlanguage} = languages2;
console.log(firstlanguage, thirdlanguage);

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorite);
console.log(secondFavorite);
console.log(others);