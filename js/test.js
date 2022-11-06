function show(num) {
   console.log(num)
   if (num < 5) setTimeout(show, 500, ++num)
}

setTimeout(show, 500, 1)
