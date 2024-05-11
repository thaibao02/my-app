import logo from './logo.svg';
import './App.css';

//bai 1
//Find the first person off the people array is teenager (age >=10 and age <=20)
var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
];

let personFound = false;
let personName;
for(let i = 0; i < people.length; i++){
  if(people[i].age >= 10 && people[i].age <= 20){
    personFound = true;
    personName = people[i].name;
    break;
  }
}
if (personFound) {
  console.log(personName + " là người trẻ tuổi đầu tiên.");
} else {
  console.log("Không tìm thấy người trẻ tuổi nào trong mảng.");
}

//•	Find the all person of the people array is teenager (age >=10 and age <=20)

let teenagers = [];

for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 10 && people[i].age <= 20) {
    teenagers.push(people[i]); // thêm người vào mảng có độ tuổi từ 10 tới 20
  }
}

if (teenagers.length > 0) {
  console.log("teenagers:");
  for (let i = 0; i < teenagers.length; i++) {
    console.log(teenagers[i].name + ", " + teenagers[i].age);
  }
} else {
  console.log("not found.");
}

//•	Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
let allTeenagers = true;

for (let i = 0; i < people.length; i++) {
  if (people[i].age < 10 || people[i].age > 20) {
    allTeenagers = false; // đặt false nếu như người nào đó không phải là teenager
    break; 
  }
}

console.log(" teenagers:", allTeenagers);
//•	Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.
let hasTeenager = false;

for (let i = 0; i < people.length; i++) {
  if (people[i].age >= 10 && people[i].age <= 20) {
    hasTeenager = true; // đặt  true nếu như người nào đó là  teenager
    break; 
  }
}

console.log("Is there any teenager:", hasTeenager);

//  Bai 2
var arrayNumber = [1,2,3,4,5];
var sum = arrayNumber.reduce((accumulator, number)=> accumulator+ number, 0);
console.log( `sum : ${sum}`);

//Bai 3
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};
//•	Print the name of each company using forEach
companies.forEach(company => console.log(company.name));

//•	Print the name of each company that started after 1987
companies.forEach(company => {
  if(company.start > 1987){
    console.log(company.name);
  }
})

//•	Sort the companies based on their end date in ascending order
var sortCompanies = companies.sort((company1, company2)=> {
  return company1.end - company2.end;
})
console.log(sortCompanies);

//•	Sort the ages array in descending order
var sortAge = ages.sort((age1 , age2 ) => {
  return age2 - age1;
})
console.log(sortAge);

//•	Print the sum if you add all the ages using reduce
var sum = ages.reduce((accumulator , number)=> accumulator + number, 0)
console.log(`sum : ${sum}`);
//•	Create a function that takes an unknown number of arguments that are numbers and return their sum;
function sum1(...args) { // Rest parameter for modern syntax
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      throw new TypeError("All arguments must be numbers");
    }
    total += arguments[i];
  }
  return total;
}

const result1 = sum1(1, 2, 3, 4.5, 6);
console.log(result1); // Output: 16.5

try {
  const result2 = sum(1, 2, "hello", 4); // Error: Argument must be a number
} catch (error) {
  console.error(error.message);
}
//•	Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array, if the argument is an array, it should add its values to the array that will be returned by the function

function combineAndFlatten(...args) {
  const combinedArray = [];
  for (const arg of args) {
    if (Array.isArray(arg)) {
      combinedArray.push(...arg);
    } else {
      combinedArray.push(arg);
    }
  }
  return combinedArray;
}
//•	Destructuring the property street in a variable named street from the object person
const { address: { street } } = person;
console.log(street); 
//•	Write a function that every time you call it, it returns a number that increments starting from 0
function counter() {
  // Initialize a variable to keep track of the count (not directly accessible outside the function)
  let count = 0;

  // Return an inner function that increments the count and returns it
  return function() {
    count++;
    return count;
  };
}

// Create an instance of the counter function
const myCounter = counter();

// Call the counter multiple times
console.log(myCounter()); // Output: 1
console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3

// bài 4
class Shape {
  constructor(color) {
    this.color = color;
  }

  getArea() {
    throw new Error('getArea() method must be implemented in sub-classes');
  }

  toString() {
    return `Shape { color: ${this.color} }`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `Rectangle { color: ${this.color}, length: ${this.length}, width: ${this.width} }`;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }

  toString() {
    return `Triangle { color: ${this.color}, base: ${this.base}, height: ${this.height} }`;
  }
}




//slide 20 b3 
// let promise1 = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 2000);
// });

// let promise2 = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("Promise 2 resolved");
//   }, 1500);
// });
// Promise.all([promise1, promise2]).then((values)=>{
//   console.log(values);//result ["Promise 1 resolved", "Promise 2 resolved"]
// });

//slide 20 b2
// const anotherPromise  = new Promise((resolve , reject) =>{
//   resolve('Another promise');
// });
// anotherPromise
//   .then(result => {
//     console.log(result);
//     return 'Change promise';
//   })
//   .then(result => {
//     console.log(result);
//   });
//slide 20 b1
// const myPromise = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     const randomNum = Math.random();
//     if(randomNum < 0.5){
//       resolve(randomNum);
//     }else{
//       reject('Error : Random number is greater than 0.5');
//     }
//   },2000);
// });
// myPromise
//   .then(result => {
//     console.log('Success:', result);
//   })
//   .catch(error => {
//     console.log('Error : ', error);
//   });

//slide 16 n trong nay nhu the la phan con lai cua mang
// const number = [1, 2, 3, 4, 5];
// const [a, b, ...n] = number;

// console.log(a);
// console.log(b);
// console.log(n);

//slide 15
// function sum (... number){
//   let total = 0;
//   for(let n  of number){
//     if(n % 2 == 0){
//       total += n;
//     }
//   }
//   return total;
// }
// console.log(sum(1,2,3, 4,5));
// console.log(sum(1, 3,5,7));


//slide 10
// let person = {
//   name: "jhon",
//   age: 30,
//   greet : function(){
//     console.log(`hello , my name is ${this.name}, am in ${this.age} years old`)
//   }
// };
// person.greet();
//slide 9
// let sayHello = () => {
//   console.log("Hello");
// };
// sayHello();

//slie 8
// let square = num =>{
//   return num * num;
// };

// console.log(square(5));
// console.log(square(8));
// //slid 7
// let greet = (name, timeofDay) => {
//   console.log(`Good ${timeofDay}, ${name}!`);
// };

// greet('ALice', 'morning')
// greet('Bob', 'evening')
function App() {
  return (
    <></>
  );
}

export default App;
