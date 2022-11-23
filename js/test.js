const input = document.querySelector('input')

input.setAttribute('value', 'введи шо хочешь')
console.log(input.value)

input.value = 'ну давай вводи шо-то'
console.log(input.getAttribute('value'))

// не происходит обновления атрибута в console.log
// а placeholder изменился
