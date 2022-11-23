const elem = document.querySelectorAll('.text')[0]

const elemContent = elem.outerHTML
console.log(elemContent)

elem.outerHTML = `я тоже <b>бублик<b>`
console.log(elem) // код не обновляется, получаем старую запись
