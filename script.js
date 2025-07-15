// Code Question 1

// Trattandosi di una reference copy in console 
// vedremo che il nome di entrambi gli oggetti sarà aggiornato come definito da riga 3
// in 'Double Cheese Burger', quindi
// in memoria rimane comunque un solo oggetto
// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name);
// console.log(secondBurger.name);


// // Code Question 2

// Nel primo console.log verrà stampato "Salad" come ingrediente del primo oggetto
// mentre nel secondo console.log vedremo ancora "Salad", questo avviene perchè
// utilizzando lo spread operator non possiamo modificare array o oggetti annidati di oggetti copia, senza modificare anche l'originale
// Tuttavia in questo caso avremo due oggetti 
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?