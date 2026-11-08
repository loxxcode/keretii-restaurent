import { describe, expect, it } from "vitest";
import { menu } from "@/data/menu";
import { orderMessage, whatsappOrderUrl } from "@/lib/order";

const NUMBER = "250788123456";

describe("WhatsApp order link", () => {
  it("names the clicked dish in the message", () => {
    const dish = menu[0]!;
    const message = orderMessage(dish);
    expect(message).toContain(dish.name);
    expect(message).toContain(dish.category);
    expect(message).toContain("Keretii Restaurant");
  });

  it("builds a wa.me link that carries the order text", () => {
    const dish = menu[2]!;
    const url = whatsappOrderUrl(dish, NUMBER)!;
    expect(url.startsWith(`https://wa.me/${NUMBER}?text=`)).toBe(true);
    expect(decodeURIComponent(url.split("text=")[1]!)).toContain(dish.name);
  });

  it("gives every dish its own order link", () => {
    const urls = new Set(menu.map((item) => whatsappOrderUrl(item, NUMBER)));
    expect(urls.size).toBe(menu.length);
    for (const item of menu) expect(whatsappOrderUrl(item, NUMBER)).toContain(encodeURIComponent(item.name));
  });

  it("offers no link while the WhatsApp number is unconfirmed", () => {
    expect(whatsappOrderUrl(menu[0]!, null)).toBeNull();
  });
});
