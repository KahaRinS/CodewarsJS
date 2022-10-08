// function calculate(...args1) {
//     let fullSum = args
//     function sumOfArgs(...args2){
//         let sum = 0
//         for (let i of args2) sum+=i
        
//     }
//     fullSum += sumOfArgs
//     for (let i of args1) fullSum+=i
    
// }

// console.log(calculate(3)(1))
function calculate(...args1) {
    let fullSum = 0
    for (let i of args1) fullSum+=i
    function inside(...x) {
        let sum = 0
        for (let i of x) sum+=i
      return sum+fullSum;
    }
    return inside;
  }
let b = calculate(15,23)(10,15)
console.log(b)