function calcSum(numOne, numTwo, more, less) {
   let numSum = numOne + numTwo

   if (numSum > 3) {
      more()
   } else {
      less()
   }
}

function showMore() {
   console.log('больше')
}

function showLess() {
   console.log('меньше')
}

calcSum(1, 1, showMore, showLess)
