//console.log("popups.js loaded");
//let answer = prompt("How are you?");
//console.log("The user is "+answer+".");
//alert("The user is "+answer+".");
/*Your first task today
Create a program that asks for The
cost of dinner
and calculates the tip
and displays the tip in an alert window
a tip is at least 15% of the total check
upload your popups.js file
*/


let num = prompt("How much does dinner cost?");
let tip = (num * .15).toFixed(2);
let total = parseFloat(num) + parseFloat(tip);

alert("The cost of " + num + " plus the tip of " + tip + ", will total " + total + ".");
