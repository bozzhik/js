const element = document.querySelector('.cracker')

console.log(element.style.color) // в html style его нет

const elementStyle = getComputedStyle(element) // берем из css
console.log(elementStyle.color)

const elementBeforeStyle = getComputedStyle(element, '::before')
console.log(elementBeforeStyle.color)
