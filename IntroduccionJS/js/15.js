// Arrow functions

const sumar = (numero1, numero2) => {
    console.log(numero1 + numero2)
}

const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS']

// forEach
tecnologias.forEach( tech => console.log(tech) )

// map
const arrayMap = tecnologias.map( tech => console.log(tech) )

//filter
const tecnologias2 = tecnologias.filter( tech => tech !== 'HTML')

console.log(tecnologias2)

// sumar(1, 2)
// sumar(20, 30)




