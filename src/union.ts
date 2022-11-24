function setInfo(id: number | string, name: string) {
  return { id, name };
}

let product = setInfo(120912, "스노우보드");
let product_2 = setInfo("120912", "스노우보드");
