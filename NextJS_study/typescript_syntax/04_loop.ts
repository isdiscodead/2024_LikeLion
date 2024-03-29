// 반복문 loop
// 비슷한 일을 여러 번 수행

var i;

for (i=0 ; i<3 ; i=i+1) { // 0, 1, 2
    console.log(i);
}

// for by collection
var myArray: string[] = ['A', 'B', 'C'];

for (var j=0 ; j<myArray.length ; j++ ) {
    console.log('index: ' + j + "->" + myArray[i]);
}

// while
var k = 10;

// k가 0보다 큰 상황에서 반복
while (k>0) {
    console.log(k + ' left');
    k -= 1; // 1씩 감소
}

// break
var l = 10;

while (true) {
    console.log(l + ' left');
    l -= 1; // 1씩 감소

    if (l==0) {
        break;
    }
}

// continue -> 다음 반복 횟수로 넘어감
for (var m=0 ; i<10 ; i++) {
    if (m%2 == 0) { // 짝수면 스킵
        continue;
    }
    console.log(i + 'is an odd number.');
}