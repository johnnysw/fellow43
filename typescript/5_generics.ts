// 实现一个List列表功能，包含add函数和length属性，可以向add函数中添加字符串

// interface IList{
//     length: number;
//     add(elem: any): void;
// }

// class List implements IList{
//     elements: string[] = [];
//     // private _length: number = 0;
//     add(elem: any): void {
//         this.elements.push(elem);
//         // this.length = this.elements.length;
//     }
//     get length(){
//         return this.elements.length;
//     }
// }

// let list1 = new List();
// list1.add("abc");
// list1.add('def');
// list1.add(123);
// list1.add(true);

// console.log(list1.length); //=>2

// 泛型
interface IList<T>{
    length: number;
    add(elem: T): void;
}

class List<T> implements IList<T>{
    elements: T[] = [];
    // private _length: number = 0;
    add(elem: T): void {
        this.elements.push(elem);
        // this.length = this.elements.length;
    }
    get length(){
        return this.elements.length;
    }
}

let list1 = new List<string>();
list1.add("abc");
list1.add('def');
// list1.add(123);
// list1.add(true);

