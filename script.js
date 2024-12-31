alert("Welcome to JavaScript!");

// Task 2: Ask for the user's name and greet them
var name = prompt("What is your name?");
alert("Hello, " + name + "!");

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");


alert( firstName + " " + lastName + "!");


var favoriteHobby = "Reading";  

alert("My favorite hobby is " + favoriteHobby + ".");

var currentYear = 2024;
var yearOfBirth = prompt("Enter your year of birth:");
var age = currentYear - yearOfBirth;
alert("You are " + age + " years old.");


var length = 5; 
var width = 10; 
var area = length * width;
alert("The area of the rectangle is: " + area + " square units.");


alert("Legal variable names: var firstName, var lastName, var age.");
alert("Illegal variable names: var 1stName, var @lastName, var class.");


var myAge = 25;
var friendsAge = 28;
alert("My age: " + myAge + ", Friend's age: " + friendsAge);


var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is: " + sum);


var multiplicationResult = 6 * 8;
alert("6 multiplied by 8 is: " + multiplicationResult);

var remainder = 17 % 5;
alert("The remainder when 17 is divided by 5 is: " + remainder);

var birthYear = prompt("Enter your birth year to calculate your age:");
var userAge = currentYear - birthYear;
alert("Your age is: " + userAge);


var number1 = parseInt(prompt("Enter the first number for arithmetic operations:"));
var number2 = parseInt(prompt("Enter the second number for arithmetic operations:"));
var sum2 = number1 + number2;
var difference = number1 - number2;
var product = number1 * number2;
var quotient = number1 / number2;
var remainder2 = number1 % number2;

alert("Results of arithmetic operations:");
alert("Sum: " + sum2);
alert("Difference: " + difference);
alert("Product: " + product);
alert("Quotient: " + quotient);
alert("Remainder: " + remainder2);