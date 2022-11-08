let id = Symbol('id')

let cracker = {
   number: 13,
   taste: 'cheese',
   [id]: 'супер-крекер'
}
console.log(typeof id)
console.log(cracker)
console.log(cracker[id])
