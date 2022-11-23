const elem = document.querySelectorAll('.text')[0]

const elemContent = elem.innerHTML
console.log(elemContent)

elem.innerHTML = `${elemContent}, я <b></b>бублик<b>`
console.log(elem)
