console.log("external javascript");
// declaration of variables
var name = "john";
console.log(name);
console.log("type of name : " + typeof name);
var age = 45;
console.log(age);
console.log("type of age : " + typeof age);
var isAlive = true;
console.log(isAlive);
console.log("type of isAlive : " + typeof isAlive);
var x;
console.log(x);
console.log("type of x : " + typeof x);
var y = undefined;
console.log(y);
console.log("type of y : " + typeof y);
var z = null;
console.log(z);
console.log("type of z : " + typeof z);
// declaration of object literal fullName property
var person = { fullName: "john doe" };
console.log(person);
console.log("type of person : " + typeof person);
// declaration of empty object
var person1 = {};
console.log(person1);
// set fuulname property of person1 with dot notation
person1.fullName = "jane doe";
console.log(person1);
// get fullname of person1 with dot notation
console.log(person1.fullName);
// set age property of person1 with dot notation
person1.age = 25;
console.log(person1);
// set isalive property of person1 with bracket notation
person1["isAlive"] = true;
console.log(person1);
var key = "fullName";
console.log(person1[key]);
// regular function(function declaration)
function greeting(name) {
  return "hello " + name;
}
// invoke greeting function
var result = greeting(person1.fullName);
console.log(result);
// function expression
var cube = function (number) {
  return number ** 3;
};
// invoke cube function
var result1 = cube(3);
console.log(result1);
// add sayhello method to person1
person1.sayHello = function () {
  return "hello everyone";
};
console.log(person1);
var result2 = person1.sayHello();
console.log(result2);
// declaration of empty array
var cars = [];
console.log(cars);
cars[0] = "opel";
cars[1] = "bmw";
cars[2] = "audi";
console.log(cars);
console.log("length of cars is : " + cars.length);
// for loop
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
console.log("-------");
// forof used with array
for (var car of cars) {
  console.log(car);
}
// forin used with objects
for (var key in person1) {
  //   console.log(key);
  console.log(key + ": " + person1[key]);
}
// alert
// alert("bonjour");
// confirm
// var confirmResult = confirm("are you sure you want to exit?");
// console.log(confirmResult);
// prompt
var positiveNumber = prompt("enter a positive number");
console.log(positiveNumber);
