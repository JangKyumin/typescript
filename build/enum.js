"use strict";
/**
 * 열거된 각 멤버는 별도의 값이 설정되지 않은 경우 기본적으로 0부터 시작한다.
 */
var Team;
(function (Team) {
    Team[Team["Manager"] = 101] = "Manager";
    Team[Team["Planner"] = 208] = "Planner";
    Team[Team["Developer"] = 302] = "Developer";
    Team[Team["Designer"] = 303] = "Designer";
})(Team || (Team = {}));
let yamoo9 = Team.Manager; // (enum member) Team.Manager = 101
let sarha = Team.Designer; // (enum member) Team.Designer = 303
