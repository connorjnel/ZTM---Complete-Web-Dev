//  Starter Code
// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

//  Function Declaration - Worked :) Took a while to realize i need to set age equal to prompt value, probably because i set age as a argument. Differs from solution 1
function checkDriverAge(age) {
	age = prompt(); // Could insert the string asking age into prompt here, also save age as a var instead of parameter?
	if (Number(age) < 18) {
		return alert("Sorry, you are too yound to drive this car. Powering off"); // Did not need to use returns on alerts
	} else if (Number(age) > 18) {
		return alert("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		return alert("Congratulations on your first year of driving. Enjoy the ride!");
	}
}

checkDriverAge();

// Function Expression - Works :) My solution a bit of a amalgamation of solution 2 and bonus. Using a argument for age and console logging the string answers.
var checkDriverAge2 = function (age) {
	if (Number(age) < 18) {
		console.log("Sorry, you are too yound to drive this car. Powering off");
	} else if (Number(age) > 18) {
		console.log("Powering On. Enjoy the ride!");
	} else if (Number(age) === 18) {
		console.log("Congratulations on your first year of driving. Enjoy the ride!");
	}
};

checkDriverAge2(92);
