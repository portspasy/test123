
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


for (var i = 0; i < 20; i++) {
    console.log(faker.internet.userName() + " phone number is: " + casual.phone +  ", email address: " + casual.email);
}


