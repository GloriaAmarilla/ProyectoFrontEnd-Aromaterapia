import { guardarCarrito, obtenerCarrito } from "./storage.js";

export const agregarAlCarrito = (producto) => {
  //usamos la funcion para traer el carrito
  const carrito = obtenerCarrito();
  //agregamos el producto al carrito
  carrito.push(producto);
  //usamos la funcion para guardar el carrito actualizado
  guardarCarrito(carrito);
};

export const eliminarProducto = () => {};

export const vaciarCarrito = () => {};
