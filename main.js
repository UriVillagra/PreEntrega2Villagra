class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    vender(){
        if (this.cantidad > 0){
            this.cantidad -= 1;
            console.log(`Se vendió un/a ${this.nombre}`);
        }
        else{
            console.log(`No hay stock de ${this.nombre}`);
        }
    }
}

const Producto1 = new Producto("consola", 200000, 4);
const Producto2 = new Producto("monitor", 65000, 6);
const Producto3 = new Producto("Pc", 342600, 3);

console.log(Producto1);
console.log(Producto2);
console.log(Producto3);

let carrito = [];
let precioTotal = 0;
let continuarComprando = true;

alert("Los productos disponibles son" + " " + Producto1.nombre +", "+ Producto2.nombre +" y "+ Producto3.nombre);

const agregarAlCarrito = (producto) => {
    return () => {
        if (producto.cantidad > 0) {
            carrito.push(producto);
            producto.vender();
            precioTotal += producto.precio;
        } else {
            console.log(`No hay stock de ${producto.nombre}`);
        }
    };
};

while (continuarComprando) {
    let productoSeleccionado = prompt("Ingrese el nombre del producto que desea comprar:");

    let productoEncontrado = null;

    if (productoSeleccionado === Producto1.nombre) {
        productoEncontrado = Producto1;
    } else if (productoSeleccionado === Producto2.nombre) {
        productoEncontrado = Producto2;
    } else if (productoSeleccionado === Producto3.nombre) {
        productoEncontrado = Producto3;
    } else {
        console.log("Producto no encontrado");
    }

    if (productoEncontrado) {
        agregarAlCarrito(productoEncontrado)();
    }

    console.log(Producto1);
    console.log(Producto2);
    console.log(Producto3);

    let respuesta = prompt("¿Desea seguir comprando? (si/no)");

    if (respuesta.toLowerCase() === "no") {
        continuarComprando = false;
    }
}

console.log("Carrito de compras:");
carrito.forEach((producto) => {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

alert(`El Precio total de su compra es: ${precioTotal}`);
alert(`Gracias por su compra`);