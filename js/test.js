const elems = document.querySelectorAll('.atribute')
for (let elem of elems) {
   if (elem.matches('[data-item$="5"]')) {
      console.log('есть 5')
   } else if (elem.matches('[data-item$="13"]')) {
      console.log('есть и 13')
   }
}
