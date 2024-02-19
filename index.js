// Ch-2 Ep-4
// let myName = "Ye Myat Min";
// console.log(myName);

// let age = "I am 18";
// console.log(age);

// let sayHi = "Hi there" + myName
// console.log(sayHi);

// let time = '3 o\' clock'
// console.log(time);

// let myHeight = `5' 7"`
// console.log(myHeight)

// let num1 = 10;
// let num2 = 20;
// let myFloat = 20.121;
// console.log(num1+num2+myFloat)


// Ep-5
// let myVar = false;
// console.log(myVar);

// let myName = "Ymm";
// console.log(Boolean(myName));

// falsy values
// 1. 0
// 2. ""
// 3. null
// 4. undefined
// 5. NAN
// 6. false

// let myString = "false";
// let myVar = Boolean(myString);
// console.log(myVar);

// let age = -1;
// console.log(Boolean(age));


// Ep-6
// undefined
// let x; 
// console.log(x);

// null
// let y = null;
// console.log(y)

// NAN
// let x;
// let y = 10;
// console.log(x+y)



// Ch-3 Ep-7
// expression
// "a" + "b" //"ab"
// 1+2 //3
// 5-1 //4

//statement
// let sum = 1+2; //statemnt => undefined

//opeartor
// 1. arithmetic (+, -)
// let x = "a" + 4;
// console.log(x);

// let y = "a"-"b";
// console.log(y);

// let z = 10*2;
// console.log(z);

// let a = 10%2;
// console.log(a);

// let b = 40/2;
// console.log(b);

// 2. assignment (=)
// let a,b,c = 0;
// console.log(c);

// 3. comparison (>, <, >=, <=, ==, ===, !=, !==)

// 4. logical
// 1. Not (!)
// console.log(!true)

// 2. And (&&)
// let num=1;
// console.log(num>0 && num==1)
// true && true

// 3. Or (||)
// let num=1;
// console.log(num>4 || num==1)
// false || true


// power
// console.log(2**4); 

// let a=3;
// a+=2;
// a-=3;
// a*=2;
// console.log(a)

// operator precedence
// let b=(10+6-2*4)/5;
// console.log(b)


// Ch-4 Ep-12
// Functions
// function shopping(product) {
//     console.log("go to shop");
//     console.log("buy a " + product);
//     console.log("return home");
// }
// shopping("pen");
// shopping();
// shopping("ruler");

// function add(num1,num2) {
//     return num1 + num2
// }

// let result = add(3,4);
// console.log(result+1)

// function sayName(name,age) {
//     // console.log(name,age);
//     some works
//     return name;
// }

// let test = sayName("Ye Myat Min",19);
// console.log(test);


// Ep-14
// default parameter
// let a=4;
// let b;
// function add(a,b) {
//     console.log(a+b) //4+undefined => NAN
// }

// add(4);

// function add(a,b=0) {
//     console.log(a+b) //4+0 => 4
// }

// add(4);


// Rest Parameter
// function add(a,b,...c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// add(1,2,3,4,5,6,7);


// Ep-15
// function statement
// function sayName() {
//     console.log("ymm");
// }
// sayName();  

// function expression
// let sayHi=function(word) {
//     console.log(word);
// }
// sayHi("Hi there");


// Ep-16
// Callback Function
// function sayName(name,fun) {
//     let result =  fun(name);
//     console.log(result);
// }

// sayName("Goe Goe", function(name) { return name});


// Ep-17
// function twice(num, plus) {
//     let add = plus(num);
//     let result = add*2;
//     console.log(result);
// }

// twice(5, function(num) { return num+2 });


// Ep-18
// Arrow Function
// let sayHi=name => name;

// console.log(sayHi("ymm"));

// let twice=num=>num*2;
// console.log(twice(5));


// Ch-5 Ep-19
// Array
// let mixture = new Array ("Ymm",19,2.3,true) // old syntax

// let mixture = ["Ymm",19,2.3,true];
// console.log(mixture.length);


// Ep-20
// let mixture = ["Ymm",19,2.3,true];
// let name = mixture[0];
// mixture.push("male");
// mixture.pop()
// console.log(mixture);

// let fruits = ['apple','orange'];
// fruits[2] = 'mango';
// console.log(fruits[fruits.length-1]);

// Nested Array
// let arr = [
//     ['a','b','c'],
//     [1,2,3]
// ];
// arr[0][3] = 'd';
// console.log(arr[0][2]);
// console.log(arr[0]);


// Ep-21
// spread operator
// ...
// let data1=[1,2,3];

// let data2=[4,5,6];

// let datas=[...data1,...data2];
// console.log(datas);

// function add(a,b) {
//     console.log(a+b);
// }

// let nums = [1,2];
// add(...nums);


// destructuring
// let datas=['mgmg',20,'Ttu'];

// let name = datas[0];

// let age= datas[1];

// let school= datas[2];

// let [name,age,school] = datas;
// console.log(name,age,school);

// function add([a,b]) {
//     console.log(a+b);
// }
// add([1,2]);


// Ep-22
// Array Methods
// let animals = ['dog','cat','mouse'];

// animals.push('bird');
// animals.pop();
// animals.shift();
// animals.unshift('tiger');
// let index = animals.indexOf('mouse');
// let j=animals.join('-');
// animals.splice(0,3)
// let s=animals.slice(0,2)

// console.log(animals);


// Ep-23
// map method
// let nums = [1,2,3,4,5,6,7,8];

// nums = nums.map(num => {
//     return num*2;
// })
// console.log(nums);

// let names = ['MgMg','KyawKyaw',"AungAung"];

// names=names.map(name => {
//     return "Mrs " + name;
// })
// console.log(names);


// Ep-24
// filter method
// let nums = [1,2,3,4,5,6];

// let filterNumber=nums.filter((num) => {
//     return num!=3;
// })
// console.log(filterNumber);


// Ep-25
// reduce method
// let nums = [1,2,3,4,5,6,7];

// let result=nums.reduce((prev,current) => {
//     return prev*current;
// });
// console.log(result);


// Ep-27
// Everything is a object
// let str = new String("Hi"); // low level
// let str = "Hi, there bro";
// console.log(typeof str);
// str=str.toUpperCase();
// str=str.toLowerCase();
// str=str.trim();
// let newArr=str.split(",");

// console.log(newArr);

// let num = new Number(1);
// let num=1.6;
// num=num.toFixed();

// console.log(num);

// let bool = new Boolean(true);
// let bool=true;
// bool=bool.toString()

// console.log(typeof bool);


// Ep-28
// Object
// let person = {
//     name : 'Ymm',
//     age : 19,
//     gender : 'male',
//     run() {
//         console.log('running');
//     }
// }

// console.log(person.age); // dot notation

// let propName = 'name';
// console.log(person['name']); // bracket notation (for dynamic)

// person.hairColor = 'black';
// person.run();

// person.drink = function() {
//     console.log("drinking");
// }

// console.log(person);


// Ep-29
// this

// method => method's object
// regular function => window
// arrow fun => parent's this (lexical scoping)

// let person = {
//     name : 'Ymm',
//     age : 19,
//     gender : 'male',
//     run() {
//         console.log(this)
//         // console.log(this.name + ' is running');
//         // console.log(this.name + ' is running');
//         // console.log(this.name + ' is running');
//         // console.log(this.name + ' is running');
//         // console.log(this.name + ' is running');
//         // console.log(this.name + ' is running');
//         // console.log(this.name + ' is running');
//         // console.log(this.name + ' is running');
//     }
// }

// person.run();

// function test() {
//     console.log(this);
// }
// test();

// parnet
// console.log(this);  

// let person = {
//     name : 'Ymm',
//     age : 19,
//     gender : 'male',
//     run() {
//         console.log(this); // person
//         setTimeout(() => {
//             console.log(this); // person
//         },3000)
//     },
//     // eat :() => {
//     //     // child
//     //     console.log(this); // window
//     // }
// }
// person.run();
// person.eat();
// console.log(window);



// setInterval(() => {
//     console.log("Hello Ymm");
// },2000)


// Ep-30
// object spread and destructuring and property shorthand
// object spread
// let obj1 = {
//     name: 'ymm',
//     age: 19
// }

// let obj2 = {
//     hairColor: 'black',
//     gender: 'male'
// }

// let obj3 = {...obj1,...obj2};

// console.log(obj3);

// object destructuring
// let {name,age} = {
//     name: "ymm",
//     age: 19
// }

// console.log(name,age);

// property shorthand
// let name = "ymm";
// let age= 19;

// let person = {
//     name,
//     age
// }

// console.log(person);


// Ep-31
// Javascript data structure
// let people = [
//     {name: "ymm", age: 19, gender: "male"},
//     {name: "susu", age: 20, gender: "female"},
//     {name: "david", age: 29, gender: "male"},
//     {name: "susan", age: 23, gender: "female"},
// ]

// let names=people.map(person=> {
//     return person.name
// })

// console.log(names);

// let userSearch=prompt("Search person:");
// let filteredNames=people.filter(person=> {
//     return person.name.includes(userSearch);
// })

// console.log(filteredNames);

// Ep-32
// JSON ''
// String,number,boolean,null,array,object  
// let person = '{"name" : "ymm", "age" : 19}';

// let object = JSON.parse(person);
// console.log(object.name);

// let person = {
//     name : 'ymm',
//     age: 19
// }

// console.log(JSON.stringify(person));



// Ch-6
// Ep-33
// conditions (if else)
// let userPrompt=prompt(`Are u tired? "yes/no"`);

// if(userPrompt === "yes") {
//     console.log("Take a rest");
// }
// else if(userPrompt === "no") {
//     console.log("Go work");
// }
// else {
//     console.log("Enter yes or no");
// }


// Ep-34
// if else examples
// let product_prices = [100,200,100,500,300,700,100];

// let discount = product_prices.map(price => {
//     if(price===100) 
//         price-=30;
//         return price;
    
// })
// console.log(discount);


// let people = [
//     {name: "susu", age: 25},
//     {name: 'david', age: 30, gender: 'm'},
//     {name: 'kaung', age: 20, gender: 'm'},
//     {name: 'susan', age: 32, gender: 'f'}
// ]

// people.map(person => {
//     if(person.gender==="m") {
//         person.gender = "male";
//     }
//     else if(person.gender==="f") {
//         person.gender = "female"
//     }
//     else {
//         person.gender = "unknown";
//     }
//     return person
// })

// console.log(people);


// Ep-35
// ternary operator
// let age = 18;
// let permission = age > 18 ? "yes" : "no";
// console.log(permission);


// Ep-36
// switch statement
// switch(100) {
//     case 1:
//         console.log('one');
//         break;
//     case 2:
//         console.log('two');
//         break;
//     case 3:
//         console.log('three');
//         break;
//     default:
//         console.log('this is default');            
// }

// let people = [
//     {name: 'ymm', age: 19, gender: 'm'},
//     {name: 'mgmg', age: 29},
//     {name: 'susu', age: 21, gender: 'f'}
// ];

// people = people.map(person => {
//     switch(person.gender) {
//         case "m":
//             person.gender = "male";
//             break;
//         case "f":
//             person.gender = "female";
//             break;
//         default:
//             person.gender = "unknown";        
//     } 
//     return person;  
// })

// console.log(people);


// Ep-37
// while loop
// let people = ['aung','kyaw','su','tun'];

// let num=0;
// while (num < people.length) {
//     console.log(people[num]);  
//     num++;
// }


// Ep-38
// do while loop
// let x=0
// do {
//     console.log(x);
//     x++;
// } while (x<10);


// for loop
// let people = ['aung','kyaw','su','tun','mg','zaw'];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }


// Ep-39
// for of loop
// let people = ['aung','kyaw','su','tun','aye'];
// for (person of people) {
//     console.log(person);
// }


// for in loop
// let person = {
//     name: 'ymm',
//     age: 19
// }

// for (key in person) {
//     console.log(`${key} is ${person[key]}`);
// }


// let people = ['aung','kyaw','su','tun','aye'];

// for ( key in people) {
//     console.log(people[key]);
// }


// Ep-40
// Scoping
// let x = 0; // global variable
// console.log(x);

// {
//     let y=10; // local variable
//     console.log(y);
// }

// let y=10;
// function test() {
//     console.log(y);
// }

// test();

// {
//     {
//         let z=20;
//         console.log(z);
//     }
//     // console.log(z);
// }
// console.log(z);



// Ch-7
// Ep-41
// OOP (blueprint mhr te sout htr tat obj twy ka 1 khu nak 1 khu ma tu)(class=blueprint)
// class Car {
//     wheels=4;
//     color="black";
//     drive() {
//         console.log("Car is driving")
//     }
// }

// let car = new Car;
// console.log(car.color);

// let carTwo = new Car;
// carTwo.color = "red";
// console.log(carTwo.color);


// Ep-42
// OOP Example
// class Calculator {
//     static PI = 3.14; // static ka class name ko kine p direct kaw tone loh ya twr tl
//     plus(num1,num2) {
//         return num1+num2;
//     }

//     minus(num1,num2) {
//         return num1-num2;
//     }

//     multiply(num1,num2) {
//         return num1*num2;
//     }

//     division(num1,num2) {
//         return num1/num2;
//     }

//     remainder(num1,num2) {
//         return num1%num2;
//     }
// }

// let calculator = new Calculator;
// console.log(Calculator.PI);

// console.log(Math.PI);


// Ep-43
// class Calculator {
//     PI = 3.14;
//     area(r) {
//         return this.PI*r**2; // class htal mhr shi tat method or property 
//                             // twy kaw tone chin yin this // nak kaw tone
//     }
//     volume(r,h) {
//         return this.area(r)*h
//     }
// }

// let calculator = new Calculator;
// console.log(calculator.area(3));
// console.log(calculator.volume(2,4));


// Ep-44
// static method mhr this keywork ka a lode ma lode
// class Calculator {
//     PI = 3.14;
//     Name = "casio";
//     area(r) {
//         return this.PI*r**2;  
                            
//     }
//     volume(r,h) {
//         return this.area(r)*h
//     }
//     static info() {
//         let calculator=new Calculator;
//         console.log(`I am ${calculator.Name} calculator`);
//     }
// }

// Calculator.info();
// let calculator = new Calculator;
// console.log(calculator.info());


// Ep-45
// constructor
// class Car {
//     Name ='';
//     wheels =4;
//     constructor(name,wheels) {
//         this.Name = name;
//         this.wheels = wheels;
//         this.drive()
//     }
//     drive() {
//         console.log(`${this.Name} is driving`);
//     }
//     getWheel() {
//         console.log(`${this.Name} has ${this.wheels} wheels`)
//     }
// }

// new Car('BMW',4);
// let toyota = new Car('toyota',10);
// toyota.getWheel();


// Ep-46
// Access Modifier (public, private)
// class Car {
//     Name = "toyota"; // public
//     #hp = 3000; // private

//     getHp() {
//         console.log(`${this.Name} has ${this.#hp} hp.`)
//     }
// }

// let car = new Car;
// car.#hp=1000;
// console.log(car.getHp());
// console.log(car.#hp);


// Ep-47
// inheritance
// class Animal {
    
//     constructor(name) {
//         this.Name = name;
//     }

//     run() {
//         console.log(`${this.Name} is running`);
//     }
// }

// class Dog extends Animal{
//     bark() {
//         console.log(`${this.Name} woof woof`);
//     }
// }

// let dog = new Dog('Aung Nak');
// dog.run();
// dog.bark();

// public => access anywhere
// private => access only in own class
// protected => access only in own class and child class



// Ch-8
// Ep-49
// Asynchronous Javascript

// sync way
// console.log(1);
// console.log(2);

// async way
// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3)
// },3000);
// console.log(4);


// Ep-50
// promise
// function asynchronous() {
//     return new Promise((resolve, reject) => {
//         let result=0;
//         for(let i=0; i<1000000000; i++) {
//             result += i;
//         }
        
//         if(result) {
//             resolve(result);
//         }
//         else {
//             reject("There is a error.");
//         }
//     })
// }

// console.log("work");
// asynchronous()
// .then((result) => {
//     console.log(result);
//     console.log("after async task")
// })
// .catch((error) => {
//     console.log(error);
// })
// console.log("main work");


// Ep-51
// fetch api
// let userInput=prompt("Enter user id:")
// fetch('https://jsonplaceholder.typicode.com/todos/'+userInput)
// .then((response) => {
//     return response.json();
// })
// .then((datas) => {
//     console.log(datas);
// })
// .catch((err) => {
//     console.log(err);
// })


// Ep-52
// async await
// async function fetchTodos() {
//    try {
//         let response= await fetch('https://jsonplaceholder.typicode.com/todos/');
//         console.log('hi');
//         let datas = await response.json();
//         console.log(datas);
//    }
//    catch(err) {
//     console.log(err);
//    }
// }

// fetchTodos();


// Ep-53
// Coding styles

// all cap (for constant)
// HELLO_WORLD
// const PI = 3.14;

// // snake case (for regular variable)
// hello_world 
// let color_name = "black";

// // camel case (for object propery and method)
// helloWorld 
// let obj = {
//     propertyName: 'name',
//     methodName() {

//     }
// }

// // capital case (for class)
// helloWorld
// class MyCar {

// }


// Ch-9
// Ep-54
// Nodejs intro
// const {add,minus,PI} = require('./math');
// console.log(add(1,2));
// console.log(minus(5,1));
// console.log(PI);



