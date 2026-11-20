const productos = [
  { nombre: "Sahumerios Magicos", marca: "Aromanza", precio: 2800 },
  { nombre: "Esferas Mágicas", marca: "Aromanza", precio: 1100 },
  { nombre: "Aceites Aromaticos", marca: "Iluminarte", precio: 2000 },
];

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

  //Creo su precio
  const precio = document.createElement("p");
  precio.textContent = `$${producto.precio}`;

  //Creo el boton
  const boton = document.createElement("button");
  boton.textContent = "Añadir al carrito";
  boton.classList.add("btn");
  boton.addEventListener("click", () => {
    alert(`Agregaste ${producto.nombre} al carrito`);
  });

  //Agrego los elementos creados a la tarjetaProducto
  tarjetaProducto.appendChild(titulo);
  tarjetaProducto.appendChild(marca);
  tarjetaProducto.appendChild(precio);
  tarjetaProducto.appendChild(boton);

  //Agrego la tarjeta al contenedor de tarjetas
  contenedorTarjetas.appendChild(tarjetaProducto);
}
