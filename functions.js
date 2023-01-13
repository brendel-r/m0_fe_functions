// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.

function printGreeting() {
  console.log("Hello there!!");
}
printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.

// var firstName = "Rachel"

function printPersonalGreeting(name) {
  console.log(`Hello there, ${name}!!`);
}
printPersonalGreeting("Rachel");


// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
// sting = company name
// numbers = min and max sal
// function should print out a sentance that includes the company name and the range between the sal

function reportPayWage(companyName, minimumPay, maximumPay) {
  var payRange = maximumPay - minimumPay;
  return (`Welcome to ${companyName}! Our salery ranges around $${payRange} !`);
}
reportPayWage("Hello movers", 150000, 200000)
console.log(reportPayWage("Hello movers", 150000, 200000))



// 4: Write a function that satifies the following interaction pattern:

// checkStock(4, "Coffee");
// => "Coffee is stocked"

// checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

// checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

// checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(stockNum, item) {
 if(stockNum === 0) {
  console.log(`${item} is out of stock!`)
 } else if (stockNum < 4) {
  console.log(`${item} is running low!!`)
 } else {
  console.log(`${item} is stocked!!!`)
 }
}
checkStock(4, "coffee" );
checkStock(1, "Salsa")
checkStock(0, "Cheese")
checkStock(3, "Tortillas")
