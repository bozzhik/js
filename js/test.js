const elem = document.querySelector('.atribute-value')
const getComment = elem.nextSibling

console.log(getComment)
console.log(getComment.data)

getComment.data = 'бублик'
