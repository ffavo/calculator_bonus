var firstEle = document.body.querySelector(".first");
var secondEle = document.body.querySelector(".second");
var sumEle = document.body.querySelector(".sum");

// prompts return string values
// use Number() to convert value into a numerical value
var firstPrompt = Number(prompt("Input your total bill?"));
var taxedbill = firstPrompt*.07 + firstPrompt;
var tip = taxedbill*.05;
var summation = taxedbill+ tip;

var total = summation.toFixed(2);
// process

firstEle.innerHTML = "Your amount of bill is "+firstPrompt;
sumEle.innerHTML = "Your total taxed bill with tip is "+total;