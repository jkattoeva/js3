// var message = prompt("What is your message?");
// if (message === "") {
//   message = "no message";
// }
// alert(message);


// var year = prompt("What year Kyrgyzstan gained independence?");
// if (year === "1991") {
//   alert("Correct!");
// }
// else {
//   alert("Incorrect!");
// }

// var example1 = "200" + 200; //NaN - not a number
// var example2 = "10" + "10"; 

// console.log(example1);
// console.log(example2);

// var age = prompt("How old are you?");
// var year = 2020 - age;
// console.log(year);

var year = prompt("What year Kyrgyzstan gained independence?");
if (year > 1991) {
  alert("This year is after independence year.");
}
else if (year === "1991") {
  alert("You got it!");
}
else {
  alert("This year is before independence year.");
}