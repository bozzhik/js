let array = [
   { taste: 'сырный', size: 5 },
   { taste: 'соленый', size: 7 },
   { taste: 'острый', size: 'не определенно' }
]

let result = array.filter((item, index, array) => {
   return item.size >= 5
})
console.log(result)
