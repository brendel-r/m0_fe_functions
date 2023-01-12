// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// added ; to line 13
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion()


// EX 2:
//added ; to line 22, removed the space infront of curly bracket on line 24
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3:
// corrected spelling of function, added space between () and {, moved the closing { to next line
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();


//  EX 4:
//moved the opening { up, spaced the first var, deleted space from the second var, move console log up a line up, remove the ., tested code with a call commented out below
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}`);
  }
  // average(4, 5);