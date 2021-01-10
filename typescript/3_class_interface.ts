class Person{
    name: string; //属性前面如果不加任何修饰符，默认是public 
    private age: number = 18; //private私有属性
    // protected 
    readonly height: string = '178cm';//readonly只读的，不可以修改
    private gender: string = 'female';
    static legs: number = 2;

    constructor(name: string){
        this.name = name
    }

    sayHello(){
        console.log(`My name is ${this.name}, age is ${this.age}`);
    }

    // getter
    getGender(message: string){
        if(message == 'I love you'){
            return this.gender;
        }
        throw new Error('就不告诉你！');
    }

    // get gender(){
    //     return this._gender;
    // }

    // setter
    setGender(gender: string){
        if(gender == 'male' || gender == 'female'){
            this.gender = gender;
        }else{
            throw new Error('地球上没有人这种人，你是外星来的吗？');
        }
    }
    // set gender(gender: string){
    //     this._gender = gender;
    // }
}

let p1 = new Person('lisi');
// console.log(p1.name); //public的属性可直接访问
// console.log(p1.age);//private的属性不可以在外部直接访问，但是可以在class内部访问
// p1.sayHello();
// p1.height = '180cm';
// console.log(p1.height);
// p1.setGender('male');
// console.log(p1.getGender('I love you'));

// p1.gender = '男';
// console.log(p1.gender);

// 静态的属性和方法一般用于工具类的相关操作
// console.log(Person.legs);

// 类和抽象类
// 设计抽象的父类，一定是用来做继承的！
abstract class Animal{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract shout(): string; //抽象的方法一定要在子类中被重写
    eat(): void{

    }
}
class Dog extends Animal{
    shout(){
        return '汪汪'
    }
}
class Cat extends Animal{
    shout(){
        return '喵喵'
    }
}

let dog = new Dog('汪财');
let cat = new Cat('咪咪');
// console.log(cat.shout());

// let animal = new Animal('xixix'); //抽象类不能被实例化


// 接口：就是用来做约束和制定标准的
// 接口本身就是抽象的，接口中的所有的方法也都是抽象的
interface IFly{
    fly(): string
    // test(): void
}

class Monkey extends Animal{
    shout(){
        return '吱吱';
    }
}

class MonkeyKing extends Monkey implements IFly{
    fly(){
        return '我可以驾筋斗云飞!';
    }
}

class MachineCat extends Cat implements IFly{
    fly(){
        return '我可以在头上插个小飞风扇飞!';
    }
}

// let wukong = new MonkeyKing('悟空');
// console.log(wukong.shout());
// console.log(wukong.fly());

// let doraamon = new MachineCat('多啦A梦');
// console.log(doraamon.shout());
// console.log(doraamon.fly());

// **多态：多种形态**
// let flier: IFly = new MachineCat('多啦A梦');//new MonkeyKing('悟空');
// console.log(flier.fly());

// function fly(flier: IFly){
//    console.log( flier.fly());
   
// }

// fly(new MonkeyKing('悟空'));
// fly(new MachineCat('多啦A梦'));

// 属性类型接口
// interface IPerson{
//     name: string;
//     age: number;
// }

// function checkPersonInfo(person: IPerson){
//     console.log(person.name, person.age);
    
// }

// checkPersonInfo(   {name: 'lisi', age: 23}   ); //没有任何问题
// checkPersonInfo(  {name: 'lisi', age: 23, gender: 'male'}  );//多了一个gender属性
// checkPersonInfo(   {name: 'lisi'}  ); //缺少ge属性
// let obj = {name: 'lisi', age: 23, gender: 'male'} ; //此处将不再提示多了gender属性，目前仍是一个bug！
// checkPersonInfo(obj);

// 函数类型接口

// interface IMath{
//     (a: number, b: number): number;
// }

// let add: IMath = function(x: number, y: number){
//     return x + y;
// }









