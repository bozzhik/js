const elem = document.querySelector('.create')
const newElement = document.createElement('div')

newElement.innerHTML = `я коклетка`
console.log(newElement)

// elem.before(newElement) // перед элементом

// elem.after(newElement) // после элемента

// elem.prepend(newElement) // внутрь в начало элемента

elem.append(newElement) // внутрь в конец элемента
