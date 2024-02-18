// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log('enviando formulario')

    const nombre = document.querySelector('#nombre').value
    const password = document.querySelector('#password').value
    // console.log(nombre)
    // console.log(password)
    if(nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios')
        return
    }

    console.log('Todo bien, enviando...')
})


