// const count = (str, char) => (str.match(new RegExp(char, "gi")) ?? []).length;

// count("Is this all there is?", "is"); // 3
// count("Is this all there is?", "is"); // 0

// const target = "Is this all there is?";
// const regExp = /.../g;

// console.log(target.match(regExp));
// // ['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?']

// const target = "color colour";

// // 'colo' 다음 'u'가 최대 한 번(0번 포함) 이상 반복되고
// // 'r'이 이어지는 문자열과 매치한다.

// const regExp = /colou?r/g;

// console.log(target.match(regExp));
// // [ 'color', 'colour' ]
