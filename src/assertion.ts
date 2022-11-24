let assertion: any = "타입 어설션은 '타입을 단언'합니다.";

// 방법 1: assertion 변수의 타입을 string으로 단언 처리
let assertion_count: number = (<string>assertion).length;

// 방법 2: assertion 변수의 타입을 string으로 단언 처리
let assertion_count_as: number = (assertion as string).length;
