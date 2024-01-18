const x = 1;
const y = 2;
// 전역 변수 선언

function foo(a) {
  const x = 10;
  const y = 20;
  // 지역 변수 선언

  console.log(a + x + y);
  // 메서드 호출
}
// 함수 정의

foo(100);
// 함수 호출

console.log(x + y);
// 메서드 호출
