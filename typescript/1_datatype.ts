// number数值
let a: number = 5; 
// string字符串
let b: string = "abc";
// boolean布尔
let c: boolean = true;

// array数组
// let arr = [123, "abc", true];
let arr1: number[] = [11, 22, 33];
let arr2: string[] = ["aa", "bb", "cc"];
// arr2.push(false); //因为此处我们将非字符串型的数据放在了字符串型的数组中，虽然在ts编译期间会给我们错误警告，但是并不影响运行！！！

// tuple元组
// 元组不过就是元数数据类型固定, 元素数量也固定的数组
let tuple1: [string, number, boolean] = ["abc", 123, true];
// tuple1[0] = true;
tuple1.push("def"); //！！！请注意，可以使用push方向向元组中push新的元素，并且没有任何警告！

// enum枚举
enum Gender {
    Male = 'male',
    Female = 'female'
}

let gender = Gender.Male;

// any任意类型
// let x: any = 5;
// x = "abc";
// 问题：究竟什么时候会用any
// 1. 当用户的输入类型不确定的时候
// let input: any = prompt('请输入信息：');
// 2. 你需要使用一个有多种数据类型的数组
// let arr: any = [123, "abc", true];

// void无返回值（函数中使用）
/* function test(): void{
} */

// null和undefined
// let n: null = null;
// let u: undefined = undefined;

// never永不存在的值的类型
// 1. 程序出错返回never
// 2. 程序死循环也返回never
function test(): never{
    throw new Error('发生错误了...');
    /* while(true){

    } */
}
// test();

// 类型推论
let x = 5; //类型推论为number
// x = "abc";
let x2 = "abc"; //类型推论为string
let x3 = [123, 456, 789];
// x3.push("abc");
let x4 = ["abc", 123, true]; //(string | number | boolean)联合类型
x4.push("def");

class Animal{}
class Dog extends Animal{}
class Cat extends Animal{}
class Fish extends Animal{}

class Person{}

let arr: Animal[] = [new Dog(), new Cat()];  //(Dog | Cat)
arr.push(new Fish());
// arr.push(new Person());

window.onmousedown = function(e: MouseEvent) {
    console.log(e);  
};

window.onkeydown = function(e: KeyboardEvent) {
    console.log(e);  
};

// 类型断言
let str: any = "abc";

// let length = <string>str.length;
let length = (str as string).length;


console.log(length);


export {};
