const link = document.querySelector('#me')

link.setAttribute('data-link', 'telegram')

if (link.hasAttribute('data-link')) {
   console.log('data-link имеется')
} else {
   console.log(false)
}
