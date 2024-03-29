// Interface 인터페이스 = Object에 대한 타입
// 여러 개의 함수와 변수 등이 구조적으로 어떻게 결합되어야 하는지에 대한 약속
// 하나의 함수가 가져야 할 구조에 대한 약속

interface Person {
    name: string;
    age?: number // ? == optional
    move(): void;
}

var person: Person = {
    name: 'John',
    move: () => {}
}

var person2: Person = {
    name: 'John',
    age: 24,
    // move() 없앨 경우 ...
    // 'move' 속성이 '{ name: string; age: number; }' 형식에 없지만 
    // 'Person' 형식에서 필수입니다.
    move: () => {}
}

var person3: Person = {
    name: 'John',
    // age: true, -> 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.
    move: () => {},
}

// function type
interface SearchFunc {
    (source: string, substring: string): boolean;
}

var mySearch: SearchFunc; // name is not important
mySearch = function (src: string, sub: string) {
    return src.search(sub) != -1; // search()는 못 찾으면 -1 반환됨
}