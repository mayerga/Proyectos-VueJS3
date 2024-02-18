const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')

heading.addEventListener('click', () => {
    const numero = 10
    if(numero === 10) {
        heading.textContent = 'Mi numero es 10'
    } else {
        heading.textContent = 'El numero es diferente'
    }
    heading.textContent = 'Nuevo heading al dar click'
})

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target)
        console.log('diste click')
    })

})