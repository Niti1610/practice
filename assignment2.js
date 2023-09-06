//Program that asks the user for their age.

alert("Program that asks the user for their age");
let age = prompt("Enter your age");
age = parseInt(age);
if (age >= 18)
 alert("You are an adult");
else 
 alert("You are minor");


// Program that asks the user for their username and password.

alert("Program that asks the user for their username and password.");
let username = prompt("Enter your username");
let password = prompt("Enter your password");
if (username === "admin" && password === "password")
 alert("Login successful");
else
 alert("Login failed");


//Program that generates a random number between 1 and 100.

alert("Program that generates a random number between 1 and 100.");
let randomNumber = Math.floor(Math.random() * 100) + 1;
if (randomNumber % 2 === 0) 
 alert("The number is Even");
else 
 alert("The number is Odd");


//Program that asks the user for their favorite color.

alert("Program that asks the user for their favorite color.");
let color = prompt("Enter your favourite color");
if (color === "red") 
 alert("Red is a beautiful color");
else 
 alert("I like your choice of color");


//Program that asks the user for their grade in school.

alert("Program that asks the user for their grade in school.");
  let grade = prompt("What is your grade in school?");
  if (grade === "A") 
    alert("Congratulations on your excellent work!");
  else 
    alert("Keep working hard!");
  