// Object.assign(item(size),cracker(size),())

let cracker = {
   taste: 'cheese',
   size: 13
}

let item = Object.assign({}, cracker)

item.size = 5

console.log(cracker)
console.log(item)
