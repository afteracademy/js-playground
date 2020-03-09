/* String Template - single quote and double quote are same */
// var course = 'Backend for Beginners';
// var framework = 'NodeJS'
/* Before */
// var message = 'Hello! Welcome to ' + course + ' in ' + framework;
// console.log(message);
/* Now */
// var message = `Hello! Welcome to ${course} in ${framework}`;
// console.log(message);
/* Property - It preserved the whitespace */
// var message = `Hello!
// Welcome to ${course} in ${framework}`;
// console.log(message);

/* var vs let vs const */
/* var can be redeclared */
// var message = 'Hello!';
// var message = 'Bye!';
// console.log(message);
/* let can not be redeclated */
// let message = 'Hello!';
// let message = 'Bye!';
// console.log(message);
/* const is similar to let but it can also not be reassigned */
// const message = 'Hello!';
// message = 'Bye!';
// console.log(message)

/* Destructuring in object */
// let person = { name: 'Ali', 'country': 'India' };
// let { name, country } = person;
// console.log(`name: ${name}, country: ${country}`);
/* Reversing the order do not change the assigment */
// let { country, name } = person;
// console.log(`name: ${name}, country: ${country}`);
/* create different variable names for fields */
// let { name: user, country: place } = person;
// console.log(`name: ${user}, country: ${place}`);
/* Destructuring object passed to a function */
// printName(person);
// function print({ name, country }) {
// 	console.log(`name: ${name}, country: ${country}`);
// }
// function printName({ name }) {
// 	console.log(`name: ${name}`);
// }

/* Default parameters in function */
// const area = getArea(2, 4);
// console.log(area);
// function getArea(length, width) {
// 	return length * width;
// }
// const area = getArea();
// console.log(area);
// function getArea(length = 1, width = 1) {
// 	return length * width;
// }
/* Argument List */
// myFunc('Backend', 'storage', 'business logic', 'scale', 'security');
// function myFunc(name, ...properties) {
// 	console.log(name, properties)
// }

/* Spread operator */
/* 1. Array Copy */
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// console.log(arr2)
/* 2. Object Copy */
// const obj1 = { name: 'Ali', course: 'Backend' };
// const obj2 = { ...obj1, company: 'AfterAcademt' };
// console.log(obj2)

/* Arrow operator */
// function area(length, width) {
// 	return length * width;
// }
// const area = (length, width) => {
// 	return length * width;
// }
// const area = (length, width) => length * width;
// console.log(area(2, 3))
/* Passing arrow function to another function */
// function process(name, callback) {
// 	const processedName = name.toLowerCase();
// 	callback(processedName)
// }
// process('ALI', name => console.log(name));
/* ALternative */
// process('ALI', function (name) {
// 	console.log(name)
// });

/* For-Each */
// const array = ['a', 'b', 'c', 'd'];
// array.forEach(value => console.log(value));
// const objArray = [
// 	{
// 		shape: 'Square',
// 		area: 'Side x Side'
// 	},
// 	{
// 		shape: 'Rectangle',
// 		area: 'Length x Width'
// 	},
// 	{
// 		shape: 'Circle',
// 		area: 'PI x Radius x Radius'
// 	}
// ]
// objArray.forEach(obj => console.log(obj.shape))
// objArray.forEach(({ shape }) => console.log(shape))

// const shapes = objArray.map(({ shape }) => shape);
// console.log(shapes);

// const square = objArray.find(obj => obj.shape === 'Square')
// console.log(square);

// const shapes = objArray.filter(obj => obj.shape === 'Square' || obj.shape === 'Rectangle');
// console.log(shapes);