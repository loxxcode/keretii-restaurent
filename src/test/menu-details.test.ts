import { describe, expect, it } from "vitest";

import { menu } from "@/data/menu";

// The dish details pop-up renders an Ingredients list and a numbered Recipe,
// so every dish must supply both.
describe("Menu dish details", () => {
  it("gives every dish ingredients and recipe steps", () => {
    for (const item of menu) {
      expect(item.ingredients.length, `${item.name} ingredients`).toBeGreaterThanOrEqual(3);
      expect(item.recipe.length, `${item.name} recipe steps`).toBeGreaterThanOrEqual(3);
      expect(item.ingredients.every((i) => i.trim().length > 0)).toBe(true);
      expect(item.recipe.every((s) => s.trim().length > 0)).toBe(true);
    }
  });
});
