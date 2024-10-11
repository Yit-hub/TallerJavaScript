//Variable global
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