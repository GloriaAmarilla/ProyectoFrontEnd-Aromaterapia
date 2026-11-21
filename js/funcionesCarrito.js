import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  //usamos la funcion para traer el carrito
  const carrito = obtenerCarrito();

  //agregamos el producto al carrito
  carrito.push(producto);

  //usamos la funcion para guardar el carrito actualizado
  guardarCarrito(carrito);

  //usamos la funcion para actualizar el contador del carrito
  actualizarContador(carrito);
  mostrarMensaje("✨Producto agregado al carrito✨");
};

export const eliminarProducto = (indice) => {
  //usamos la funcion para pedir el carrito desde localStorage
  const carrito = localStorage.obtenerCarrito();

  //Eliminamos un producto con ese indice
  carrito.splice(indice, 1);

  //guardamos el carrito actualizado sin ese producto
  guardarCarrito(carrito);

  //usamos la funcion para actualizar el contador del carrito
  actualizarContador(carrito);
  mostrarMensaje("🟡Producto eliminado🟡");
};

export const vaciarCarrito = () => {
  vaciarCarritoStorage();

  //actualizamos el contador para que esté vacío
  actualizarContador([]);
  mostrarMensaje("🔴Carrito vaciado🔴");
};
