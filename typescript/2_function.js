"use strict";
// // 函数声明
// function test(){
// }
// // 函数表达式
// let test = function(){
// }
// 函数的参数可以有数据类型
// function test(name: string, age: number){
//     console.log(name, age);
// }
// test('lisi', 23);
// 可选参数
// function test(name: string, age: number, gender?: string){
//     console.log(name, age, gender);
// }
// test("lisi", 23);
// 默认参数
// function test(name: string, age: number, gender: string = "male"){
//     console.log(name, age, gender);
// }   
// test('lisi', 23, '男');
// 剩余参数
function test(name, age, ...args) {
    var str = "";
    for (let i = 0; i < args.length; i++) {
        str += args[i] + ' ';
    }
    console.log(`my name is ${name}, age is ${age}, ${str}`);
}
test("lisi", 23, '男', 1234567, '178cm');
