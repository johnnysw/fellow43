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

console.log(Person.legs);






