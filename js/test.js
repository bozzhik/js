const elem = document.querySelector('.create')
const newElement = document.createElement('div')

newElement.innerHTML = `<font color="#515151">я коклетка<font>`
console.log(newElement)

elem.append(newElement, 'куриная')
