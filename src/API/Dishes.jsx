// import { db } from '../config/firebase'
// import { getDocs , collection } from 'firebase/firestore'

//     const [foodList, setFoodList] =useState([])
//     const menuItemCollectionRef = collection(db, "menu-items")
//     useEffect(()=>{
//         const getfoodList = async () =>{
//             try {
//                 const data =await getDocs(menuItemCollectionRef);
//                 const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id}))
//                 setFoodList(filteredData)
//             } catch (err){
//                 console.error(err)
//             }
//         }
//         getfoodList()  
//     }, [])


// import GreekSalad from '../Assets/Food images/Greek Salad.jpeg'
// import Brushetta from '../Assets/Food images/Brushetta.jpg'
// import GrillFish from '../Assets/Food images/Grill Fish.jpg'
// import ModernHummusTrio from '../Assets/Food images/Modern Hummus Trio.jpeg'
// import BabaGanoush from '../Assets/Food images/Baba Ganoush.jpg'
// import StuffedGrapeLeaves from '../Assets/Food images/Stuffed Grape Leaves.jpeg'
// import image07 from '../Assets/Food images/Falafel Bites.jpg'
// import image08 from '../Assets/Food images/Zaatar Spiced Chicken.jpg'
// import image09 from '../Assets/Food images/Mediterranean Quinoa Salad.jpeg'
// import image10 from '../Assets/Food images/Chicken Shawarma Wrap.jpg'
// import image11 from '../Assets/Food images/Lamb Gyro.jpeg'
// import image12 from '../Assets/Food images/Grilled Veggie Wrap.jpg'
// import image13 from '../Assets/Food images/Spanakopita.jpg'
// import image14 from '../Assets/Food images/Lamb Kofta.jpeg'
// import image15 from '../Assets/Food images/Seafood Paella.jpg'
// import image16 from '../Assets/Food images/Moussaka.jpg'
// import image17 from '../Assets/Food images/Vegetarian Moussaka.jpg'
// import image18 from '../Assets/Food images/Grilled Octopus.jpg'
// import image19 from '../Assets/Food images/Shakshuka.jpg'
// import image20 from '../Assets/Food images/Chicken Souvlaki.jpg'
// import image21 from '../Assets/Food images/Beef Kebab.jpeg'
// import image22 from '../Assets/Food images/Baklava.jpeg'
// import image23 from '../Assets/Food images/Knafeh.jpeg'
// import image24 from '../Assets/Food images/Turkish Delight.jpeg'
// import image25 from '../Assets/Food images/Greek Yogurt with Honey and Walnuts.jpeg'
// import image26 from '../Assets/Food images/Mint Lemonade.jpeg'
// import image27 from '../Assets/Food images/Turkish Coffee.jpeg'
// import image28 from '../Assets/Food images/Moroccan Mint Tea.jpeg'
// import image29 from '../Assets/Food images/Pomegranate Iced Tea.jpeg'
// import image30 from '../Assets/Food images/Grilled Halloumi.jpeg'
// import image31 from '../Assets/Food images/Mediterranean Platter.jpeg'
// import image32 from '../Assets/Food images/Shrimp Saganaki.jpeg'
// import image33 from '../Assets/Food images/Roasted Red Pepper and Walnut Dip.jpeg'


// export const Dishes = [
//     {
//     id:1,
//     name:"Greek Salad",
//     description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
//     price:12.99,
//     category:"salads",
//     img: GreekSalad,
//     restaurant: "Little lemon",
//     },
//     {
//     id:2,
//     name:"Brushetta",
//     description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
//     price:7.99,
//     category:"appetizers",
//     img: Brushetta,
//     restaurant: "Little lemon",
//     },
//     {
//     id:3,
//     name:"Grill Fish",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quos debitis tempore ullam quae corrupti ipsum, eveniet esse ipsa magnam. ",
//     price:7.99,
//     category:"entrees",
//     img: GrillFish,
//     restaurant: "Little lemon",
//     },
//     {
//     index: 4,
//     name: "Modern Hummus Trio",
//     description: "A trio of traditional, beetroot, and avocado hummus served with pita bread.",
//     price: 8.99,
//     category: "appetizers",
//     img: ModernHummusTrio,
//     restaurant: "Little lemon",
//     },
//     {
//     index: 5,
//     name: "Baba Ganoush",
//     description: "Smoky roasted eggplant dip with a drizzle of pomegranate molasses.",
//     price: 7.99,
//     category: "appetizers",
//     img: BabaGanoush,
//     restaurant: "Little lemon",
//     },
//     {
//     index: 6,
//     name: "Stuffed Grape Leaves",
//     description: "Grape leaves stuffed with quinoa, herbs, and spices, served with tzatziki sauce.",
//     price: 9.49,
//     category: "appetizers",
//     img: StuffedGrapeLeaves,
//     restaurant: "Little lemon",
//     },
//     {
//     index: 7,
//     name: "Falafel Bites",
//     description: "Crispy falafel served with a tahini dipping sauce.",
//     price: 6.99,
//     category: "appetizers",
//     img: image07,
//     restaurant: "AppleBee",
//     },
//     {
//     index: 8,
//     name: "Zaatar Spiced Chicken",
//     description: "Grilled chicken breast seasoned with zaatar, served with a side of roasted vegetables and lemon tahini sauce.",
//     price: 13.99,
//     category: "entrees",
//     img: image08,
//     restaurant: "AppleBee",
//     },
//     {
//     index: 9,
//     name: "Mediterranean Quinoa Salad",
//     description: "Quinoa salad with roasted vegetables, chickpeas, feta, and a lemon herb vinaigrette.",
//     price: 12.49,
//     category: "salads",
//     img: image09,
//     restaurant: "AppleBee",
//     },
//   {
//     index: 10,
//     name: "Chicken Shawarma Wrap",
//     description: "Marinated chicken shawarma with lettuce, tomatoes, pickles, and garlic sauce, wrapped in a warm pita.",
//     price: 11.99,
//     category: "sandwiches",
//     img: image10,
//     restaurant: "AppleBee",
//   },
//   {
//     index: 11,
//     name: "Lamb Gyro",
//     description: "Sliced lamb with tzatziki, onions, tomatoes, and cucumbers, served in a pita.",
//     price: 12.99,
//     category: "sandwiches",
//     img: image11,
//     restaurant: "AppleBee",
//   },
//   {
//     index: 12,
//     name: "Grilled Veggie Wrap",
//     description: "A medley of grilled vegetables including zucchini, bell peppers, eggplant, and onions, layered with creamy hummus and fresh spinach, wrapped in a warm whole wheat tortilla.",
//     price: 9.99,
//     category: "sandwiches",
//     img: image12,
//     restaurant: "Jade",
//   },
//   {
//     index: 13,
//     name: "Spanakopita",
//     description: "Traditional Greek spinach and feta cheese pie wrapped in crispy phyllo dough.",
//     price: 8.49,
//     category: "appetizers",
//     img: image13,
//     restaurant: "Jade",
//   },
//   {
//     index: 14,
//     name: "Lamb Kofta",
//     description: "Grilled lamb meatballs with a spicy harissa yogurt sauce.",
//     price: 14.99,
//     category: "entrees",
//     img: image14,
//     restaurant: "Jade",
//   },
//   {
//     index: 15,
//     name: "Seafood Paella",
//     description: "A modern take on traditional paella with saffron rice, shrimp, mussels, and calamari.",
//     price: 18.99,
//     category: "entrees",
//     img: image15,
//     restaurant: "Jade",
//   },
//   {
//     index: 16,
//     name: "Moussaka",
//     description: "Layers of eggplant, ground beef, and béchamel sauce baked to perfection.",
//     price: 16.49,
//     category: "entrees",
//     img: image16,
//     restaurant: "Trader Joe",
//   },
//   {
//     index: 17,
//     name: "Vegetarian Moussaka",
//     description: "A vegetarian version of the classic dish with lentils and vegetables.",
//     price: 15.49,
//     category: "entrees",
//     img: image17,
//     restaurant: "Trader Joe",
//   },
//   {
//     index: 18,
//     name: "Grilled Octopus",
//     description: "Tender octopus grilled and served with a lemon herb vinaigrette.",
//     price: 19.99,
//     category: "entrees",
//     img: image18,
//     restaurant: "Trader Joe",
//   },
//   {
//     index: 19,
//     name: "Shakshuka",
//     description: "Poached eggs in a spicy tomato and bell pepper sauce, served with crusty bread.",
//     price: 13.99,
//     category: "entrees",
//     img: image19,
//     restaurant: "Trader Joe",
//   },
//   {
//     index: 20,
//     name: "Chicken Souvlaki",
//     description: "Grilled chicken skewers with a side of tzatziki, served with rice and salad.",
//     price: 14.99,
//     category: "entrees",
//     img: image20,
//     restaurant: "Trader Joe",
//   },
//   {
//     index: 21,
//     name: "Beef Kebab",
//     description: "Marinated beef skewers with a side of garlic sauce, served with couscous.",
//     price: 17.49,
//     category: "entrees",
//     img: image21,
//     restaurant: "Trader Joe",
//   },
//   {
//     index: 22,
//     name: "Baklava",
//     description: "Layers of phyllo dough, nuts, and honey syrup, served with a modern twist of cardamom.",
//     price: 6.99,
//     category: "desserts",
//     img: image22,
//     restaurant: "Trader Joe",
//   },
//   {
//     index: 23,
//     name: "Knafeh",
//     description: "Sweet cheese pastry soaked in orange blossom syrup and topped with crushed pistachios.",
//     price: 7.49,
//     category: "desserts",
//     img: image23,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 24,
//     name: "Turkish Delight",
//     description: "Assorted flavors of traditional Turkish delight.",
//     price: 5.99,
//     category: "desserts",
//     img: image24,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 25,
//     name: "Greek Yogurt with Honey and Walnuts",
//     description: "Creamy Greek yogurt drizzled with honey and topped with crunchy walnuts.",
//     price: 5.49,
//     category: "desserts",
//     img: image25,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 26,
//     name: "Mint Lemonade",
//     description: "Refreshing lemonade infused with fresh mint leaves.",
//     price: 3.99,
//     category: "beverages",
//     img: image26,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 27,
//     name: "Turkish Coffee",
//     description: "Strong and aromatic Turkish coffee, served with a piece of Turkish delight.",
//     price: 4.49,
//     category: "beverages",
//     img: image27,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 28,
//     name: "Moroccan Mint Tea",
//     description: "Traditional Moroccan green tea with fresh mint leaves.",
//     price: 3.49,
//     category: "beverages",
//     img: image28,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 29,
//     name: "Pomegranate Iced Tea",
//     description: "Iced tea with a splash of pomegranate juice.",
//     price: 3.99,
//     category: "beverages",
//     img: image29,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 30,
//     name: "Grilled Halloumi",
//     description: "Slices of grilled halloumi cheese served with a side of honey and almonds.",
//     price: 9.99,
//     category: "appetizers",
//     img: image30,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 31,
//     name: "Mediterranean Platter",
//     description: "A selection of hummus, baba ganoush, falafel, tabbouleh, and pita bread.",
//     price: 15.99,
//     category: "platters",
//     img: image31,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 32,
//     name: "Shrimp Saganaki",
//     description: "Shrimp cooked in a tomato and feta cheese sauce, served with crusty bread.",
//     price: 14.99,
//     category: "appetizers",
//     img: image32,
//     restaurant: "Peter's Sail",
//   },
//   {
//     index: 33,
//     name: "Roasted Red Pepper and Walnut Dip",
//     description: "A rich and creamy dip made from roasted red peppers and walnuts, served with pita chips.",
//     price: 7.49,
//     category: "appetizers",
//     img: image33,
//     restaurant: "Peter's Sail",
//   }
// ]

