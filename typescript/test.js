// let a: number = 5;
// let b: string = "abc";
// let c: boolean = true;
// let d: string = "def";
// console.log(a, b, c, d);
// 低耦合，强类聚
class A {
    constructor() {
        this.name1 = "abc";
    }
}
class C extends A {
    test() {
        console.log(this.name1);
        return this.name1;
    }
}
class D {
    test2() {
        return "";
    }
    test3() {
    }
}
let c = new C();
c.test();
export default {};
