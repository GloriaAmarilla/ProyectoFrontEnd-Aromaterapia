import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";
import { vaciarCarrito } from "./funcionesCarrito.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  //Donde van a aparecer los productos
  const contenedor = document.getElementById("contenedor-carrito");
  contenedor.appendChild(carrito);

  //Botones de acciones eliminar producto, vaciar y finalizar
  const divAcciones = document.getElementById("acciones-carrito");

  if (carrito.length > 0) {
    const btnVaciarCarrito = document.createElement("button");
    btnVaciarCarrito.classList("btn");
    divAcciones.appendChild(btnVaciarCarrito);
    btnVaciarCarrito.addEventListener("click", () => {
      vaciarCarrito();
      //Limpiar el contenedor
      contenedor.innerHTML = "";
      //Limpiar los botones si el contenedor esta vacio
      divAcciones.innerHTML = "";
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  renderizarCarrito();
});
