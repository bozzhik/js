// конкретный элемент
const elem = document.querySelectorAll('.itemClass h3')
console.log(elem[2])

// for (const item of elem) {
//    console.log(item)
// }

elem.forEach((item) => {
   console.log(item)
})
