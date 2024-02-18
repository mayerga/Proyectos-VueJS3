const inputNombre = document.querySelector('#nombre')
const inputPassword = document.querySelector('#password')
const heading = document.querySelector('.heading')

inputNombre.addEventListener('input', (e) => {
    heading.textContent = e.target.value
})

inputPassword.addEventListener('input', (e) => {
    // console.group(e.target.type)
    e.target.type = 'text'

    setTimeout(() => {
        e.target.type = 'password'
    }, 300);
})