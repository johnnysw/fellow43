"use strict";
// // 函数声明
// function test(){
// }
function sayHello(x, y) {
    if (typeof y === 'number') {
        return `my name is ${x}, age is ${y}`;
    }
    else {
        return `my name is ${x}, gender is ${y}`;
    }
}
let str = sayHello('lisi', '男');
console.log(str);
