// let a: number = 5;
// let b: string = "abc";
// let c: boolean = true;
// let d: string = "def";
// console.log(a, b, c, d);

// 低耦合，强类聚

abstract class A{
    name1: string = "abc";
    abstract test(): string;
}

interface B{
    test2(): string;
}

interface E{
    test3(): void;
}

class C extends A{
    test(): string{
        console.log(this.name1);
        return this.name1;
    }
}

class D implements B, E{
    test2(): string{
        return "";
    }

    test3(): void{

    }
}

let c = new C();
c.test();




export default {}