const listStatic = document.querySelectorAll('.text')
console.log(listStatic)

const listLive = document.getElementsByClassName('text')
console.log(listLive)

const itemList = document.querySelector('.item-class')
itemList.insertAdjacentHTML('beforeend', '<h4 class="text">я пряник</h4>')
