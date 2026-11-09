// ✏️ EDIT THIS FILE to update Keretii Restaurant's real details.
// Any value left as `null` shows a clear "To be confirmed" placeholder on the site
// instead of a fake number, address or link.

export type Location = {
  id: string;
  name: string;
  district: string;
  area: string;
  /** Verified street address. null = not yet confirmed. */
  address: string | null;
  /** Opening hours text. null = not yet confirmed. */
  hours: string | null;
  /** Branch phone in international format, e.g. "+250 7XX XXX XXX". */
  phone: string | null;
  mapsUrl: string;
  /** Set to true only once this branch is confirmed as operational. */
  confirmed: boolean;
};

export type RestaurantInfo = {
  name: string;
  tagline: string;
  description: string;
  email: string | null;
  phone: string | null;
  /** WhatsApp number digits only incl. country code, e.g. "2507XXXXXXXX". */
  whatsapp: string | null;
  hours: string | null;
  social: { label: "Instagram" | "Facebook" | "X"; url: string | null }[];
  locations: Location[];
};

export const restaurant: RestaurantInfo = {
  name: "Keretii Restaurant",
  tagline: "Great food, honest flavor and warm hospitality.",
  description:
    "A welcoming place in Kigali to gather, share a table and enjoy carefully prepared food.",
  email: null,
  phone: null,
  whatsapp: "250788888888",
  hours: null,
  social: [
    { label: "Instagram", url: null },
    { label: "Facebook", url: null },
    { label: "X", url: null },
  ],
  locations: [
    {
      id: "kicukiro",
      name: "Kicukiro Centre",
      district: "Kicukiro District",
      area: "Kigali, Rwanda",
      address: null,
      hours: null,
      phone: null,
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kicukiro+Centre%2C+Kigali%2C+Rwanda",
      confirmed: false,
    },
    {
      id: "kacyiru",
      name: "Kacyiru",
      district: "Gasabo District",
      area: "Kigali, Rwanda",
      address: null,
      hours: null,
      phone: null,
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Kacyiru%2C+Gasabo%2C+Kigali%2C+Rwanda",
      confirmed: false,
    },
  ],
};

export const TBC = "To be confirmed";
export const telHref = (p: string) => `tel:${p.replace(/[^+\d]/g, "")}`;
