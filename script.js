// *Code Question 1*

// Trattandosi di una reference copy in console 
// vedremo che il nome di entrambi gli oggetti sarà aggiornato come definito da riga 3
// in 'Double Cheese Burger', quindi
// in memoria rimane comunque un solo oggetto

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name);
console.log(secondBurger.name);


// *Code Question 2*

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

console.log(hamburger.ingredients[0]);
console.log(secondBurger.ingredients[0]);


// *Code Question 3*

// Sono stati creati 9 oggetti in memoria

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);


// *Code Question 4*

// Il metodo megliore per clonare l'oggetto chef è lo spread operator,
// perchè permette di clonare anche le sue funzioni

//Il metodo migliore per clonare l'oggetto resturant è lo structuredClone(),
// perchè mi permette di clonare oggetti annidati

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};



// *Code Question 5*

// Nel primo console.log avremo in console "Chef Hyur"
// Nel secondo console.log avremo in console "Chef Hyur "
// Nel terzo console.log avremo "Hyur's II"
// Nel quarto console.log avremo "Hyur's II"

// Sono stati creati 5 oggetti


// *Code Question 6*

// il metodo migliore per clonare l’oggetto chef è lo spread operator


// *Code Question 7 (Snack)*

const chefBonus = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

function newChefBonus(p) {
    if (typeof p !== 'object') {
        return obj
    }
    const copy = {};
    for (const key in p) {
        const value = p[key];
        if (typeof value !== 'object') {
            copy[key] = value
        } else {
            copy[key] = deepCopy(value)
        }
    }
    return copy;
}

const chefCopy = newChefBonus(chef)
console.log(chefCopy)