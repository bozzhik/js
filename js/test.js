function makeCrackerInfo(size, taste) {
   return {
      size,
      taste,
      paper: true
   }
}

let cracker = makeCrackerInfo('13', 'cheese')
console.log(cracker)
