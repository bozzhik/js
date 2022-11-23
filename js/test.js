const element = document.querySelector('span')

element.classList.add('smpl')

for (let className of element.classList) {
   console.log(className)
}
