// Pass by value

var a = 5;
var b = a;

b++;

// Pass by reference

let obj1 = {
	name: "John",
	Password: "1234",
};

let obj2 = obj1;

// When decalring one obj to another obj, they reference the same memory location ie. the same value, so changing one will change the other.

// Arrays, they are also objects

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(321321);

// Cloning a object wihtout passing by reference

let obj = { a: "a", b: "b", c: "c" };
let objClone = Object.assign({}, obj);
objClone.a = "a2";

let superClone = JSON.parse(JSON.stringify(obj));
