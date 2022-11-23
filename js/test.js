const elem = document.querySelector('.item-class')
const cloneElem = elem.cloneNode(true) // если null то без содержимого

const block = document.querySelector('.create')
block.append(cloneElem)
