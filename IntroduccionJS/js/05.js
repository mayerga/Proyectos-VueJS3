

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

// Object.freeze(producto)
// Object.seal(producto)

//Reescribir un valor
producto.nombre = "Monitor curvo"

//Añadir un valor
producto.imagen = "imagen.jpg"

//Eliminar
// delete producto.disponible

// const { disponible, ...producto2 } = producto

console.log(producto)