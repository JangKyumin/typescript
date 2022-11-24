class Book_method {
  public title: string;
  public author: string;
  public pages: number = 150;
  private _manufacturing_plant: string = "충무로 공장";
  protected paper_type: string = "밍크지";

  constructor(title: string, author: string, pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  /* 메서드 ------------------------------------------------ */

  // public 메서드
  // 클래스 외부에서 접근 가능
  public printPages(): string {
    return `${this.pages}페이지`;
  }

  // protected 메서드
  // Book 클래스를 포함한 서브 클래스에서만 접근 가능
  protected changePaperType(type: string): void {
    this.paper_type = type;
  }

  // private 메서드
  // Book 클래스 내부에서만 접근 가능
  private setManufacturingPlant(plant: string): void {
    this._manufacturing_plant = plant;
  }

  /* 클래스 내부 메서드에서 private, protected 메서드 접근 가능 */

  public setPaperType(type: string): void {
    // protected 메서드 접근 가능
    this.changePaperType(type);
    console.log(this.paper_type);
  }

  public setPlant(plant: string): void {
    // private 메서드 접근 가능
    this.setManufacturingPlant(plant);
    console.log(this._manufacturing_plant);
  }
}

/* 인스턴스 생성 ------------------------------------------------ */

let indRevo_method = new Book_method(
  "한 권으로 정리하는 4차 산업혁명",
  "최진기",
  367
);

console.log(indRevo_method.printPages()); // '367페이지'

// [오류]
// [ts] 'changePaperType' 속성은 보호된 속성이며
// 'Book' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
// (method) Book.changePaperType(type: string): void
// changePaperType 메소드를 사용하려면 setPaperType를 사용한다.
console.log(indRevo_method.setPaperType("인디언지"));

// [오류]
// [ts] 'setManufacturingPlant' 속성은 private이며
// 'Book' 클래스 내에서만 액세스할 수 있습니다.
// (method) Book.setManufacturingPlant(plant: string): void
// setManufacturingPlant 메소드를 사용하려면 setPlant를 사용한다.
console.log(indRevo_method.setPlant("파주 공장"));
