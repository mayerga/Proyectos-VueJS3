const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}
//Escribimos sobre cliente
// const nuevoObjeto = Object.assign(cliente, producto)
// console.log(nuevoObjeto)

const nuevoObjeto = {
    producto,
    cliente
}

console.log(nuevoObjeto)