const board = document.querySelector('#board')
// const colors = ['#fff', '#141414', '#515151', '#9c9c9c', '#fff']
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const black = ['#0A0A0A']
const SQUARES_NUMBER = 400


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow =  `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow =  `0 0 2px ${black}`
}

function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}