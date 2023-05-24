function echo(msg){
    console.log(msg);
}
function add(n1,n2){
    console.log(n1+n2);
}
// export default 資料; 
// export default echo; 
// 同時輸出兩種，可以包裝成物件

export default{
    echo:echo,
    add:add,
};