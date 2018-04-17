
var faker = require("faker");
var casual = require("casual");




var productName = faker.commerce.productName();

var productPrice = faker.commerce.price();

var personName = faker.internet.userName();


console.log("======================");
console.log("Welcome to my shop");
console.log("======================");

for(var i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + " - " + "$" + faker.commerce.price());
}

console.log("======================");


for (var i = 0; i < 10; i++) {
    console.log(faker.internet.userName() + " phone number is: " + casual.phone +  ", email address: " + casual.email);
}

console.log("======================");

var name = "Joe Doe";
var age = 26;
var isMarried = false;


if (isMarried = true) {
    console.log(name + " is married!");
} else {
    console.log(name + " will hopefully marry soon ;) ");
}


if ( 22 == "22") {
    console.log("this is true");
} else {
    console.log("this is false");
}



if (22 === "22") {
    console.log("this is true");
} else {
    console.log("this is false"); // False couse one is number one is a string!
}



// TEST 

var heightJohn = 178;
var ageJohn = 24;
var scoreJohn;

var heightMark = 172;
var ageMark = 25;
var scoreMark;

scoreJohn = heightJohn + 5 * ageJohn;
console.log(scoreJohn);

scoreMark = heightMark + 5 * ageMark;
console.log(scoreMark);

if (scoreJohn < scoreMark){
    console.log("Mark wins this silly game with " + scoreMark + " points!");
} else if (scoreJohn === scoreMark) {
    console.log("WOW!!! It's a draw!");
} else {
    console.log("John wins this silly game with " + scoreJohn + " points!");
}


var john = {
    name: "John",
    age: 22,
    yearOfBirth: 1991,
    married: false
};

console.log(john);


var names = ["Athos", "Porthos", "Aramis", "Dardangian", "Decard", "Spinoza", "Dumas"];


console.log("======================");


for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("======================");


for (var i = names.length - 1; i >= 0 ; i--) {
    console.log(names[i]);
}


// Age calculator: 

var years = [1991, 2000, 1986, 2012, 1935, 1967, 2011, 2003, 1977];
var ages = [];

for (var i = 0; i < years.length; i++) {
   ages[i] = 2018 - years[i];
}

console.log(ages);