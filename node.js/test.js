// // let nums = [3, 25, 8, 5]
// // let eS = 0
// // let dS = 0

// // for (i = 0; i < nums.length; i++) {
// //     eS = eS + nums[i]

// //     value = nums[i].toString().split("")
// //     dS = dS + Number(value[0])
// // }

// // console.log(eS - dS)

// // I later got the answer, but I wasn't fast enough to. I'm impressed though... 23/08/23

// let ops = ["5", "2", "C", "D", "+"]
// let sum = 0

// for (i = 0; i < ops.length; i++) {
//     if (ops[i] == "D") {
//         ops.splice(i, 1)
//         ops.splice(i - 1, 1)
//     }
//     // if (ops[i] == "C") {
//     //     ops.splice(i, 1)
//     //     ops.splice(i - 1, 1)
//     // }
//     // if (ops[i] == "D") {
//     //     console.log("Check")
//     //     // console.log(Number(ops[i - 1]), "Check")
//     //     // ops.splice(i, 1)
//     //     // ops[i - 1] = Number(ops[i - 1]) * 2
//     //     // ops.push(Number(ops[i - 1]) * 2)
//     // }
//     if (ops[i] == "+") {
//         ops.splice(i, 1)
//         // ops.push(ops[i - 1] + ops[i - 2])
//     }
//     if (typeof Number(ops[i]) === "number") {
//         // console.log(ops[i])
//         // sum = sum + Number(ops[i])
//     }
// }

// console.log(ops, sum)

// // sum = ops.forEach(element => sum += element);

// // console.log(sum, "last")

// function canFormMainArray(main, sub) {
//     const subSet = new Set(sub.map(arr => arr).reduce((acc, val) => acc.concat(val), []));

//     return main.every(number => subSet.has(number));
// }

// // Example 1
// const main1 = [15, 88];
// const sub1 = [[88], [15]];
// console.log(canFormMainArray(main1, sub1)); // Output: true

// // Example 2
// const main2 = [49, 18, 16];
// const sub2 = [[16, 18, 49]];
// console.log(canFormMainArray(main2, sub2)); // Output: false

// function canFormMainArray(main, sub) {
//     function backtrack(index) {
//         if (index === main.length) {
//             return true; // Successfully formed the main array
//         }

//         for (let i = 0; i < sub.length; i++) {
//             const currentSubArray = sub[i];

//             if (currentSubArray.length > 0 && currentSubArray[0] === main[index]) {
//                 const nextSubArray = [...currentSubArray];
//                 nextSubArray.shift(); // Remove the matched element from the sub-array
//                 if (backtrack(index + 1)) {
//                     return true;
//                 }
//             }
//         }

//         return false;
//     }

//     return backtrack(0);
// }

// // Example 1
// const main1 = [15, 88];
// const sub1 = [[88], [15]];
// console.log(canFormMainArray(main1, sub1)); // Output: true

// // Example 2
// const main2 = [49, 18, 16];
// const sub2 = [[16, 18, 49]];
// console.log(canFormMainArray(main2, sub2)); // Output: false

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) { 
    let arr = new Array() // same as let arr = []
    return function () { 
        if (arr.length === 0){
            arr.push(n)
        return n
        }else{
            arr.push(Number(arr.slice(-1)) + 1)
        return Number(arr.slice(-1))
        }
    };
};


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


const counter = createCounter(-2)
counter() // 10
counter() // 11
counter() // 12 
