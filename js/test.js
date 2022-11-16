// класс
const elemOne = document.querySelectorAll('.itemClass')
console.log(elemOne)

// ид
const elemOne2 = document.querySelectorAll('#itemId')
console.log(elemOne2)

// тэги
const elemTwo = document.querySelectorAll('h3')
console.log(elemTwo)

// тэг с классом
const elemThree = document.querySelectorAll('div.container')
console.log(elemThree)

// по первому уровню вложенности
const elemFour = document.querySelectorAll('.itemClass > span')
console.log(elemFour)

// по нескольким селекторам
const elemFive = document.querySelectorAll('.itemClass, #itemId')
console.log(elemFive)

// по вложенным селекторам
const elemSix = document.querySelectorAll('.itemClass .text')
console.log(elemSix)

// по атрибуту
const elemSeven = document.querySelectorAll('[data-item]')
console.log(elemSeven)

// по атрибуту со значением
const elemEight = document.querySelectorAll('[data-item ="13"]')
console.log(elemEight)
