// Object.assign(item(size),cracker(size),())

let cracker = {
   taste: 'cheese',
   size: 13
}
console.log(cracker)

Object.assign(cracker, { ['paper']: true, visibility: '0.25' })
console.log(cracker)
