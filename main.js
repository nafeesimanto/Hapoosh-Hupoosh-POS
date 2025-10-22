const prompt = require('prompt-sync')({ sigint: true });


//  Practice 1

// const money = 670;
// const coke = 30;

// if (money > 500) {
//   console.log("free coke");
// } else {
//   console.log(coke);
  
// }

// Practice 2

// const weight = prompt('What is your weight?');
// const height = prompt('What is your height?')
// const BMI = weight / (height^2);
// console.log(BMI);


//  if (BMI < 18.5) {
//   console.log("You are underweight");
//  }
//  else if (BMI >= 18.5 && BMI <= 24.9){
//   console.log("You are normal");
//  }
//  else if (BMI >= 25 && BMI <= 29.9) {
//   console.log("You are overweight");
//  }
//  else {
//   console.log("You are obese");
//  }


// Practice 3

// const score = prompt("What is your score?")

// if (score >= 90 && score <= 100) {
//  console.log("Your grade is 'A'");
// }
// else if (score >= 80 && score <= 89) {
//   console.log("Your grade is 'B'");
// }
// else if (score >= 70 && score <= 79) {
//   console.log("Your grade is 'C'");
// }
// else if (score >= 60 && score <= 69) {
//   console.log("Your grade is 'D'");
// }
// else if (score >= 0 && score <= 59) {
//   console.log("Your grade is 'F'");
// }
// else {
//   console.log("You are not eligible for result");
// }

// Practice 4

const friendsScore = prompt("What is your score friend?")

if (friendsScore > 80) {
  console.log("Let's go for lunch");
}
else if (friendsScore < 80 && friendsScore >= 60) {
  console.log("Good luck next time");
}
else if (friendsScore < 60 && friendsScore >= 40) {
  console.log("Your message is still unseen");
}
else if (friendsScore < 40) {
  console.log("You are blocked");
}
else {
  console.log("You are dead");  
}

const myScore = prompt("What is your score?")

if (myScore <80) {
  console.log("Bashay jaiya morar moto poira thak");
}
else {
  console.log("Biriyani Kha Ami Taka Ditesi");
}