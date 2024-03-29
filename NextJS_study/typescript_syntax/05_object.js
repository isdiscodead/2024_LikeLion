// 오브젝트 Object
// OOP에서의 오브젝트와 달리 dict, map과 유사한 개념
// 여러 변수 혹은 함수가 하나로 구조화 된 형태
var emptyObject = {};
// 안에 있는 변수 하나 하나 = member or property
var personObject = {
    firstName: 'John',
    lastName: 'Smith'
};
personObject['salary'] = 14000;
// check properties
for (var member in personObject) {
    if (personObject.hasOwnProperty(member)) {
        console.log('the member ' + member +
            ' of personObject is ' + personObject[member]);
    }
}
