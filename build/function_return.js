"use strict";
// 리턴 값 타입이 명시적으로 설정되지 않는 함수
function assignClass(name) {
    document.documentElement.classList.add(name);
}
// 리턴 값 타입이 숫자인 함수
function factorial(n) {
    if (n < 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// 리턴 값 타입이 문자인 경우
function repeat(text, count = 1) {
    let result = "";
    while (count--) {
        result += text;
    }
    return result;
}
