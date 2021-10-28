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

let z: unknown = null;

let unionType: number | string = "123";
interface Person {
  readonly location: string;
  name: string;
  age: number;
  password?: number;
  [name: string]: any;
}
let Clark: Person = {
  location: "WJ",
  name: "Clark",
  age: 123,
  h2: [1, 2, 3, 4],
  h4: { x: 123, y: 789 },
};

interface A {
  type: string;
  game: number;
}
interface B {
  count: number;
}

let ad: A & B = {
  type: "ab",
  game: 1,
  count: 2,
};
interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 2, 3, 4];
let fibo: Array<number | string> = [1, 2, 3, 4, "12"];

let mySum: (x: number, y: number) => number = (
  x: number,
  y: number
): number => {
  return x + y;
};

let newSum: Function = (x: number, y: number): number => {
  return x + y;
};
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = (source: string, subString: string): boolean => {
  return source.search(subString) !== -1;
};

function buildName(firstName?: string, lastName: string = "Clark"): string {
  if (firstName) {
    return firstName + lastName;
  }
  return lastName;
}

function myPush(array: Array<unknown>, ...rest: Array<unknown>) {
  rest.forEach((item) => {
    array.push(item);
  });
}
myPush([], 1, "2", 3, true);
