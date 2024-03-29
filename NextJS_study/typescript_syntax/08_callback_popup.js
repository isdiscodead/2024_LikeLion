// 이번 내용은 javascript에서도 사용 가능한 내용
// 콜백 callback
// 넘길 수 있는 (인자 등으로) 실행 가능한 코드 조각
// 원하는 시간이나 조건에 그 코드 조각이 실행되기 원할 때
var callback = function () {
    alert('callback was executed!');
};
setTimeout(callback, 5000); // 5초 후에 실행
// 바로 익명 함수 작성도 가능
setTimeout(function () {
    alert('callback was executed!');
}, 5000);
// 팝업 pop-up
alert('hello world'); // 단순 close 가능한 팝업
console.log(prompt('hello world')); // input 가능 + 캔슬/확인 팝업 -> 입력한 문자열 반환
confirm('hello world'); // 캔슬/확인 팝업 -> false / true 반환
