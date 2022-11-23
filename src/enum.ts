/**
 * 열거된 각 멤버는 별도의 값이 설정되지 않은 경우 기본적으로 0부터 시작한다.
 */

enum Team {
  Manager = 101,
  Planner = 208,
  Developer = 302,
  Designer, // 302 + 1
}

let yamoo9: number = Team.Manager; // (enum member) Team.Manager = 101
let sarha: number = Team.Designer; // (enum member) Team.Designer = 303
