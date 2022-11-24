"use strict";
class Book {
    // constructor() 매개변수 앞에
    // public, private, protected를 사용하면
    // Book 클래스의 타입(type)을 별도 선언하지 않아도 됩니다.
    constructor(title, author, pages) {
        this.pages = pages;
        // 제조 공장
        // private: Book 클래스 내부에서만 접근 가능
        this._manufacturing_plant = "";
        // 종이 유형
        // protected: Book 클래스를 포함한 서브 클래스에서만 접근 가능
        this.paper_type = "";
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
/* 인스턴스 생성 ------------------------------------------------ */
let indRevo = new Book("한 권으로 정리하는 4차 산업혁명", "최진기", 367);
console.log(indRevo.author);
console.log(indRevo.title);
console.log(indRevo.pages);
