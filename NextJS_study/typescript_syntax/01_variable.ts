// Variable( 변수 )
// 변할 수 있는 값, 변수

// variable = space +  name
// - 값을 저장하는 '공간'
// - 값을 '이름' 지을 수 있음 -> 역할/의미 부여

// 1. boolean -> true / false 
var isDone: boolean = false;

// 2. number
var age: number = 42;

// 3. string
var myName: string = "Anders";

// any -> not sure type
var notSure: any = true;
notSure = 23;
notSure = "maybe a string";

console.log(isDone, age, myName, notSure);

// null vs undefined 
var emptyVar = null; // 정말 없는 값, 비어있는 것을 표현
console.log(emptyVar);

var newVar; // 변수에 대한 명세가 없는 것
console.log(newVar);

// list
var list: number[] = [1, 2, 3];
var list2: Array<number> = [4, 5, 6];

console.log(list, list2);