// ✏️ SAMPLE MENU — replace with Keretii Restaurant's real dishes and prices.
// Prices are placeholders (shown with a "Sample price" label on the site).
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
};

export const menu: MenuItem[] = [
  { id: "1", name: "Mixed Grill Plate", description: "Sample dish: chargrilled beef and chicken with rice and seasonal vegetables.", price: 0, currency: "RWF", category: "Main Courses", image: hero },
  { id: "2", name: "Greens & Plantain Stew", description: "Sample dish: slow-cooked greens with green bananas and beans.", price: 0, currency: "RWF", category: "Local Favorites", image: local },
  { id: "3", name: "Beef Brochettes", description: "Sample dish: marinated skewers with grilled plantain and herb sauce.", price: 0, currency: "RWF", category: "Grilled Dishes", image: grill },
  { id: "4", name: "Crispy Samosas", description: "Sample dish: golden pastries with a house chili dip.", price: 0, currency: "RWF", category: "Snacks", image: snacks },
  { id: "5", name: "Passion Juice & Ginger Tea", description: "Sample drinks: fresh fruit juice or a warming ginger infusion.", price: 0, currency: "RWF", category: "Drinks", image: drinks },
  { id: "6", name: "Chocolate Torte", description: "Sample dessert: rich chocolate with fresh berries.", price: 0, currency: "RWF", category: "Desserts", image: dessert },
];

/** price 0 = not yet supplied */
export const formatPrice = (item: MenuItem) =>
  item.price > 0 ? `${item.currency} ${item.price.toLocaleString("en-US")}` : `${item.currency} —`;
