//Age program

let age = prompt("Enter your age");
age = parseInt(age);
if (age >= 18) alert("You are an adult");
//console.log("You are an adult");
else alert("You are minor");
//console.log("You are minor");

//Login program

let username = prompt("Enter your username");
let password = prompt("Enter your password");
if (username === "admin" && password === "password") alert("Login successful");
else alert("Login failed");

//Odd or Even

let randomNumber = Math.floor(Math.random() * 100) + 1;
if (randomNumber % 2 === 0) alert("The number is Even");
else alert("The number is Odd");

//Choice Program

let color = prompt("Enter your favourite color");
if (color === "red") alert("Red is a beautiful color");
else alert("I like your choice of color");

//Grade program

let scienceGrade = prompt("Enter your science grade:");
let mathGrade = prompt("Enter your math grade:");
let englishGrade = prompt("Enter your english grade:");
let historyGrade = prompt("Enter your history grade:");
let languageGrade = prompt("Enter your language grade:");
let averageGrade = (
  parseInt(mathGrade) +
  parseInt(scienceGrade) +
  parseInt(englishGrade) +
  parseInt(historyGrade) +
  parseInt(languageGrade)
) / 5;
let gradeLetter;
  if (averageGrade >= 90) {
    gradeLetter = "A";
  } else if (averageGrade >= 80) {
    gradeLetter = "B";
  } else if (averageGrade >= 70) {
    gradeLetter = "C";
  } else if (averageGrade >= 60) {
    gradeLetter = "D";
  } else {
    gradeLetter = "F";
  }
  alert(`Your average grade is ${gradeLetter}.`);
