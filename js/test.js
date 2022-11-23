const element = document.querySelector('.cracker')

const elementStyle = getComputedStyle(element) // берем из css
const paddingTop = parseInt(elementStyle.paddingTop) // переводит 13% в число
console.log(paddingTop)
