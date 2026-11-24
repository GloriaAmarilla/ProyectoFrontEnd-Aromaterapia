import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";

const renderizarCarrito = () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);

  //Donde van a aparecer los productos
  const contenedor = document.getElementById("contenedor-carrito");
  //contenedor.appendChild(carrito);

  //Botones de acciones eliminar producto, vaciar y finalizar
  const divAcciones = document.getElementById("acciones-carrito");

  //para que si se elimina un producto, se actualice la pantalla nuevamente
  contenedor.innerHTML = "";
  divAcciones.innerHTML = "";

  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Tu carrito está vacío 😊";

    //Agregamos el mensaje al contenedor
    contenedor.appendChild(mensaje);

    //corta la funcion de renderizarCarrito
    return;
  }

  //si hay productos en el carrito
  carrito.forEach((producto, indice) => {
    //Creo la tarjeta y le asigno su clase
    const tarjetaProducto = document.createElement("article");
    tarjetaProducto.classList.add("tarjeta");

    //Creo su titulo
    const titulo = document.createElement("h3");
    titulo.textContent = producto.nombre;

    //Creo su marca
    const marca = document.createElement("h4");
    marca.textContent = producto.marca;

    //Creo la imagen
    const imagen = document.createElement("img");
    imagen.src = `../${producto.img}`;
    imagen.alt = producto.nombre;

    //Creo su precio
    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    //Creo el boton
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar producto";
    btnEliminar.classList.add("btn");

    //evento del boton
    btnEliminar.addEventListener("click", () => {
      //se borra como dato y del storage pero no del DOM
      eliminarProducto(indice);

      //para que se actualice y no se vea el producto luego de eliminarlo
      renderizarCarrito();
    });

    //Agrego los elementos creados a la tarjetaProducto
    tarjetaProducto.append(titulo, marca, imagen, precio, btnEliminar);

    //Agrego la tarjeta al contenedor de tarjetas
    contenedor.appendChild(tarjetaProducto);
  });

  const btnVaciarCarrito = document.createElement("button");
  btnVaciarCarrito.classList.add("btn");
  btnVaciarCarrito.textContent = "Vaciar Carrito";

  btnVaciarCarrito.addEventListener("click", () => {
    vaciarCarrito();
    renderizarCarrito();
  });

  divAcciones.appendChild(btnVaciarCarrito);
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});
