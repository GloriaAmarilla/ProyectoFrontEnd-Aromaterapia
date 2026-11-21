const key = "carrito";
export const guardarCarrito = (carrito) => {
  //Convertimos a JSON para guardarlo en el localStorage
  localStorage.setItem(key, JSON.stringify(carrito));
};

export const obtenerCarrito = () => {
  //Convertimos a js lo que traemos del localStorage
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const vaciarCarritoStorage = () => {
  //Eliminar lo que había quedado en el localStorage
  localStorage.removeItem(key);
};
