

// 4 to 80 only 5 and 7  dara bivajjo 

// for (let num = 40; num <= 80; num++) {
//     if (num % 5 == 0 && num % 7 == 0) {
//         console.log(num);
//     }
// }


// //  20 to 50 only divisible by 7

// for (let num = 20; num <= 50; num++) {
//     if (num % 7 == 0) {
//         console.log(num);
//     }
// }


//  1 to 40 only divisible by 13

// for (let num = 1; num <= 40; num++) {
//     if (num % 13 == 0) {
//         console.log(num);
//     }
// }


//  20 to 50 only divisible by 13

// for (let num = 1; num <= 50; num = num + 4) {
//     console.log(num);
// }



// 1 to 50 that are divisible by 3 and 4

let sum = 0;
for(let i =1; i <= 50; i++)
{
    if( i % 3 == 0 && i % 4 == 0){
        console.log(i);
        sum = sum + i;
    }
}
console.log("Sum :", sum);