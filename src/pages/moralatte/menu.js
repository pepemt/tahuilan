/**
 * Menú de Moralatte, tomado de los pizarrones de la cafetería.
 * Precios en MXN. `ch` = chico, `gde` = grande; si un producto no tiene precio, se deja vacío.
 * Para agregar o cambiar algo, edita solo este archivo.
 */
export const MENU = [
  // TODO: falta la sección de café (los nombres no se leían en la foto del pizarrón).
  {
    id: "matcha",
    title: "Matcha",
    sizes: true,
    items: [
      { name: "Matcha ceremonial", gde: 95 },
      { name: "Matcha latte", ch: 75, gde: 85 },
      { name: "Matcha banana", gde: 95 },
      { name: "Matcha fresa", gde: 95 },
    ],
  },
  {
    id: "chai",
    title: "Chai",
    sizes: true,
    items: [
      { name: "Chai latte", ch: 60, gde: 70 },
      { name: "Dirty chai", ch: 65, gde: 75 },
    ],
  },
  {
    id: "decaf",
    title: "Decaf",
    sizes: true,
    items: [
      { name: "Xocolatl", ch: 59, gde: 69 },
      { name: "Té", ch: 54, gde: 64 },
      { name: "Tizana", ch: 54, gde: 64 },
    ],
  },
  {
    id: "salado",
    title: "Algo salado",
    items: [
      { name: "Croissant de pierna de pavo y queso" },
      { name: "Croissant de pollo y aguacate" },
      { name: "Sándwich de queso" },
      { name: "Sándwich de roast beef y pesto" },
    ],
  },
  {
    id: "aguitas",
    title: "Agüitas",
    items: [
      { name: "Agua en botella" },
      { name: "Soda de temporada" },
      { name: "Agua mineral" },
      { name: "Félix Schorle" },
    ],
  },
  {
    id: "temporada",
    title: "De temporada",
    items: [{ name: "Galletas de temporada" }, { name: "Pan de temporada" }],
  },
];

export const EXTRAS = [
  { name: "Shot extra", price: 15 },
  { name: "Galleta", price: 15 },
  { name: "Jarabe", price: 15 },
  { name: "Leche vegetal", price: 15 },
  { name: "Proteína", price: 15 },
];

/** Bebidas y pan estrella, con foto. */
export const FAVORITES = [
  {
    name: "Matcha Latte de Fresa",
    text: "Puré de fresa, leche fría y matcha batido al momento.",
    img: "matcha-fresa.jpg",
  },
  {
    name: "Caramel Latte",
    text: "Espresso, leche y caramelo escurriendo por todo el vaso.",
    img: "caramel-latte.jpg",
  },
  {
    name: "Affogato de Nogada",
    text: "Helado bañado con espresso caliente, con un guiño muy mexicano.",
    img: "affogato-nogada.jpg",
  },
  {
    name: "Banana Latte",
    text: "Plátano, leche y espresso en capas. Dulce sin exagerar.",
    img: "banana-latte.jpg",
  },
  {
    name: "Matcha Coco",
    text: "Matcha cremoso servido directo en un coco.",
    img: "matcha-coco.jpg",
  },
  {
    name: "Roll de Frutos Rojos",
    text: "Masa hojaldrada con mermelada de frutos rojos y queso.",
    img: "roll-frutos-rojos.jpg",
  },
];
