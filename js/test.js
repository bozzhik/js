let array = ['сырный', 'соленый', 'острый']

let result = array.map(function (item, index, array) {
   return item[0]
})

console.log(array)
console.log(result)
