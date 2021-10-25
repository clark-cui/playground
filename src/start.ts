let myName:string = '小明';
let count:number=100;
let flag:boolean=true;
let u:undefined=undefined;
let timer:null=null;
function getName(param:number):void{}; //空
let obj:any=123; //any
let animal:'cat'='cat'; //字面量

let arr:number[]=[1,2,3];
let tuple1:[string,boolean]=['测试',true];//元组：可以单独写类型的数组
interface Animal{
  readonly type:string;
  width:number;
  height?:number;
}
function test(param1:number,param2:number,param3?:number):number{
return param1 + param2;
}//函数写类型
const sum=(param1:number,param2:number,param3?:number):number=>{
  return param1+param2
}
let mysum:(param1:number,param2:number,param3?:number)=>number=sum;//定义函数法1

interface Isum{
  (param1:number,param2:number,param3?:number):number;
}//定义函数法2
let mysum2:Isum=sum;

let haha:number|string;//联合类型
let object:{name:string,age:number};
object={
  name:'123',
  age:12
};//写对象法1
interface Obj{
  name:string;
  age:number;
}
let object2:Obj={
  name:'123',
  age:12
};

function getLength(params:number|string):number{
  const str=params as string // const str=<string>params
  if(str.length){
    return str.length;
  }
  return str.toString().length;
} //类型断言

function getLength2(params:number|string):number{
  if(typeof params === 'string'){
    return params.length;
  }
  return params.toString().length;
}

abstract class Parent{
  static readonly age:number=3;
  // public name:string='clark';
  public name:string;
  protected money:number;
  constructor(name:string){
    this.name=name;
    this.money=123;
  }
  eat(){
    console.log(`${this.name}在吃饭`);
  }
}
console.log(Parent.age);
class Sun extends Parent{
  private son_money:number;
  constructor(name:string){
    super(name);
    this.son_money=this.money;

  }
}

