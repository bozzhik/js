let array = ['сырный', 'соленый', 'острый']

// array.forEach(function (item, index, array) {
//    console.log(`${item} размером ${index} находится в ${array}`)
// })

array.forEach((item, index, array) => {
   console.log(`${item} размером ${index} находится в ${array}`)
})
