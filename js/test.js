let array = [5, 7, 13, 19]

let reduceValue = array.reduce(function (previousValue, item, index, array) {
   return item + previousValue
}, 0)
console.log(reduceValue)
