# Typescript 공부

## 타입스크립트란?

- 자바스크립트에 개발자가 타입을 추가할 수 있도록 해준다.

## 시작하기

```shell
1. typescript 설치
npm install typescript -g

2. typescript node 설치 : 일반 node에서는 ts 파일에 types 적용으로 실해시 오류 발생함
npm install ts-node -g
```

### 1.simple-types

아래 3가지 타입이 기본으로 사용되는 타입이다.

- boolean- 참 또는 거짓 값
- number- 정수 및 부동 소수점 값
- string- "TypeScript Rocks"와 같은 텍스트 값

> **궁금한 부분**
>
> - 타입이 정해지면 이후에 변경이 가능한가?

### 2.special-types

any, unknown, never, null, undefined 타입으로 구성된다.

#### any

- 어떠한 타입도 적용이 가능, 조심해서 사용하는 것이 좋다.
- 타입 구분이 필요한 시점에 모든 타입을 받아들이기 때문에 검
- 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크하지 않는다.

#### unknown

- TypeScript 3.0에서 도입된 타입으로 알 수 없는 타입이라는 의미이다.
- 모든 값을 허용하지만 할당된 값이 어떤 타입인지 모르기 때문에 함부로 프로퍼티나 연산을 할 수 없다.
- 변수의 타입이 unknown이라 어떤 값이든 올 수 있기때문에 엄격하게 검사하라는 의미이다.
- 프로퍼티 또는 연산을 하는 경우 컴파일러가 체크한다.

#### never

- 일반적으로 함수의 리턴 타입으로 사용한다.
- 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.
- 무한 루프(loop)에 빠지는 것과 같다.

#### null, undefined

- 데이터 타입 이자 하나의 값이다.
- strictNullChecks로 검증 유무를 설정 가능하다.
- any 또는 |를 사용하여 처리 가능하다.

> **궁금한 부분**
>
> - never는 어느 케이스에서 사용할까?
