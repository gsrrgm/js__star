const header = document.querySelector('.sticky-header');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down, hide the header
    header.style.top = '-7%'; // You can adjust this value to hide the header completely
  } else {
    // Scrolling up, show the header
    header.style.top = '0';
  }

  lastScrollY = currentScrollY;
});



console.log(Date());











// // // // // // // // // // // function countTotalSalary(salaries) {
// // // // // // // // // // //   let totalSalary = 0;
// // // // // // // // // // //   // Change code below this line
// // // // // // // // // // //   const values = Object.values(salaries);
// // // // // // // // // // //   for (const val of values) {
// // // // // // // // // // //     totalSalary += val;
// // // // // // // // // // //   }
// // // // // // // // // // //   // Change code above this line
// // // // // // // // // // //   return totalSalary;
// // // // // // // // // // // }
// // // // // // // // // // // countTotalSalary({});
// // // // // // // // // // // console.log('countTotalSalary({});: ', countTotalSalary({}));

// // // // // // // // // // // countTotalSalary({ mango: 100, poly: 150, alfred: 80 });
// // // // // // // // // // // console.log(
// // // // // // // // // // //   "countTotalSalary({ mango: 100, poly: 150, alfred: 80 }): ",
// // // // // // // // // // //   countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// // // // // // // // // // // );
// // // // // // // // // // // countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });
// // // // // // // // // // // console.log(
// // // // // // // // // // //   "countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }): ",
// // // // // // // // // // //   countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })
// // // // // // // // // // // );

// // // // // // // // // // const colors = [

// // // // // // // // // //   { hex: "#f44336", rgb: "244,67,54" },
// // // // // // // // // //   { hex: "#2196f3", rgb: "33,150,243" },
// // // // // // // // // //   { hex: "#4caf50", rgb: "76,175,80" },
// // // // // // // // // //   { hex: "#ffeb3b", rgb: "255,235,59" },
// // // // // // // // // // ];

// // // // // // // // // // console.log('colors: ', colors.hex);

// // // // // // // // // // const hexColors = [];
// // // // // // // // // // const rgbColors = [];
// // // // // // // // // // // Change code below this line
// // // // // // // // // // for (const val of colors) {
// // // // // // // // // //   hexColors.push(val.hex)
// // // // // // // // // //   rgbColors.push(val.rgb)
// // // // // // // // // //   console.log('gbColors: ', rgbColors);
// // // // // // // // // //   console.log('hexColors: ', hexColors);

// // // // // // // // // // }

// // // // // // // // // // Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products
// // // // // // // // // //  його ціну (властивість price)
// // // // // // // // // // Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// // // // // // // // // const products = [
// // // // // // // // //   { name: "Radar", price: 1300, quantity: 4 },
// // // // // // // // //   { name: "Scanner", price: 2700, quantity: 3 },
// // // // // // // // //   { name: "Droid", price: 400, quantity: 7 },
// // // // // // // // //   { name: "Grip", price: 1200, quantity: 9 },
// // // // // // // // // ];

// // // // // // // // // function getProductPrice(productName) {
// // // // // // // // //   // Change code below this line
// // // // // // // // //   let price
// // // // // // // // // for (const iterator of products) {
// // // // // // // // //   if (iterator.name === productName) {
// // // // // // // // //     console.log('iterator.price: ', iterator.price);
// // // // // // // // //     return iterator.price
// // // // // // // // // }
// // // // // // // // // return null
// // // // // // // // // }
// // // // // // // // // console.log('price: ', price);

// // // // // // // // //   // Change code above this line
// // // // // // // // // }
// // // // // // // // // getProductPrice("Radar")
// // // // // // // // // getProductPrice("Grip")
// // // // // // // // // getProductPrice("Scanner")
// // // // // // // // // getProductPrice("Droid")
// // // // // // // // // getProductPrice("Engine")
// // // // // // // // // getProductPrice()

// // // // // // // // // Функція повинна повернути масив всіх значень властивості, з таким ім'ям з кожного об'єкта в масиві products
// // // // // // // // // 1. створити масив values
// // // // // // // // // 2. перебрати масив prodacts
// // // // // // // // // 3. push масив values
// // // // // // // // // 4. перевірка наявність властивості

// // // // // // // // const products = [
// // // // // // // //   { name: "Radar",
// // // // // // // //     price: 1300,
// // // // // // // //     quantity: 4
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     name: "Scanner",
// // // // // // // //     price: 2700,
// // // // // // // //     quantity: 3
// // // // // // // //   },
// // // // // // // //   { name: "Droid", price: 400, quantity: 7 },
// // // // // // // //   { name: "Grip", price: 1200, quantity: 9 },
// // // // // // // // ];
// // // // // // // // function getAllPropValues(propName) {
// // // // // // // //   // Change code below this line

// // // // // // // // const valuesAraay = []
// // // // // // // // for (const vals of products) {

// // // // // // // //    if (vals.hasOwnProperty(propName)){
// // // // // // // //     console.log('propName: ', propName);
// // // // // // // //     valuesAraay.push(vals[propName])
// // // // // // // //    }
// // // // // // // // }

// // // // // // // //   console.log(' valuesArray: ',valuesAraay);
// // // // // // // //   return valuesAraay
// // // // // // // // }

// // // // // // // //   // Change code above this line

// // // // // // // // getAllPropValues("name")
// // // // // // // // getAllPropValues("quantity")
// // // // // // // // getAllPropValues("price")
// // // // // // // // getAllPropValues("category")

// // // // // // // //   exercise 20

// // // // // // // // 1. створити накоп змінну totalPrice (price * quontity)
// // // // // // // // 2.  creat an array of values = valuesArray
// // // // // // // // 3. interate over the array = val of valuesArray
// // // // // // // // 4 vals.hasOwnProperty(propName)
// // // // // // // // 4.1  if true {quantity * price}

// // // // // // // const products = [
// // // // // // //   { name: "Radar", price: 1300, quantity: 4 },
// // // // // // //   { name: "Scanner", price: 2700, quantity: 3 },
// // // // // // //   { name: "Droid", price: 400, quantity: 7 },
// // // // // // //   { name: "Grip", price: 1200, quantity: 9 },
// // // // // // // ];

// // // // // // // function calculateTotalPrice(productName) {
// // // // // // //   // Change code below this line
// // // // // // //   let totalPrice = 0;

// // // // // // //   for (const val of products) {
// // // // // // //    if(Object.values(val).includes(productName)){
// // // // // // //       totalPrice = val.price * val.quantity
// // // // // // //       console.log('totalPrice: ', totalPrice);

// // // // // // //     }

// // // // // // //     }

// // // // // // //   }

// // // // // // // //   // Change code above this line

// // // // // // //  calculateTotalPrice("Radar")
// // // // // // //  calculateTotalPrice("Droid")
// // // // // // //  calculateTotalPrice("Grip")
// // // // // // //  calculateTotalPrice("Scanner")
// // // // // // //  calculateTotalPrice("Blaster")

// // // // // // // exercise 30

// // // // // // function makeTask(data) {

// // // // // //   const completed = false;
// // // // // //   const category = "General";
// // // // // //   const priority = "Normal";
// // // // // //   // Change code below this line

// // // // // //   // Change code above this line
// // // // // // }
// // // // // // makeTask({})
// // // // // // console.log('makeTask({}): ', makeTask({}));
// // // // // // makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// // // // // // console.log('makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }): ', makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// // // // // //tasck 30

// // // // // function makeTask(data) {

// // // // //   const completed = false;
// // // // //   const category = "General";
// // // // //   const priority = "Normal";
// // // // //   // Change code below this line
// // // // // const firstObject = {category, priority, completed }
// // // // // const newObject = {...firstObject, ...data}
// // // // // console.log('newObject: ', newObject);

// // // // //   return newObject
// // // // //   // Change code above this line
// // // // // }
// // // // // makeTask({}) //{ category: "General", priority: "Normal", completed: false }
// // // // // makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// // // // // //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// // // // //task 31

// // // // // function add(...args) {
// // // // //   let sum = 0
// // // // //   for (let arg of args) {
// // // // //     sum = sum + arg

// // // // //   }
// // // // //   console.log('sum: ', sum);
// // // // //   return sum
// // // // // }
// // // // // add(15, 27)
// // // // // add(15, 27, 10)
// // // // // add(15, 27, 20, 30)

// // // // //task 32

// // // // // function addOverNum(firstArg, ...args) {
// // // // //   let total = 0;

// // // // //   for (const arg of args) {
// // // // //     if (firstArg < arg) {
// // // // //       total += arg

// // // // //     }
// // // // //     }
// // // // //     console.log('total: ', total);
// // // // //   return total
// // // // // Change code above this line
// // // // // }
// // // // // addOverNum(50, 15, 27)
// // // // // addOverNum(10, 12, 4, 11, 48, 10, 8)
// // // // // addOverNum(15, 32, 6, 13, 19, 8)
// // // // // addOverNum(20, 74, 11, 62, 46, 12, 36)

// // // // //task 34

// // // // // Change code below this line
// // // // function findMatches(arrayArg, ...otherArg) {
// // // //   console.log('otherArg: ', otherArg);
// // // //   const matches = []; // Don't change this line
// // // //   for (let arg of arrayArg) {
// // // //     console.log("arg: ", arg);
// // // //     if(otherArg.includes(arg))(
// // // //       matches.push(arg)
// // // //     )
// // // //   }
// // // // console.log("matches", matches)
// // // //   // Change code above this line
// // // //   return matches;
// // // // }
// // // // findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
// // // // findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// // // //  findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// // // //  findMatches([63, 11, 8, 29], 4, 7, 16);


// // // //excersice 35

// // // const bookShelf = {
// // //   books: ["The last kingdom", "Haze", "The guardian of dreams"],
// // //   updateBook(oldName, newName) {
// // //     // Change code below this line
// // // // const indexBook = this.books.indexOf(oldName)
// // // // console.log('indexBook: ', indexBook);
// // //  return this.books.splice(this.books.indexOf(oldName), 1, newName)
 

// // //     // Change code above this line
// // //   },
// // // };
// // // bookShelf.updateBook("Haze", "Dungeon chronicles")
// // // bookShelf.updateBook("The last kingdom", "Dune")


// // //task 37

// // const atTheOldToad = {
// //   potions: ["Speed potion", "Dragon breath", "Stone skin"],
// //   getPotions(){
// //     console.log('this.potions: ', this.potions);
// //     return this.potions
    
// //   }
  
 
// //   // Change code above this line
// // };
// // console.log(atTheOldToad.potions)

// //task 38

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
    
//     console.log(this.potions.splice(this.potions.indexOf(potionName), 1));


//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath")



//  task  3.41

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
      
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// atTheOldToad.getPotions()
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// atTheOldToad.getPotions()
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// // atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 })
// atTheOldToad.addPotion({ name: "Speed potion", price: 460 })
  


// function colback



// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)){
//        return makePizza(pizzaName)
//     } return onOrderError(pizzaName)
//   },
// };
// // Change code above this line

 
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// console.log('pizzaPalace.order("Vienna", makePizza, onOrderError);: ', pizzaPalace.order("Vienna", makePizza, onOrderError));


/* УРОК 4.7  АБСТРАГУВАННЯ ПОВТОРЕННЯ

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаємо printValue як callback-функцію
repeat(3, printValue);
// 0
// 1
// 2

// Передаємо prettyPrint як callback-функцію
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2 */

/*const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });
     return total
}
// Change code above this line
calculateTotalPrice([12, 85, 37, 4])
console.log('calculateTotalPrice([12, 85, 37, 4]): ', calculateTotalPrice([12, 85, 37, 4]));*/


//task 4.13


/*function changeEven(numbers, value) {
  // Change code below this line
  const newArray =[]
  numbers.forEach(element => {
    if (element % 2 === 0){
      newArray.push(element + value)
      console.log(newArray);
    } else {newArray.push(element)}
  });
  console.log(newArray);
  return newArray
  // Change code above this line
}

changeEven([1, 2, 3, 4, 5], 10) 
changeEven([44, 13, 81, 92, 36, 54], 100)*/

//task 4.14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengthsArray = []
// const planetsLengths = planets.map(element => 
//   console.log((element.length)))
  


const listbook = document.querySelector(".content__list");
const liText = listbook.firstElementChild;
liText.classList.add('strings')
listbook.style.color = "red"

const stringsSt = document.querySelector('.strings')
console.log(stringsSt);
stringsSt.style.fontSize = "48px"
stringsSt.style.textAlign = "center"
stringsSt.style.listStyle = "none"
stringsSt.style.marginTop = "100px"

const titley = document.createElement("h2");
titley.textContent = 'user name';
listbook.before(titley);
titley.style.marginTop = "48px"
titley.style.letterSpacing = "50px"
titley.style.textAlign = "center"


const article = document.querySelector(".titley");
console.log(title.innerHTML);

const title = document.querySelector(".titley .title");
console.log(titley.innerHTML);

const text = document.querySelector(".article .text");
console.log(text.innerHTML);

const link = document.querySelector(".article .link");
console.log(link.innerHTML);
//
//const firstListItem = listbook.firstElementChild;
//console.log(firstListItem);

// const lastListItem = listbook.firstElementChild;
// console.log(lastListItem);






