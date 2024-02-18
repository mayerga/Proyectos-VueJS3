//Objetos

// const nombreProducto = "Tablet"
// const precioProducto = 300
// const disponible = true


const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}
console.log(typeof producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto['nombre'])

//Destructuring
const { nombre, disponible } = producto
console.log(nombre)
console.log(disponible)


//Object Literal
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    // autenticado: autenticado,
    // usuario: usuario
    autenticado,
    usuario
}

console.log(nuevoObjeto)