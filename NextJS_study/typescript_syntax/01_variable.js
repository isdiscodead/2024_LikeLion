// Variable( 변수 )
// 변할 수 있는 값, 변수
// variable = space +  name
// - 값을 저장하는 '공간'
// - 값을 '이름' 지을 수 있음 -> 역할/의미 부여
// 1. boolean -> true / false 
var isDone = false;
// 2. number
var age = 42;
// 3. string
var myName = "Anders";
// any -> not sure type
var notSure = true;
notSure = 23;
notSure = "maybe a string";
console.log(isDone, age, myName, notSure);
// null vs undefined 
var emptyVar = null; // 정말 없는 값, 비어있는 것을 표현
console.log(emptyVar);
var newVar; // 변수에 대한 명세가 없는 것
console.log(newVar);
// list
var list = [1, 2, 3];
var list2 = [4, 5, 6];
console.log(list, list2);
