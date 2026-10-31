/**
 * Menú de Delicatto, armado con lo que se ve en sus fotos.
 * TODO: faltan precios; cuando los tengas, agrega `price: 65` a cada producto y se muestran solos.
 */
export const MENU = [
  {
    id: "cafe",
    title: "Café",
    img: "vaso.jpg",
    items: [
      { name: "Americano", text: "Espresso y agua caliente, limpio y directo." },
      { name: "Cappuccino", text: "Espresso con leche cremosa y un toque de cacao." },
      { name: "Latte", text: "Suave, con mucha leche y arte en la taza." },
      { name: "Latte frío", text: "Espresso, leche y hielo. El favorito para el calor." },
    ],
  },
  {
    id: "matcha",
    title: "Matcha",
    img: "matcha-latte.jpg",
    items: [{ name: "Matcha latte", text: "Matcha batido con leche espumada, caliente o frío." }],
  },
  {
    id: "desayunos",
    title: "Desayunos",
    img: "pan-frances.jpg",
    items: [
      { name: "Avocado toast", text: "Pan tostado, aguacate, tomate, arúgula y queso." },
      { name: "Croissant de pollo", text: "Croissant hojaldrado con pollo, con ensalada de la casa." },
      { name: "Pan francés", text: "Dorado y crujiente, con fresas, moras, crema y chocolate." },
    ],
  },
  {
    id: "panaderia",
    title: "Panadería",
    img: "pan-limon.jpg",
    items: [
      { name: "Pan de limón", text: "Esponjoso, con crema y ralladura de limón." },
      { name: "Brownie", text: "De chocolate intenso, con su capa brillante encima." },
      { name: "Croissant", text: "Mantequilloso y recién horneado." },
    ],
  },
];
