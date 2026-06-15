'use strict';

// let driverLicense = false;
// let passTest = true;

const calcAge3 = birthYear => 2026 - birthYear;
const age3 = calcAge3(2005);
console.log(age3);

// arrow functions
const retirementYears = (birthYear, firstName) => {
	const age = 2026 - birthYear;
	const ret = 65 - age;
	return `${firstName} retires in ${ret}`;
}

console.log(retirementYears(2005, 'Sohil'));