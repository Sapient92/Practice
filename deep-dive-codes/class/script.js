// var Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }

//   Person.prototype.sayHi = function () {
//     console.log("Hi! My Name Is " + this.name);
//   };

//   return Person;
// })();

// var me = new Person('Kim');
// me.sayHi();

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(`Hi! My name is ${this.name}`);
//   }

//   static sayHello() {
//     console.log("Hello!");
//   }
// }

// const me = new Person('Lee');
// console.log(me.name);
// me.sayHi();
// Person.sayHello()

// const Person = "";
// {
//   console.log(Person);

//   class Person {};
// }

// function Person(name) {
//   this.name = name;
// }

// Person.sayHi = function () {
//   console.log("hi");
// };

// Person.sayHi();

// class Person {
//   constructor(name, address) {
//     this.name = name;
//   }

//   static sayHi() {
//     console.log('hi');
//   }
// }

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// const square = new Square(10, 10);
// console.log(square.area());

// console.log(Math.max(1, 2, 3));
// console.log(Object.is({}, {}));

// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//   get fullName() {
//     return `${this.lastName} ${this.firstName}`;
//   }

//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   }
// };

// const me = new Person('Yongsik', 'Kim')
// console.log(Object.getOwnPropertyNames(me));
// console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(me)));

// class Person {
//   #name = "";

//   constructor(name) {
//     this.#name = name
//   }

//   get name() {
//     return this.#name.trim()
//   }
// }

// const me = new Person('Lee');
// console.log(me.name);

// class MyMath {
//   static PI = 22 / 7 ;

//   static #num = 10

//   static increment() {
//     return ++this.#num
//   }
// }

// console.log(MyMath.PI)
// console.log(MyMath.increment())

// class Animal {
//   constructor(age, weight) {
//     this.age = age;
//     this.weight = weight;
//   }

//   eat() {
//     return "eat";
//   }

//   move() {
//     return "move";
//   }
// }

// class Bird extends Animal {
//   fly() {
//     return "fly";
//   }
// }

// const bird = new Bird(1, 5);
// console.log(bird);
// console.log(bird instanceof Bird);
// console.log(bird instanceof Animal);

// console.log(bird.eat());
// console.log(bird.move());
// console.log(bird.fly());

// class Rectangle {
//   constructor(width, height) {
//     console.log(this);
//     console.log(new.target);
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   toString() {
//     return `width = ${this.width}, height = ${this.height}`;
//   }
// }

// class ColorRectangle extends Rectangle {
//   constructor(width, height, color) {
//     super(width, height);
//     console.log(this);
//     this.color = color;
//   }

//   toString() {
//     return super.toString() + `, color = ${this.color}`;
//   }
// }

// const colorRectangle = new ColorRectangle(2, 4, "red");
// console.log(colorRectangle);

// console.log(colorRectangle.getArea());
// console.log(colorRectangle.toString());

// class MyArray extends Array {
//   static get [Symbol.species]() {
//     return Array;
//   }

//   uniq() {
//     return this.filter((v, i, self) => self.indexOf(v) === i);
//   }
// }

// const myArray = new MyArray(1, 1, 2, 3);
// console.log(typeof myArray);
// const uniq = myArray.uniq();
// console.log(uniq);
// console.log(typeof uniq);
