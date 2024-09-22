// Question 01
var cityName = prompt("Enter your city name:", "Karachi");

if (cityName === "Karachi" || cityName === "karachi") {
    alert("Welcome to the city of lights!")
}

// Question 02
var gender = prompt("Please enter your Gender (M/F):");

if (gender === "M" || gender === "m") {
    alert("Good Morning Sir!")
}

else if (gender === "F" || gender === "f") {
    alert("Good Morning Ma'am!")
}

else {
    alert("Error! Please enter M or F in the field.")
}

// Question 03
var trafficColor = prompt("Enter the color for your traffic light (Red, Yellow, Green): ");

if (trafficColor === "Red" || trafficColor === "red") {
    alert("Must Stop");
}

else if (trafficColor === "Yellow" || trafficColor === "yellow") {
    alert("Ready to move");
}

else if (trafficColor === "Green" || trafficColor === "green") {
    alert("Move now");
}

else {
    alert("Wrong Answer!");
}

// Question 04
var fuelRemaining = prompt("Enter your remaining fuel in liters:");

if (fuelRemaining <= 0.25) {
    alert("Please refill the fuel in your car");
}

else if (fuelRemaining > 0.25) {
    alert("You are good on your fuel");
}

else {
    alert("Wrong Answer.")
}

// Question 05
// a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question 06
var obtMarks1 = parseInt(prompt("Enter the marks for your 1st subject (0-100):"));
var obtMarks2 = parseInt(prompt("Enter the marks for your 2nd subject (0-100):"));
var obtMarks3 = parseInt(prompt("Enter the marks for your 3rd subject (0-100):"));

var totalMarks = 300;
var obtMarks = obtMarks1 + obtMarks2 + obtMarks3;
var percentage = (obtMarks / totalMarks) * 100;
var grade;

if (percentage >= 80) {
    var grade = "A-One";
    var remarks = "Excellent";
}

else if (percentage >= 70) {
    var grade = "A";
    var remarks = "Good";
}

else if (percentage >= 60) {
    var grade = "B";
    var remarks = "You need to improve";
}

else {
    var grade = "Fail";
    var remarks = "Sorry";
}

// Question 07
var secretNum = 4;
var userNum = parseInt(prompt("Guess the number between 0 to 9:"));

if (userNum === secretNum) {
    alert("Bingo! Correct answer");
}

else if (userNum === secretNum + 1 || userNum === secretNum - 1) {
    alert("Close enough to the answer");
}

else {
    alert("Wrong Guess");
}

// Question 08
var userNum2 = parseInt(prompt("Enter a number to check if it is divisible by 3:"));

if (userNum2 % 3 === 0) {
    alert("The number is divisible by 3.");
}

else {
    alert("The number is not divisible by 3.");
}

// Question 09
var userNum3 = parseInt(prompt("Enter a number to check if it is even or odd:"));

if (userNum3 % 2 === 0) {
    alert("The number is even.");
}

else {
    alert("The number is odd.");
}

// Question 10
var temp = parseInt(prompt("Enter the temperature in degree celcius:"));

if (temp > 40) {
    alert("It is too hot outside.");
}

else if (temp > 30) {
    alert("The weather today is normal.");
}

else if (temp > 20) {
    alert("Today's weather is cool.");
}

else if (temp > 10) {
    alert("OMG! Today's weather is so cool.");
}

else {
    alert("It's very cold outside.");
}

// Question 11
var firstNumber = parseInt(prompt("Enter the first number for calculator:"));
var secondNumber = parseInt(prompt("Enter the second number for calculator:"));
var operation = prompt("Enter the operation for calculator (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
}

else if (operation === "-") {
    result = firstNumber - secondNumber;
}

else if (operation === "*") {
    result = firstNumber * secondNumber;
}

else if (operation === "/") {
    result = firstNumber / secondNumber;
}

else if (operation === "%") {
    result = firstNumber % secondNumber;

}

else {
    alert("Invalid operation.");
    result = null;
}

if (result !== null) {
    alert("Result: " + result);
}


