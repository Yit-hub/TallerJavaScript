// Gestión de un Carrito de Compras
// ● Descripción: Implementa un sistema de carrito de compras donde se puedan
// agregar productos con un nombre, precio y cantidad. El programa debe calcular el
// total del carrito y mostrar todos los productos en el carrito utilizando funciones.
// ● Requisitos:
// ○ Usa var, let, y const para las variables adecuadas.
// ○ Usa estructuras de control como if-else para verificar si el producto ya
// está en el carrito.
// ○ Utiliza un bucle for para mostrar todos los productos y calcular el total.
// ● Objetivo: Practicar el uso de estructuras, funciones y control de flujo en una
// situación más cercana a la vida real.
let carrito = [];

function agregarProducto(nombre, precio, cantidad, tipoIva) {
  let producto = {nombre, precio,cantidad, tipoIva}; 
  carrito.push(producto);
}

function mostrarCarrito() {

    carrito.forEach(
        producto=>console.log(`Producto ${producto.nombre}, con el precio ${producto.precio} y la cantidad ${producto.cantidad} y con un iva ${producto.tipoIva} `)
    );
}
function calcularTotal() {
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio * producto.cantidad;
    });
    console.log(`Total del carrito: ${total}`);
}
// Prueba del carrito
agregarProducto("Manzanas", 2, 5);
agregarProducto("Pan", 1.5, 3);
mostrarCarrito(carrito);
calcularTotal(carrito);