// function calcSum(numOne, numTwo) {
//    let result = 1

//    for (let i = 0; i < numTwo; i++) {
//       result *= numOne
//    }
//    return result
// }

// console.log(calcSum(2, 3))

function calcSum(numOne, numTwo) {
   if (numTwo === 1) return numOne
   else {
      return numOne * calcSum(numOne, numTwo - 1)
   }
}
console.log(calcSum(2, 3))
