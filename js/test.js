const element = document.querySelector('span')

element.classList.add('smpl')

if (element.classList.contains('smpl')) {
   console.log('у меня есть smpl класс')
} else {
   console.log(false)
}
