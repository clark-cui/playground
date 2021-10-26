function sayHello(person: string) {
  return "Hello," + person;
}
let user = "Clark";
console.log(sayHello(user));

let isDone: boolean = false;
let createdByNewBoolean: Boolean = new Boolean(1); // 返回object
let createdByBoolean: boolean = Boolean(1); // 返回boolean

function alertName(): void {
  alert("This is Clark!");
}
let unusable: void = undefined; // undefined/null;
// let num: number = undefined;
let random: number = Math.random();
let isOk: boolean = false;
if (random < 0.5) isOk = true;
let what = isOk ? "string" : 123;
console.log(what);

let anyNum;
anyNum = "seven";
anyNum = 123;

function logMe(x: any) {
  console.log(x);
}
const obj2: { [k: string]: any } = {
  a: 1,
  b: 2,
  c: 3,
};
for (const k in obj2) {
  const v = obj2[k];
}
let x: void = undefined;
// x = undefined;

