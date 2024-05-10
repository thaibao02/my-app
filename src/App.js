import logo from './logo.svg';
import './App.css';

//bai 3
//Find the first person off the people array is teenager (age >=10 and age <=20)
// var people = [
//   {name: 'Jack', age: 50},
//   {name: 'Michael', age: 9}, 
//   {name: 'John', age: 40}, 
//   {name: 'Ann', age: 19}, 
//   {name: 'Elisabeth', age: 16}
// ];

// let personFound = false;
// let personName;
// for(let i = 0; i < people.length; i++){
//   if(people[i].age >= 10 && people[i].age <= 20){
//     personFound = true;
//     personName = people[i].name;
//     break;
//   }
// }
// if (personFound) {
//   console.log(personName + " là người trẻ tuổi đầu tiên.");
// } else {
//   console.log("Không tìm thấy người trẻ tuổi nào trong mảng.");
// }
//bai 3
//•	Find the all person of the people array is teenager (age >=10 and age <=20)
// var people = [
//   {name: 'Jack', age: 50},
//   {name: 'Michael', age: 9}, 
//   {name: 'John', age: 40}, 
//   {name: 'Ann', age: 19}, 
//   {name: 'Elisabeth', age: 16}
// ];
// let teenagers = [];

// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 10 && people[i].age <= 20) {
//     teenagers.push(people[i]); // thêm người vào mảng có độ tuổi từ 10 tới 20
//   }
// }

// if (teenagers.length > 0) {
//   console.log("teenagers:");
//   for (let i = 0; i < teenagers.length; i++) {
//     console.log(teenagers[i].name + ", " + teenagers[i].age);
//   }
// } else {
//   console.log("not found.");
// }




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
