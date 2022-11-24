# Typescript 공부

## 타입스크립트란?

- 자바스크립트에 개발자가 타입을 추가할 수 있도록 해준다.

## 시작하기

```shell
1. typescript 설치
npm install typescript -g

2. typescript node 설치 : 일반 node에서는 ts 파일에 types 적용으로 실해시 오류 발생함
npm install ts-node -g

3. tsc 명령으로 타입스크립트 컴파일러를 사용하기
tsc -w

4. ts-node를 사용하여 .ts 파일 실행하기
ts-node simple-types.ts
```

### simple-types

아래 3가지 타입이 기본으로 사용되는 타입이다.

- boolean- 참 또는 거짓 값
- number- 정수 및 부동 소수점 값
- string- "TypeScript Rocks"와 같은 텍스트 값

> **궁금한 부분**
>
> - 타입이 정해지면 이후에 변경이 가능한가?

### special-types

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
- any 타입의 값을 포함해 어떤 값도 가질 수 없다.
- 때때로 점유할 수 없는 또는 바닥 타입이라고 불린다.
- 참고 : [타입스크립트의 Never 타입 완벽 가이드](https://ui.toast.com/posts/ko_20220323)

#### null, undefined

- 데이터 타입 이자 하나의 값이다.
- strictNullChecks로 검증 유무를 설정 가능하다.
- any 또는 |를 사용하여 처리 가능하다.

> **궁금한 부분**
>
> - ~never는 어느 케이스에서 사용할까?~

### Array

여러 타입의 배열을 구현할 수 있다.

- number[]
- string[]
- boolean[]
- any[]
- (number|string)[]
- 그 외 타입은 정하기 나름으로 보임

### Tuple

JavaScript에서는 지원하지 않는 데이터 타입이지만, TypeScript에서는 배열 타입을 보다 특수한 형태로 사용할 수 있는 tuple 타입을 지원한다. 명시적으로 지정된 형식에 따라 아이템 순서를 설정해야 되고, 추가되는 아이템 또한 tuple에 명시된 타입만 사용 가능하다.

- [string, number]와 같은 형식

### Object

변수에 초기 설정된 값을 암시적으로 할당 가능한 데이터 타입으로 설정하기에 초기 설정된 값과 다른 형태로 할당될 경우 다음과 같은 오류가 발생한다.

- 새 속성을 추가해도 오류 메시지를 출력하지 않게 구성하려면 [propName: string]: any를 사용 가능

### Enum

열거형 데이터 타입이며 멤버라 불리는 명명된 값의 집합을 이루는 자료형이다.

- 열거된 각 멤버는 별도의 값이 설정되지 않은 경우 기본적으로 0부터 시작한다.

```typescript
enum Team {
  Manager, // 0
  Planner, // 1
  Developer, // 2
  Designer, // 3
}
```

### Assertion

선언된 타입이 특정 타입 임을 단언해주는 역할

- 앵글 브라켓(angle-bracket, <>) 문법
- as 문법

### Function

함수에 사용되는 매게변수는 타입을 선언해주는 것이 좋다.

- tsconfig.json 설정에서 "noImplicitAny": true 일 경우에는 암시적인 any 사용 시, 오류 메시지를 출력한다.

### Union

변수 타입을 선언 시 파이프(|)를 통해 여러 타입을 선언 가능하다.

- number | string

## 공부 사이트

- [TypeScript Guidebook](https://yamoo9.gitbook.io/typescript/types/tuple)
- [W3schools - typescript](https://www.w3schools.com/typescript/index.php)
- [TypeScript Tutorial](https://www.typescripttutorial.net/)
- [TypeScript Lang](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
