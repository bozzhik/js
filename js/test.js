let array = [
   { taste: 'сырный', size: 5 },
   { taste: 'соленый', size: 7 },
   { taste: 'острый', size: 'не определенно' }
]

// let resultOne = array.find(function (item, index, array) {
//    return item.size === 7
// })
// console.log(resultOne)

let resultOne = array.find((item) => item.size === 7)
console.log(resultOne)

let resultTwo = array.findIndex((item) => item.size === 'не определенно')
console.log(resultTwo)
