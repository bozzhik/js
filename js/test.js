// удалить элемент
let array = ['сырный', 'соленый', 'острый']

array.splice(1, 1)
console.log(array)

// удалить и вернуть в переменную
let arrayTwo = ['сырный', 'соленый', 'острый']

let removed = arrayTwo.splice(1, 1)
console.log(array)
console.log(removed)

// заменить элемент
let arrayThree = ['сырный', 'соленый', 'острый']

arrayThree.splice(1, 1, 'пикантный')
console.log(arrayThree)

// добаваить элемент
let arrayFour = ['сырный', 'соленый', 'острый']

arrayFour.splice(1, 0, 'пикантный')
console.log(arrayFour)

// еще удалить элемент
let arrayFive = ['сырный', 'соленый', 'острый']

arrayFive.splice(-1, 1)
console.log(arrayFive)
