/**
 * Javascript Data Types
 * 1. Boolean - true / false
 * 2. String - 'hello, world' / "helo world"
 * 3. Number - 123
 * 4. Object - Arrays, Dates, Literals, etc
 * 5. Null - Explicitly set a variable with no value
 * 6. Undefined - For variables that have not yet been defined
 * 7. Symbol
 */

// string
// let email = "arie@example.com";

// string concatenation

// let firstName = "Arie";

// console.log(firstName);

// let lastName = "Syukron";

// console.log(lastName);
// console.log(firstName + " " + lastName);

// getting character
// console.log(firstName[2]);

// string length
// console.log(lastName.length);

// string methods
// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// console.log(email.indexOf("@"));

// common string methods

// console.log(email.lastIndexOf("m"));

// console.log(lastName.replace("o", "i"));

// Numbers
// let radius = 10;
// let pi = 3.14;

// let num = 3;

// let radiusStr = "10";

// console.log(radius + radiusStr);

// aritmatic symbols (+, -, *, /, %, **)
// let multiply = radius * pi;
// console.log(Number(multiply.toFixed(2)));
// console.log(radius / pi);
// console.log(radius % num);
// console.log(num - 10);

// B I D M A S

// let exp = radius * (num - 1) ** 2;
// console.log(exp);

// let subs = 1000;

// subs = subs + 1;

// subs += 1;
// subs -= 1;
// subs *= 1;
// subs /= 1;

// subs++;

// console.log(subs);

// subs--;

// ++subs;

// console.log(subs);

// console.log(firstName + " " + lastName + " has " + subs + " subscribers");
let html = `
	<h1>Hello World<h1>
	<p1>Lorem ipsum dolor sit amet consectetur adipisicing elit.<p1>
`;

// console.log(html);

let books = 10;
let names = "Meli";

let summary = `${names} has ${books} books`;

let meliHtml = `
	<h1>Hello, ${names}<h1>
	<p1>${books} books are yours<p1>
`;

// console.log(meliHtml);

// Boolean - true / false

// const a = true;
// const b = "true";

// const c = 10;

// console.log(String(c));

// console.log(a);
// console.log(Boolean(b));

const a = 10;
const b = 12;
const c = 4;

const d = "10";

const e = 0;

// operator returns boolean

// console.log(a == b); // false
// console.log(a != a); // false
// console.log(a < c); // false
// console.log(c > b); // false
// console.log(c < b); // true

// console.log(a === d);

console.log(!!e === !!e);
