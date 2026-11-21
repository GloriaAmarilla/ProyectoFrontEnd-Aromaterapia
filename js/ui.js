export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length || ""; //"" para que no se muestre un 0 junto al carrito
  }
};

export const mostrarMensaje = (texto) => {
  alert(texto);
};
