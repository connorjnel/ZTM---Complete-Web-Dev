// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
("     ||<- Start line");
("       🐢");
("       🐇");

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

let turtle = "🐢".padStart(8);
let rabbit = "🐇".padStart(8);

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, "=");

'     ||<- Start line'
'🐢======='
'       🐇'

// Trim removes spaces from around turle, and padend add in "=" as empty space characters

// #3) Get the below object to go from:
let obj = {
	my: "name",
	is: "Rudolf",
	the: "raindeer",
};
// to this:
("my name is Rudolf the raindeer");


const string = ((Object.keys(obj), Object.values(obj)) => {
  obj.forEach(element => {
    Object.keys(obj), Object.values(obj)
  });
})

// My answer not even close

Object.entries(obj).map(value => value.join(" ")).join(' ')
