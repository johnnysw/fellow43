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
// function test(name: string, age: number, ...args: any[]){
//     var str = "";
//     for(let i=0; i<args.length; i++){
//         str += args[i] + ' ';
//     }
//     console.log(`my name is ${name}, age is ${age}, ${str}`);
    
// }
// test("lisi", 23, '男', 1234567, '178cm');

// 返回值类型
// function test(name: string, age: number): string{
//     return `my name is ${name}, age is ${age}`;
// }
// let str = test('lisi', 23);

// console.log(str);

// 重载
function sayHello(name: string, age: number): string;
function sayHello(name: string, gender: string): string;
function sayHello(x: any, y: any): string{
    if(typeof y === 'number'){
        return `my name is ${x}, age is ${y}`;
    }else{
        return `my name is ${x}, gender is ${y}`;
    }
}

let str =  sayHello('lisi', '男');
console.log(str);

