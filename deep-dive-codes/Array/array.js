// const arr = ["apple", "banana", "orange"];

// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr.length);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function linearSearch(array, target) {
//   const length = array.length;

//   for (i = 0; i < length; i++) {
//     if (array[i] === target) return i;
//   }
//   return -1;
// }
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 4));
// console.log(linearSearch([1, 2, 3, 4, 5, 6], 7));

// const arr = [];
// console.time("Array Performance Test");

// for (let i = 0; i < 10000000; i++) {
//   arr[i] = i;
// }

// console.timeEnd("Array Performance Test");

// const obj = {};
// console.time("Object Performance Test");

// for (let j = 0; j < 10000000; j++) {
//   obj[j] = j;
// }

// console.timeEnd("Object Performance Test");

// const arr = [1, 2, 3, 4, 5];
// arr.length = 7;
// console.log(arr);

// console.log(Object.getOwnPropertyDescriptors(arr));

// const arr = Array.from({length: 3});
// console.log(arr);

// const array = [];

// array[0] = 1;
// array["1"] = 2;

// array["foo"] = 3;
// array[{}] = 4;
// array[2] = {4: 4};

// console.log(array);
// console.log(array["foo"]);

// const Stack = (function () {
//   function Stack(array = []) {
//     if (!Array.isArray(array)) {
//       throw new TypeError(`${array} is not an array.`);
//     }
//     this.array = array;
//   }

//   Stack.prototype = {
//     constructor: Stack,

//     push(value) {
//       return this.array.push(value);
//     },

//     pop() {
//       return this.array.pop();
//     },

//     entries() {
//       return [...this.array];
//     },
//   };
//   return Stack;
// })();

// const stack = new Stack([1, 2]);
// console.log(stack.entries());
// stack.push(3);
// console.log(stack.entries());
// stack.pop();
// console.log(stack.entries());

// concat
// const arr1 = [1, 2];
// const arr2 = [3, 4];

// let result = arr1.concat(arr2);
// console.log(result);
// result = result.concat(5, 6);
// console.log(result);

// splice

// const arr = [1, 2, 3, 4];
// const result = arr.splice(1, 0, 20, 30);

// console.log(result);
// console.log(arr);

// const arr = [1, 2, 3, 4];
// // const arr1 = arr.join(" ");

// // const result = arr.reverse();
// // console.log(arr);
// // console.log(result);

// arr.fill(0, 1, 2);
// console.log(arr);

// const arr1 = [NaN];
// console.log(arr1.includes(NaN));
// console.log("content" > "css");

// class Numbers {
//   numberArray = [];

//   multiply(arr) {
//     arr.forEach(function (item, _ , this) {
//       this.numberArray.push(item * item);
//     });
//   }
// }

// const numbers = new Numbers();
// numbers.multiply([1,2,3]);

// const example = () => {
//     console.log('scope');
// }

// const person = {
//   name: "Kim",
//   age: () => {
//     console.log("10");
//   },
// };

// const arr = [1, 2, 3, 4];
// // 0을 배열의 인덱스 1부터 3이전(인덱스 3 미포함)까지 요소로 채운다.
// arr.fill(0, 1, 3);
// // 원본 배열을 직접 변경한다.
// console.log(arr); // [ 1, 0, 0, 4 ]

// const arr = [1, 2, 3, 4, NaN];

// arr.indexOf(NaN); // 배열에 NaN 요소가 있지만 -1을 반환한다.
// const result = arr.includes(NaN); // true
// console.log(result);

// const arr = [1, [2, [3, [4]]]];

// // 깊이 값의 기본값은 1이다.
// arr.flat(); // [ 1, 2, [ 3, [ 4 ] ] ]
// arr.flat(1); // [ 1, 2, [ 3, [ 4 ] ] ]

// // 깊이 값을 2로 지정하여 2단계 깊이까지 평탄화한다.
// arr.flat(2); // [ 1, 2, 3, [ 4 ] ]
// // 2번 평탄화 한 것과 동일하다.
// arr.flat().flat(); // [ 1, 2, 3, [ 4 ] ]

// // 깊이 값을 Infinity로 지정하면 중첩 배열 모두를 평탄화 한다.
// arr.flat(Infinity); // [ 1, 2, 3, 4 ]

// const arr = [1, [2, [3, [4]]]];
// arr.flat(1);
// console.log(arr.flat(1));

// const points = [40, 100, 1, 5, 2, 25, 10];

// points.sort();

// console.log(points); // [1, 10, 100, 2, 25, 40, 5]

// const values = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

// const result = values.reduce((acc, cur, i, _values) => {
//   return acc.includes(cur) ? acc : acc.concat(cur);
// }, []);

// console.log(result);

// const arr = ["hello", "world"];
// const result = arr.map((x) => x.split(""));
// console.log(result);
