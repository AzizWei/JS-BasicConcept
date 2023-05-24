let add= (n1,n2)=>{
    console.log(n1+n2);
}

let multiply=(n1,n2)=>{
    console.log(n1*n2);
}

let math={
    add:add,
    multiply:multiply,
}

//預設
export default math;
//非預設
export {add,multiply};





/*
//1.預設的輸出
let x = "hello"
//export default x;

//2.非預設的輸出
let data =[5,6,7];
let obj={x:10,y:2};

//export {data,obj};


//3.預設與非預設的整合
export { x as default,data,obj};
*/