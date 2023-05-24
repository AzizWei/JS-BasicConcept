//預設
import math from "./lib2.js";
math.add(5,4);
math.multiply(9,-8);

/*
//非預設
import { multiply } from "./lib2.js";  
multiply(3,4);
*/


/*
//3.預設與非預設的整合
import x ,{data,obj} from "./lib2.js";

//1.預設的輸入
//import x from "./lib2.js";
console.log(x);
//把x改寫成任意名稱也行，如:abc，lib2.js 預設輸出雖沒修改，卻也可以運作

//2.非預設的輸入
//import {data,obj} from "./lib2.js";
//也可以只輸入其中一個
console.log(data);
console.log(obj);
*/
