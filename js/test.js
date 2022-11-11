let array = [
   'сырный',
   {
      taste: 'cheese',
      size: 13
   },
   true,
   function () {
      console.log('я крекер')
   }
]
console.log(array)

console.log(array[0])
console.log(array[1].size)
array[3]()
