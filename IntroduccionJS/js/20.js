// Operador ternario - condicion ? si se cumple : si no se cumple

const disponible = 1000
const total = 500
const tarjeta = true

// disponible > total ? console.log('puedes pagar') : console.log('No puedes pagar')

disponible > total && tarjeta ?
    console.log('Si puedes pagar con saldo o tarjeta') :
    console.log('No puedes pagar')