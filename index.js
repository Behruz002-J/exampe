//imtihon

//1--
// let a = prompt("og'irligingiz necha kg");

// if(a > 90 ) {
//     console.log("dieta qiling iltimos");
    
// }else if(a < 70) {
//     console.log("iltimos ko'proq ovqat yeng");
    
// }else {
//     console.log("boshqa variant yaxshi");
    
// }

//2---
let N = 12;
let sum = 0;
for(let i = 0; i <= N; i++) {
    if(i % 2 === 0) {
    sum = sum + i;
    }
}
console.log(sum);

//3---
let M  = [1, 3, 4, 6, 7, 9];
 let kv = 0;
for(let i = 0; i <= M; i++) {
    if(i % 2 ==1) {
        kv = i** 2;
    }
}
console.log(kv);
