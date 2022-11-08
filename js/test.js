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
      console.log(`${this.taste}, ${this.size} размер. С красным перцем - ${this.paper.red}`)
   }
}

cracker.info()
