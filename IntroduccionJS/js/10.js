const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS']

tecnologias.push('Git') //Añade elemento al final del arreglo
tecnologias.unshift('React') //Añade elemento al inifico del arreglo
tecnologias.pop() //Elimina un elemento del final del arreglo
//Toma la copia del arreglo
const nuevoArreglo = [...tecnologias, 'Angular']
const arregloNuevo = ['gitHub', ...tecnologias]
tecnologias.shift() //Elimina del inicio del arreglo

tecnologias.splice(2, 1)

const tecnologias2 = tecnologias.filter(function(tech) {
    // console.log(tech)
    return tech !== 'HTML'
})

console.log(arregloNuevo)
console.log(tecnologias)
console.log(nuevoArreglo)

console.log(tecnologias2)




