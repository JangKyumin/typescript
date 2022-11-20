// 오직 숫자 아이템만 허용
let nums: number[] = [100, 101, 102];

// 오직 문자 아이템만 허용
let strs: string[] = ["ㄱ", "ㄴ", "ㄷ"];

// 오직 불리언 아이템만 허용
let boos: boolean[] = [true, false, true];

// 모든 데이터 타입을 아이템으로 허용
let anys: any[] = [100, "ㄴ", true];

// 특정 데이터 타입만 아이템으로 허용
let selects: (number | string)[] = [102, "ㅇ"];

// 테스트로 형식을 임의로 생성
let n_l: { name_list: string[] } = { name_list: ["kim", "jang"] };
