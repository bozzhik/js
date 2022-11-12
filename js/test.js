let array = ['сырный', 'соленый', 'острый']

let reduceValue = array.reduce(function (previousValue, item, index, array) {
   //    console.log(previousValue)
   //    console.log(item)
   return `${item}, ${previousValue}`
})
console.log(`вкусы крекера: ${reduceValue}`)
