"use strict";
/**
 * any
 *
 * 어떠한 타입도 적용이 가능, 조심해서 사용하는 것이 좋다.
 * 타입 구분이 필요한 시점에 모든 타입을 받아들이기 때문에 검증이 어렵다
 * 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크하지 않는다.
 */
let one = 10;
console.log(one.length); // Property 'length' does not exist on type 'number'. 오류가 발생하여 문제를 발겮 가능하다.
let two = 10;
console.log(typeof two); // number로 인식한다.
console.log(two.length); // undefined로 오류가 발생하지 않는다.
/**
 * unknown
 *
 * TypeScript 3.0에서 도입된 타입으로 알 수 없는 타입이라는 의미이다.
 * 모든 값을 허용하지만 할당된 값이 어떤 타입인지 모르기 때문에 함부로 프로퍼티나 연산을 할 수 없다.
 * 변수의 타입이 unknown이라 어떤 값이든 올 수 있기때문에 엄격하게 검사하라는 의미이다.
 * 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크한다.
 */
let valueNum = 10;
let valueStr = "Test";
console.log(valueNum.length);
console.log(valueStr.length);
// 위 두 객체가 모두 문제가 발생하지만 아래와 같이 사용하면 string은 정상적으로 처리된다.
if (typeof valueNum === "number") {
    console.log(valueNum.length);
}
if (typeof valueStr === "string") {
    console.log(valueStr.length);
}
/**
 * never
 * 일반적으로 함수의 리턴 타입으로 사용한다.
 * 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.
 * 무한 루프(loop)에 빠지는 것과 같다.
 */
// 항상 오류 발생
function invalid(message) {
    throw new Error(message);
}
// never 타입을 결과 추론(Inferred)
function fail() {
    return invalid("실패");
}
// 무한 루프
function infiniteAnimate() {
    while (true) {
        infiniteAnimate();
    }
}
let never_type;
// 오류 발생: 숫자 값을 never 타입 변수에 할당할 수 없습니다.
never_type = 99;
// 함수의 반환 값이 never 타입 이기 때문에 오류가 발생하지 않습니다.
never_type = (function () {
    throw new Error("ERROR");
})();
/**
 * null, undefined
 * 데이터 타입 이자 하나의 값이다.
 * strictNullChecks로 검증 유무를 설정 가능하다.
 * any 또는 |를 사용하여 처리 가능하다.
 */
let nullable = null;
let undefinedable = undefined;
// [오류]
// [ts] 'undefined' 형식은 'null' 형식에 할당할 수 없습니다.
// let nullable: null
nullable = undefined;
// [오류]
// [ts] 'null' 형식은 'string' 형식에 할당할 수 없습니다.
// let assign_name: string
let assign_name = null;
if (!assign_name) {
    assign_name = "미네랄";
}
// any또는 |를 사용해서 해결 가능하다.
// let assign_name:any = null;
let assign_name2 = null;
if (!assign_name2) {
    assign_name2 = "미네랄";
}
