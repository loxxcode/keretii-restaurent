import { formatPrice, type MenuItem } from "@/data/menu";
import { restaurant, TBC } from "@/data/restaurant";

/**
 * Builds the text sent to WhatsApp when a guest taps "Order".
 * The clicked dish is the order, so the message always names it.
 */
export const orderMessage = (item: MenuItem) =>
  [
    `Hello ${restaurant.name}, I would like to order:`,
    `• ${item.name} (${item.category})`,
    `Price: ${item.price > 0 ? formatPrice(item) : TBC}`,
    "Please confirm availability and next steps.",
  ].join("\n");

/**
 * wa.me link carrying the clicked dish.
 * Returns null while the restaurant's WhatsApp number is unconfirmed,
 * so the UI can show an honest "to be confirmed" state instead of a dead link.
 */
export const whatsappOrderUrl = (
  item: MenuItem,
  number: string | null = restaurant.whatsapp,
) =>
  number
    ? `https://wa.me/${number}?text=${encodeURIComponent(orderMessage(item))}`
    : null;
