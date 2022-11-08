let cracker = {
   taste: 'cheese',
   size: 13,
   paper: {
      red: true,
      black: false
   }
}

if ('taste' in cracker) {
   console.log(cracker.taste)
}
