import { describe, expect, it } from "vitest";

import { menu } from "@/data/menu";

describe("Menu items", () => {
  it("provides descriptions, ingredients, and local slideshow photos for every dish", () => {
    expect(menu.length).toBeGreaterThan(0);
    expect(new Set(menu.map((item) => item.name)).size).toBe(menu.length);

    for (const item of menu) {
      expect(item.name.trim().length, item.id).toBeGreaterThan(0);
      expect(item.description.trim().length, `${item.name} description`).toBeGreaterThan(0);
      expect(item.ingredients.length, `${item.name} ingredients`).toBeGreaterThan(0);
      expect(item.ingredients.every((ingredient) => ingredient.trim().length > 0)).toBe(true);
      expect(item.images.length, `${item.name} photos`).toBeGreaterThan(0);
      expect(item.images.every((image) => image.length > 0)).toBe(true);
    }
  });
});
