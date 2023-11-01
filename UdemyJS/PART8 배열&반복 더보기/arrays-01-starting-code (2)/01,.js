// let a = (2 ,3 ,4) =>
// a+b+c ;


// let q = (3, 5) =>
// a*b ;

// let w = (a ,b ,c,d) {
//     a+ b + c+ d
// }
// console.log(w);

// let test = (a,b ) {
//    console.log(a+b); 
//    return a*b;
    
// }


// const arr = [1,2,3,4,5]
// for (let a= 0 ; a <6 ; a++){
//     console.log(arr);
// }


const arr01 = [1, 4 ,2 , 3, 10, 15, 0]
 
// arr01.forEach( (arr01[a]) => {
//  console.log(`value => ${value}`);
//  console.log(`index => ${index}`);
// });

// arr01.forEach( (a,b)=>{
// console.log(a,b);
// });

// if ( a > 4) {
//     foreach( (a) => {
//         console.log(a)
//     })
// }

// arr01.filter((value,idx)=>{
// console.log(value)//새로운 배열을 반환~
// console.log(idx);
// })

// const arr01 = ["홍길동", "홍길순", "옹길순"];
// 홍길만포함 

// arr01.filter( (val,index)=>val.includes("홍길"))
// find 첫번째 요소 


const arr = [1, 2, 5, 10, 4];
find //필터링 한다음 첫번째 뽑기
// arr.map(function(값,순서){
//     console.log("값" ,값);
//     console.log("순서",순서);
//     return {
//       key : 순서,
//       value : 값*2
//     } //랭스만큼 새로운 배열 
// });
// console.log(ressult);

const ressult = arr.map(function(값){
    return 값 *2;
});
const ressult2= ressult.filter(function(값){
    return 값 >=5;
});