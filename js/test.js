let arrayOne = ['сырный', 'соленый', 'острый']
console.log(arrayOne.sort())

let arrayTwo = [5, 7, 13]
console.log(arrayTwo.sort())

//отсортировать по цифрам
console.log(arrayTwo.sort((a, b) => a - b))
