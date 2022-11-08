let cracker = {
   taste: 'cheese'
}

cracker.size = 13
cracker['visibility'] = true
cracker.paper = {
   red: true,
   black: false
}
console.log(cracker)

delete cracker.taste
console.log(cracker)
