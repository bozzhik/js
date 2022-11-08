let cracker = {
   taste: 'cheese',
   size: 13,
   paper: {
      red: true,
      black: false
   },

   // info: function () {
   //    console.log(`${cracker.taste}, ${cracker.size} размер. С красным перцем - ${cracker.paper.red}`)
   // },
   info() {
      console.log(`${cracker.taste}, ${cracker.size} размер. С красным перцем - ${cracker.paper.red}`)
   }
}

cracker.info()
