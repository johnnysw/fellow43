import { aa as xx, fn1 } from "./export";
// console.log(aa);
console.log(xx);
fn1();

import P from './export';
let p1 = new P('lisi',99);
console.log(p1);
p1.eat();