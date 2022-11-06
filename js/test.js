function show(num) {
   console.log(num)
   let time = setTimeout(show, 500, ++num)
   if (num === 13) {
      clearTimeout(time)
   }
}

setTimeout(show, 500, 1)
