// 조건문 conditions
// 특정 조건이 맞을 때만 일을 수행
// ~ 하면 = if 
var homewarkDone = true;
// if 괄호 안에는 boolean만 올 수 있음
if (homewarkDone == true) {
    alert('Then you can play from now');
}
// if-else
var kor = 60;
var eng = 80;
if (kor > 70 && eng > 70) {
    alert('you\'re an excellent student.');
}
else {
    alert('you should study more.');
}
// switch 
var score = 'C';
switch (score) {
    case 'A':
        console.log('You got an A');
        break; // break 필수 ( 안 쓰면 아래도 쭉 실행됨 )
    case 'B':
        console.log('You got a B');
        break;
    case 'C':
        console.log('You got a C');
        break;
    case 'D':
        console.log('You got a D');
        break;
    default:
        console.log('You didn\'t get any score');
        break;
}
