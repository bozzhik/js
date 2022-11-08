let cracker = {
   taste: 'cheese',
   size: 13,
   paper: {
      red: true,
      black: false
   },

   showInfo() {
      let info = () => console.log(`${this.taste}, ${this.size} размер. С красным перцем - ${this.paper.red}`)
      info()
   }
}

cracker.showInfo()
