const products = [
  {
    id: 1,
    artId: 124,
    nombre: "Patatas",
    marca: "Mr Potato",
    medida: "kg",
    unidades: 2,
    pvp_med: 2.25,
    stock: 0.2,
    tienda: "Hiperber",
    totacu: 12,
    totimp: 5.23,
    comprado: false,
  },
  {
    id: 1,
    artId: 74,
    nombre: "Harina blanca",
    marca: "Pala Masa",
    medida: "paq.",
    unidades: 1,
    pvp_med: 3.12,
    stok: 0,
    tienda: "Pryca",
    totacu: 2,
    totimp: 6.24,
    comprado: false,
  },
  {
    id: 1,
    artId: 49,
    nombre: "Totates",
    marca: "Cherrys",
    medida: "kg",
    unidades: 2.5,
    pvp_med: 1.15,
    stock: 0,
    tienda: "Consum",
    totacu: 10,
    totimp: 14.23,
    comprado: false,
  },
  {
    id: 1,
    artId: 261,
    nombre: "Alubias",
    marca: "Gigante",
    medida: "bot",
    unidades: 2,
    pvp_med: 3.54,
    stock: 1,
    tienda: "Consum",
    totacu: 5,
    toimp: 8.0,
    comprado: false,
  },
  {
    id: 1,
    artId: 731,
    nombre: "Pan semillas",
    marca: "Palpan",
    medida: "uni",
    unidades: 2,
    pvp_med: 0.87,
    stock: 0,
    tienda: "Dia",
    totacu: 4,
    totimp: 3.69,
    comprado: false,
  },
];
export const getProducts = () => {
  return products;
};
export const getProduct = (id) => {
  const producto = products.find((prod) => prod.artId === parseInt(id));
  if (undefined !== producto) {
    return producto;
  } else {
    return [];
  }
};
export const addProduct = (data) => {};
