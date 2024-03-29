// function = action
// 해야 할 일을 적어놓고 ( define )
// 그 일을 수행 ( call )
// 가장 쉬운 함수 형태
function sayHello() {
    alert('hello');
}
sayHello();
// input -> black box ( ) -> output
// no output ( return value )
function sayMyName(name) {
    alert('name: ' + name);
    console.log('function sayMyName was called');
}
sayMyName('Jiwon'); // just print
// return value exists
function addTwoNumber(a, b) {
    return a + b;
}
console.log(addTwoNumber(2, 3)); // 5
// 함수를 변수에 저장 가능
var f1 = function (i) { return i * i; };
var f2 = function (i) { return i * i; };
var f3 = function (i) { return i * i; };
var f4 = function (i) { return i * i; };
var f5 = function (i) { return i * i; };
