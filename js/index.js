//provisorio para el manejo de datos
import { productos } from "./productosProvisorio.js";

import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarProductos = () => {
  const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

  for (const producto of productos) {
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
    imagen.src = `./${producto.img}`;
    imagen.alt = producto.nombre;

    //Creo su precio
    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio}`;

    //Creo el boton
    const boton = document.createElement("button");
    boton.textContent = "Añadir al carrito";
    boton.classList.add("btn");

    //evento del boton
    boton.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });

    //Agrego los elementos creados a la tarjetaProducto
    tarjetaProducto.appendChild(titulo);
    tarjetaProducto.appendChild(marca);
    tarjetaProducto.appendChild(imagen);
    tarjetaProducto.appendChild(precio);
    tarjetaProducto.appendChild(boton);

    //Agrego la tarjeta al contenedor de tarjetas
    contenedorTarjetas.appendChild(tarjetaProducto);
  }
};

//controlamos que se cargue el DOM completo antes de que
//los archivos de JS traten de usar sus elementos
document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  renderizarProductos();
});
