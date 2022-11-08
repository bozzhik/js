let cracker = {
   taste: 'cheese',
   size: 13,
   paper: {
      red: true,
      black: false
   }
}

for (let key in cracker) {
   console.log(key)
   console.log(cracker[key])
}

for (let key in cracker.paper) {
   console.log(key)
   console.log(cracker.paper[key])
}
