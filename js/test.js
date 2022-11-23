const elem = document.querySelector('.create')
const newElement = document.createElement('div')

newElement.innerHTML = `я коклетка`
console.log(newElement)

elem.append(newElement, 'куриная')
