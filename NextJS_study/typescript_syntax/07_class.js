// 클래스 class
// 실제 세계의 물체를 표현하는 데 사용 -> 정보(변수)와 행동(함수)
// 인터페이스와 차이점 = constructor 생성, 함수의 내용을 꼭 써야 함
// 자주 사용되는, 동일하게 사용되는 변수나 함수 등을 활용하기에 적합함
var _this = this;
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (y === void 0) { y = 0; }
        this.y = y;
        this.x = x;
    }
    Point.prototype.dist = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.origin = new Point(0, 0);
    return Point;
}());
var point1 = new Point(10, 20);
var point2 = new Point(25); // y=0
var originPoint = {
    x: 0, y: 0,
    dist: function () { return Math.sqrt(_this.x * _this.x + _this.y * _this.y); }
};
var pointA = {
    x: 10, y: 20,
    dist: function () { return Math.sqrt(_this.x * _this.x + _this.y * _this.y); }
};
var pointB = {
    x: 25, y: 0,
    dist: function () { return Math.sqrt(_this.x * _this.x + _this.y * _this.y); }
};
