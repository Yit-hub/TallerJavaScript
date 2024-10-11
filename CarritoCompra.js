let carrito = [];

function agregarProducto(nombre, precio, cantidad) {
    let producto = [nombre,precio,cantidad];
        carrito.push(producto);
}

function mostrarCarrito() {
    carrito.forEach(function(producto) {
        console.log(producto.nombre + " cantidad: "+producto.cantidad + "precio: "+(producto.precio*producto.cantidad));
    });
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