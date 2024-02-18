// Tipos de datos

//Undefined
let cliente
console.log(typeof cliente)

//Boolean
const descueto = true
console.log(typeof descueto)

//Números
const numero1 = 20.30
const numero2 = 30
const numero3 = -200
const numeroGrande = BigInt(1)
console.log(numeroGrande)
console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

//Strings
const alumno = 'Manuel'
const producto = "Monitor 29 pulgadas"
const numberString = "30"
console.log(typeof alumno)
console.log(typeof producto)
console.log(typeof numberString)

//Symbols
const primerSymbol = Symbol(1)
const segundoSymbol = Symbol(1)
console.log(primerSymbol === segundoSymbol)

//Object
const numeros = [1,2,3]
const descuento = null
const teclado = {}
console.log(typeof numeros)
console.log(typeof descuento)
console.log(typeof teclado)

