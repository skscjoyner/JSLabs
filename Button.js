function Questions() {
  let noun = prompt("Please enter a noun.");
  let verb = prompt("Please enter a verb.");
  let adjective = prompt("Please enter a adjective.");
  let saying = prompt("Please enter favorite phrase or saying.");
  let num1 = prompt("Please enter your first number.");
  let num2 = prompt("Please enter second number.");
  let wordArray = [noun, verb, adjective, saying];
  let numArray = [num1, num2];
  let tale = wordArray[0] + " " + wordArray[1] + " along the "
  + wordArray[2] + " beach, talking to " + wordArray[3] + ". They did it " + numArray[0] +
  "time(s) and napped on the cactus " + numArray[1] + " times.";
  alert(tale);
}
