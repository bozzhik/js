const elem = document.querySelectorAll('.text')[0]

const elemContent = elem.textContent
console.log(elemContent)

elem.textContent = `я тоже <b>бублик</b>`
console.log(elem)
