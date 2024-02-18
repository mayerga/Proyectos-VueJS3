const heading = document.querySelector('.heading')

// heading.textContent = 'Un nuevo heading'
// heading.classList.remove('text-4xl')

const inputNombre = document.querySelector('#nombre')
console.log(inputNombre)

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace => enlace.textContent = 'Nuevo Texto')