export const categories = [
  "Breakfast",
  "Salads",
  "Soups",
  "Local Favorites",
  "Grilled Dishes",
  "Main Courses",
  "Drinks",
] as const;

export type Category = (typeof categories)[number];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: "RWF";
  category: Category;
  images: string[];
  ingredients: string[];
  recipe: string[];
};

export const menuDetailsNotice =
  "Descriptions and ingredient lists are draft suggestions pending kitchen confirmation. Please ask about ingredients and allergens before ordering.";

const menuAssets = import.meta.glob<string>("../assets/menu/*/*.jpg", {
  eager: true,
  import: "default",
});

const nameOverrides: Record<string, string> = {
  "Banana-Pineaple-Smoothie": "Banana Pineapple Smoothie",
  "Cantinental-Breakfast": "Continental Breakfast",
  "Checken-Brochette": "Chicken Brochette",
  "Chicken-Cesar-Salad": "Chicken Caesar Salad",
  "Fresh Fruit Smooth(banana,pineaple Mango, Ice ,honey ,sugar ,yoghurt)": "Fresh Fruit Smoothie",
  "Iced-Blended-Mango-Smoothiee": "Iced Blended Mango Smoothie",
  "Mixed-Smoothy(mango,pineaple,banana)": "Mixed Fruit Smoothie",
  "Nido-Tea(hot Nido Water, Tea Leaves, Bags)": "Nido Tea",
  "Peanut-Butter-Smoothie(ice ,banana": "Peanut Butter Smoothie",
  "Spacial-Omelette": "Special Omelette",
  "Strawberry-Smoothie(strawberry Fresh,ice,milk),cream)": "Strawberry Smoothie",
};

type DraftMenuDetails = {
  description: string;
  ingredients: string[];
};

const draftMenuDetails: Record<string, DraftMenuDetails> = {
  Agatogo: {
    description: "A comforting East African green-banana stew.",
    ingredients: ["Green bananas", "Tomatoes", "Onion", "Cooking oil", "Seasoning"],
  },
  "Avocado-Salad": {
    description: "Ripe avocado served with a fresh, crisp salad.",
    ingredients: ["Avocado", "Lettuce", "Tomato", "Cucumber", "Onion", "Dressing"],
  },
  "Cantinental-Breakfast": {
    description: "A classic continental-style breakfast plate.",
    ingredients: ["Bread", "Eggs", "Butter", "Fresh fruit", "Tea or coffee"],
  },
  "Chapatti-Omelette": {
    description: "A savory omelette served with chapatti.",
    ingredients: ["Eggs", "Chapatti", "Onion", "Tomato", "Cooking oil", "Seasoning"],
  },
  "Checken-Brochette": {
    description: "Seasoned chicken pieces cooked on a brochette.",
    ingredients: ["Chicken", "Cooking oil", "Garlic", "Spices", "Salt"],
  },
  "Cheese-Omelette": {
    description: "A folded omelette with melted cheese.",
    ingredients: ["Eggs", "Cheese", "Butter or cooking oil", "Salt", "Black pepper"],
  },
  "Chicken-Cesar-Salad": {
    description: "A Caesar-style salad topped with chicken.",
    ingredients: ["Chicken", "Lettuce", "Parmesan", "Croutons", "Caesar dressing"],
  },
  "Chicken-Drumstick": {
    description: "A chicken drumstick seasoned and cooked until golden.",
    ingredients: ["Chicken drumstick", "Cooking oil", "Spices", "Salt"],
  },
  "Chicken-Soup": {
    description: "A warming soup with chicken and vegetables.",
    ingredients: ["Chicken", "Carrot", "Onion", "Stock", "Herbs"],
  },
  "Ginger-Carrots-Soup": {
    description: "A smooth carrot soup with warming ginger.",
    ingredients: ["Carrots", "Ginger", "Onion", "Stock", "Seasoning"],
  },
  "Mixed-Salad": {
    description: "A colorful mix of fresh salad vegetables.",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Carrot", "Onion", "Dressing"],
  },
  "Plain-Omelette": {
    description: "A simply prepared, fluffy omelette.",
    ingredients: ["Eggs", "Butter or cooking oil", "Salt", "Black pepper"],
  },
  "Provincial-Chicken": {
    description: "Chicken simmered with vegetables in a savory sauce.",
    ingredients: ["Chicken", "Tomato", "Onion", "Bell pepper", "Herbs", "Seasoning"],
  },
  "Pumpkin-Soup": {
    description: "A smooth, comforting soup made with pumpkin.",
    ingredients: ["Pumpkin", "Onion", "Garlic", "Stock", "Seasoning"],
  },
  "Spacial-Omelette": {
    description: "A generously filled omelette with a savory mix of toppings.",
    ingredients: ["Eggs", "Tomato", "Onion", "Bell pepper", "Cheese", "Herbs"],
  },
  "Spanish-Omelette": {
    description: "A Spanish-style omelette with potato and onion.",
    ingredients: ["Eggs", "Potato", "Onion", "Olive oil", "Salt"],
  },
  "Striploin-Steak": {
    description: "A seared striploin steak seasoned to bring out its rich flavor.",
    ingredients: ["Beef striploin", "Cooking oil", "Garlic", "Salt", "Black pepper"],
  },
  "Tomato-Soup": {
    description: "A savory soup made with ripe tomatoes.",
    ingredients: ["Tomatoes", "Onion", "Garlic", "Stock", "Herbs"],
  },
  "Vegetable-Soup": {
    description: "A hearty soup with a selection of vegetables.",
    ingredients: ["Seasonal vegetables", "Onion", "Stock", "Herbs", "Seasoning"],
  },
  "African-Coffee": {
    description: "Freshly brewed coffee served hot.",
    ingredients: ["Coffee", "Water"],
  },
  "African-Tea": {
    description: "A warming cup of African-style tea.",
    ingredients: ["Tea leaves", "Water", "Milk", "Sugar", "Spices"],
  },
  "Banana-Pineaple-Smoothie": {
    description: "A cool fruit smoothie blending banana and pineapple.",
    ingredients: ["Banana", "Pineapple", "Yogurt", "Ice"],
  },
  "Black-Coffee": {
    description: "A straightforward cup of freshly brewed black coffee.",
    ingredients: ["Coffee", "Water"],
  },
  "Black-Tea": {
    description: "A freshly brewed cup of black tea.",
    ingredients: ["Black tea", "Water"],
  },
  "English-Tea": {
    description: "A classic cup of English-style tea.",
    ingredients: ["Black tea", "Water", "Milk"],
  },
  "Fresh Fruit Smooth(banana,pineaple Mango, Ice ,honey ,sugar ,yoghurt)": {
    description: "A chilled fruit smoothie with a blend of tropical fruit.",
    ingredients: ["Banana", "Pineapple", "Mango", "Ice", "Honey", "Sugar", "Yogurt"],
  },
  "Green-Smoothie": {
    description: "A cool blended drink with greens and fruit.",
    ingredients: ["Leafy greens", "Mixed fruit", "Yogurt", "Ice"],
  },
  "Hot-Chocolate": {
    description: "A warm, chocolatey drink served hot.",
    ingredients: ["Cocoa", "Milk", "Sugar"],
  },
  "Hot-Milk": {
    description: "A comforting cup of warm milk.",
    ingredients: ["Milk"],
  },
  "Iced-Blended-Mango-Smoothiee": {
    description: "A chilled blended mango drink.",
    ingredients: ["Mango", "Milk", "Ice", "Sugar"],
  },
  "Mango-Juice": {
    description: "A refreshing juice made with mango.",
    ingredients: ["Mango", "Water", "Sugar", "Ice"],
  },
  "Masala-Tea": {
    description: "A fragrant tea brewed with warming spices.",
    ingredients: ["Black tea", "Milk", "Water", "Spices", "Sugar"],
  },
  "Mixed-Smoothy(mango,pineaple,banana)": {
    description: "A chilled smoothie blended from a mix of tropical fruits.",
    ingredients: ["Mango", "Pineapple", "Banana", "Yogurt", "Ice"],
  },
  "Mocktail-Fresh-Fruit-Juice": {
    description: "A colorful, non-alcoholic drink with fresh fruit flavors.",
    ingredients: ["Mixed fruit", "Fruit juice", "Ice"],
  },
  "Nido-Tea(hot Nido Water, Tea Leaves, Bags)": {
    description: "A warm tea blended with Nido milk.",
    ingredients: ["Nido milk powder", "Tea leaves", "Water", "Sugar"],
  },
  "Orange-Juice": {
    description: "A bright, refreshing orange juice.",
    ingredients: ["Oranges", "Water", "Ice"],
  },
  "Passion-Juice": {
    description: "A tangy, refreshing passion fruit juice.",
    ingredients: ["Passion fruit", "Water", "Sugar", "Ice"],
  },
  "Peanut-Butter-Smoothie(ice ,banana": {
    description: "A chilled smoothie combining peanut butter and banana.",
    ingredients: ["Peanut butter", "Banana", "Milk", "Ice"],
  },
  "Pineapple-Juice": {
    description: "A refreshing juice made with pineapple.",
    ingredients: ["Pineapple", "Water", "Ice"],
  },
  Soda: {
    description: "A chilled carbonated soft drink.",
    ingredients: ["Carbonated soft drink"],
  },
  "Spice-Tea": {
    description: "A warming cup of tea with aromatic spices.",
    ingredients: ["Tea leaves", "Milk", "Water", "Spices", "Sugar"],
  },
  "Strawberry-Smoothie(strawberry Fresh,ice,milk),cream)": {
    description: "A cool strawberry smoothie with a creamy finish.",
    ingredients: ["Strawberries", "Milk", "Ice", "Cream"],
  },
  "Tree-Tomato-Juice": {
    description: "A tart, refreshing juice made with tree tomatoes.",
    ingredients: ["Tree tomatoes", "Water", "Sugar", "Ice"],
  },
  Water: {
    description: "A bottle of refreshing drinking water.",
    ingredients: ["Water"],
  },
};

type MenuAssetGroup = {
  folder: "Foods" | "Drinks";
  baseName: string;
  images: { order: number; src: string }[];
};

const groupedAssets = new Map<string, MenuAssetGroup>();

for (const [path, src] of Object.entries(menuAssets)) {
  const match = path.match(/\/(Foods|Drinks)\/(.+?)(\d+)\.jpg$/);
  if (!match) continue;

  const [, folder, baseName, order] = match;
  if (!folder || !baseName || !order || (folder !== "Foods" && folder !== "Drinks")) continue;

  const groupKey = `${folder}/${baseName}`;
  const image = { order: Number(order), src };
  const group = groupedAssets.get(groupKey);
  if (group) {
    group.images.push(image);
  } else {
    groupedAssets.set(groupKey, { folder, baseName, images: [image] });
  }
}

function getCategory(folder: MenuAssetGroup["folder"], baseName: string): Category {
  if (folder === "Drinks") return "Drinks";
  if (/salad/i.test(baseName)) return "Salads";
  if (/soup/i.test(baseName)) return "Soups";
  if (/breakfast|omelette|chapatti/i.test(baseName)) return "Breakfast";
  if (/agatogo/i.test(baseName)) return "Local Favorites";
  if (/brochette|drumstick|steak/i.test(baseName)) return "Grilled Dishes";
  return "Main Courses";
}

function getName(baseName: string): string {
  const override = nameOverrides[baseName];
  if (override) return override;

  return baseName
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
}

export const menu: MenuItem[] = [...groupedAssets.values()]
  .sort((a, b) => {
    if (a.folder !== b.folder) return a.folder === "Foods" ? -1 : 1;
    return getName(a.baseName).localeCompare(getName(b.baseName));
  })
  .map(({ folder, baseName, images }) => {
    const name = getName(baseName);
    const details = draftMenuDetails[baseName];
    if (!details) throw new Error(`Missing draft description and ingredients for "${baseName}"`);

    return {
      id: `${folder.toLowerCase()}-${baseName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      name,
      description: details.description,
      price: 0,
      currency: "RWF",
      category: getCategory(folder, baseName),
      images: images.sort((a, b) => a.order - b.order).map(({ src }) => src),
      ingredients: details.ingredients,
      recipe: [],
    };
  });

/** price 0 = not yet supplied */
export const formatPrice = (item: MenuItem) =>
  item.price > 0 ? `${item.currency} ${item.price.toLocaleString("en-US")}` : `${item.currency} —`;
