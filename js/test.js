function show(text, name) {
   console.log(`${text}, ${name}`)
   setTimeout(show, 500, text, name)
}

setTimeout(show, 1000, 'привет', 'крэкер')
