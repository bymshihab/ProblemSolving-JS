/** 
 * Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
####### 
 * */

let x = 3;
// console.log(x);
// for(let i = 3; i >= 0; i--){
//     for(let j=i; j<x; j++){
//         console.log("*");
//     }
// }

for (let i = 0; i < 3; i++) {
    for(let j = 0; j<= i ; j++){
        console.log("*");
    }
    console.log("\n");
}
