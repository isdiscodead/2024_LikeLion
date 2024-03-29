// 클래스 class
// 실제 세계의 물체를 표현하는 데 사용 -> 정보(변수)와 행동(함수)
// 인터페이스와 차이점 = constructor 생성, 함수의 내용을 꼭 써야 함
// 자주 사용되는, 동일하게 사용되는 변수나 함수 등을 활용하기에 적합함

class Point {
    x: number;

    constructor(x: number, public y: number=0) {
        this.x = x;
    }

    dist() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    static origin = new Point(0, 0);
}

var point1 = new Point(10, 20);
var point2 = new Point(25); // y=0


// implementation by interface
// 1. object 형태로 직접 다 적어줘야 함
// 2. dist() 함수의 코드 중복 발생
// 3. static origin과 달리 자주 사용하는 변수를 차이점 없이 사용
interface PointInterface {
    x: number;
    y: number;

    dist(): number;
}

var originPoint: PointInterface = {
    x:0, y:0,
    dist: () => Math.sqrt(this.x * this.x + this.y * this.y)
};

var pointA: PointInterface = {
    x:10, y:20,
    dist: () => Math.sqrt(this.x * this.x + this.y * this.y)
};

var pointB: PointInterface = {
    x:25, y:0,
    dist: () => Math.sqrt(this.x * this.x + this.y * this.y)
};