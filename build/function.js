"use strict";
// [오류]
// "noImplicitAny": true // 암시적인 any 사용 시, 오류 메시지를 출력된다
// function setInfo(id, name) {
function setInfo(id, name) {
    return { id, name };
}
let product_one = setInfo(120912, "스노우보드");
