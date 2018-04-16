
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


if (isMarried === true) {
    console.log(name + " is married!");
} else {
    console.log(name + " will hopefully marry soon ;) ");
}
