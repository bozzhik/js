function calcSum(numOne, numTwo) {
   let result = 1

   for (let i = 0; i < numTwo; i++) {
      result *= numOne
   }
   return result
}

console.log(calcSum(2, 3))
