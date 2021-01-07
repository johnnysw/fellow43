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
tuple1.push("def");


console.log(tuple1);

export {};
