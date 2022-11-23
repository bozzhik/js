const element = document.querySelector('span')

console.log(element.style.color) // в html style его нет

const elementStyle = getComputedStyle(element) // берем из css
console.log(elementStyle.color)
