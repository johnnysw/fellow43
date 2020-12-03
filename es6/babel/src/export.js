// export let aa = 666;
// export let fn1 = () => {
//     console.log('hahha');
// }
let aa = 666;
let fn1 = () => {
    console.log('hahha');
}
export { aa, fn1 }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('eating');
    }
}
export default Person;