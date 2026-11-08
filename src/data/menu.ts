// ✏️ SAMPLE MENU — replace with Keretii Restaurant's real dishes and prices.
// Prices are placeholders (shown with a "Sample price" label on the site).
// Ingredients and recipe steps are also sample text, to be confirmed by the kitchen.
import grill from "@/assets/grill.jpg";
import local from "@/assets/local.jpg";
import snacks from "@/assets/snacks.jpg";
import drinks from "@/assets/drinks.jpg";
import dessert from "@/assets/dessert.jpg";
import hero from "@/assets/hero.jpg";

export const categories = [
  "Main Courses",
  "Local Favorites",
  "Grilled Dishes",
  "Snacks",
  "Drinks",
  "Desserts",
] as const;

export type Category = (typeof categories)[number];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: "RWF";
  category: Category;
  image: string;
  /** Key ingredients shown in the dish details pop-up. */
  ingredients: string[];
  /** Preparation steps, in order, shown in the dish details pop-up. */
  recipe: string[];
};

export const menu: MenuItem[] = [
  {
    id: "1",
    name: "Mixed Grill Plate",
    description: "Sample dish: chargrilled beef and chicken with rice and seasonal vegetables.",
    price: 0,
    currency: "RWF",
    category: "Main Courses",
    image: hero,
    ingredients: ["Beef sirloin", "Chicken thighs", "Basmati rice", "Seasonal vegetables", "House grill spices"],
    recipe: [
      "Season the beef and chicken with house grill spices.",
      "Chargrill over hot coals until caramelised outside, juicy inside.",
      "Cook the rice and steam the vegetables separately.",
      "Plate everything together and serve hot.",
    ],
  },
  {
    id: "2",
    name: "Greens & Plantain Stew",
    description: "Sample dish: slow-cooked greens with green bananas and beans.",
    price: 0,
    currency: "RWF",
    category: "Local Favorites",
    image: local,
    ingredients: ["Fresh greens", "Green bananas", "Red beans", "Tomatoes & onions", "Local spices"],
    recipe: [
      "Simmer the beans in salted water until tender.",
      "Cook the green bananas separately, then drain.",
      "Fry the tomatoes and onions, add the greens and spices.",
      "Combine with the beans and serve warm with the bananas.",
    ],
  },
  {
    id: "3",
    name: "Beef Brochettes",
    description: "Sample dish: marinated skewers with grilled plantain and herb sauce.",
    price: 0,
    currency: "RWF",
    category: "Grilled Dishes",
    image: grill,
    ingredients: ["Beef sirloin", "Fresh herbs", "Garlic & ginger", "Spice marinade", "Grilled plantain"],
    recipe: [
      "Cut the beef into even cubes.",
      "Marinate for four hours in the herb and spice mix.",
      "Thread the meat onto skewers.",
      "Grill, turning often, until evenly charred.",
      "Serve with grilled plantain and herb sauce.",
    ],
  },
  {
    id: "4",
    name: "Crispy Samosas",
    description: "Sample dish: golden pastries with a house chili dip.",
    price: 0,
    currency: "RWF",
    category: "Snacks",
    image: snacks,
    ingredients: ["Wheat pastry", "Spiced potatoes", "Peas", "Onions", "House chili dip"],
    recipe: [
      "Cook the spiced potato, pea and onion filling and let it cool.",
      "Fold the pastry into tight triangles and seal the edges.",
      "Deep-fry until golden and crisp.",
      "Drain, then serve hot with the house chili dip.",
    ],
  },
  {
    id: "5",
    name: "Passion Juice & Ginger Tea",
    description: "Sample drinks: fresh fruit juice or a warming ginger infusion.",
    price: 0,
    currency: "RWF",
    category: "Drinks",
    image: drinks,
    ingredients: ["Fresh passion fruit", "Water", "Honey", "Fresh ginger", "Lemon"],
    recipe: [
      "Juice the passion fruit and strain out the seeds.",
      "Sweeten lightly with honey and chill.",
      "Steep sliced ginger and lemon in hot water.",
      "Serve the juice cold and the tea warm.",
    ],
  },
  {
    id: "6",
    name: "Chocolate Torte",
    description: "Sample dessert: rich chocolate with fresh berries.",
    price: 0,
    currency: "RWF",
    category: "Desserts",
    image: dessert,
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Almond flour", "Fresh berries"],
    recipe: [
      "Melt the chocolate with the butter until smooth.",
      "Whisk the eggs with sugar, then fold in the chocolate.",
      "Add the almond flour and bake until set but soft inside.",
      "Cool, top with fresh berries and serve.",
    ],
  },
];

/** price 0 = not yet supplied */
export const formatPrice = (item: MenuItem) =>
  item.price > 0 ? `${item.currency} ${item.price.toLocaleString("en-US")}` : `${item.currency} —`;
