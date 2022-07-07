// Reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// Context vs scope
function b() {
	let a = 4;
}

// Variable a cannot be accessed outside function due to scope

const object4 = {
	a: function () {
		console.log(this);
	},
};

// Instantiation

class Player {
	constructor(name, type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`WEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard("Dumbledore", "Archmagus");
const wizard2 = new Wizard("Shaun", "Elemantalist");
