# Keretii Table And Tales

# PROJECT: KERETII RESTAURANT — PREMIUM STATIC WEBSITE

Act as a senior UI/UX designer, frontend developer, and restaurant branding specialist. Build a beautiful, modern, responsive static website for **Keretii Restaurant** that attracts customers, showcases delicious food, communicates the restaurant's identity, and makes it easy for visitors to find contact information and visit the restaurant.

## 1. Project Objective

Create a polished restaurant website that feels premium, welcoming, appetizing, and trustworthy. The website should work smoothly on desktop computers, tablets, and mobile phones.

This is a **static frontend website only**. Do not implement a backend, database, authentication system, admin dashboard, or server-side ordering system.

Use realistic sample content where details are unavailable, but make it easy to replace the restaurant's actual information later. Never present invented contact details, addresses, opening hours, or prices as verified facts.

## 2. Technology Stack

Use the following technologies:
- Next.js with the App Router and TypeScript.
- Tailwind CSS for styling.
- Lucide React for icons.
- Reusable React components.
- Local static data stored in TypeScript or JSON files.
- Optimized, high-quality food and restaurant photography.

If an existing project is provided, inspect its structure and work with its current setup rather than unnecessarily recreating it.

## 3. Brand Identity and Visual Design

Design the website around a premium restaurant aesthetic.

Suggested color palette:
- Deep charcoal or near-black for elegant backgrounds.
- Warm cream or ivory for light sections.
- Rich gold or amber for highlights and buttons.
- Natural green accents where appropriate.
- White for readable text on dark backgrounds.

Typography:
- Use an elegant serif font for major headings.
- Use a clean sans-serif font for paragraphs, navigation, prices, and buttons.

Design principles:
- Generous whitespace and balanced layouts.
- Large, mouthwatering food photography.
- Elegant cards with subtle rounded corners.
- Smooth hover effects and restrained animations.
- Consistent spacing, alignment, and visual hierarchy.
- High contrast and accessible typography.
- Avoid excessive gradients, unnecessary decorations, and generic template styling.

The final result should look like a professionally designed restaurant brand, not a basic student project.

## 4. Website Structure

### A. Navigation Bar
Create a responsive navigation bar featuring:
- Keretii Restaurant logo or elegant text-based wordmark.
- Home
- About
- Menu
- Gallery
- Contact
- A prominent “Visit Us” or “Explore Menu” button.

Make the navigation sticky or fixed when appropriate. On mobile, use a functional hamburger menu with accessible controls.

### B. Hero Section
Create a visually striking first screen featuring:
- A large, high-quality restaurant or food background image.
- A subtle dark overlay to ensure text readability.
- Brand heading: “Welcome to Keretii Restaurant.”
- A compelling tagline about great food, flavor, and hospitality.
- Supporting text introducing the restaurant experience.
- Primary button: “Explore Our Menu.”
- Secondary button: “Contact Us.”

Use strong typography, excellent spacing, and a responsive layout. The hero should immediately communicate the restaurant's atmosphere and encourage visitors to explore.

### C. About Us Section
Introduce Keretii Restaurant with:
- A section heading such as “Good Food. Great Moments.”
- A short, engaging restaurant description.
- An image of the restaurant, its food, or its dining environment.
- Three possible highlights: quality ingredients, welcoming hospitality, and memorable dining.

Treat these highlights as suggested brand messaging, not verified claims. Keep all text easy to edit.

### D. Featured Menu Section
Create a beautiful food menu featuring at least six sample dishes.

Each menu card should contain:
- Food photograph.
- Dish name.
- Short description.
- Sample price with currency clearly indicated.
- Optional category label.
- A subtle hover animation.

Include sample categories such as:
- Main Courses
- Local Favorites
- Grilled Dishes
- Snacks
- Drinks
- Desserts

Add category filters that work entirely in the browser. When visitors select a category, display the corresponding dishes without reloading the page.

Use clearly marked placeholder prices until the restaurant's real menu and prices are supplied. Do not invent signature dishes and claim they are actual Keretii Restaurant offerings.

### E. Restaurant Highlights
Create a visually appealing section with three or four highlights:
- Freshly prepared meals.
- Comfortable dining atmosphere.
- Friendly service.
- A place to share memorable moments.

Use Lucide icons, short descriptions, and consistent card styling. Keep the claims editable.

### F. Food Gallery
Build an attractive photo gallery featuring:
- Different dishes.
- Food preparation.
- Restaurant interior.
- Dining atmosphere.

Use a responsive grid with varied image proportions. Add subtle image hover effects and an optional lightbox that opens a larger image when clicked.

Use relevant, high-quality images. Avoid broken image URLs and ensure suitable alternative text is provided.

### G. Testimonials
Create a testimonial section with three sample customer reviews to demonstrate the design.

Clearly treat the reviews as demonstration content. Do not fabricate real customer identities, verified ratings, or genuine customer endorsements.

### H. Visit and Contact Section
Create a clear contact section containing editable fields for:
- Restaurant address.
- Telephone number.
- Email address.
- Opening hours.
- Social media links.

Include a “Get Directions” link that can be configured with the verified restaurant location.

If WhatsApp is configured, add a WhatsApp contact button using the restaurant's real phone number.

Do not invent working contact details. Use obvious placeholders until the correct information is available.

### I. Footer
Include:
- Keretii Restaurant branding.
- A short restaurant description.
- Quick navigation links.
- Contact details.
- Social media icons.
- Copyright notice with the current year.

## 5. Interactive Features

Although the website is static, implement functional frontend interactions:
- Responsive mobile navigation.
- Menu category filtering.
- Smooth scrolling to page sections.
- Gallery lightbox.
- Back-to-top button.
- Hover and focus states.
- Optional dark/light theme toggle if it complements the design.
- Clickable telephone, email, map, and configured WhatsApp links.

Do not include fake checkout, payment processing, account registration, reservation submission, or order tracking.

If you include a reservation or ordering call to action, make it a clearly configured external link or an appropriate contact action rather than pretending a backend exists.

## 6. Responsive Design

Use a mobile-first approach.

Desktop:
- Spacious layouts.
- Large hero imagery.
- Multi-column food cards.
- Clear section hierarchy.

Tablet:
- Balanced two-column layouts.
- Adaptable gallery and menu grids.

Mobile:
- Compact navigation.
- Readable headings and body text.
- Full-width or appropriately sized buttons.
- Food cards arranged in one or two columns as space permits.
- No horizontal overflow.
- Touch-friendly interactive controls.

Test layouts at approximately 375px, 768px, 1024px, and 1440px viewport widths.

## 7. SEO and Accessibility

Implement:
- A descriptive page title: “Keretii Restaurant | Great Food and Memorable Dining.”
- A unique meta description that can be customized to reflect the restaurant's actual services and location.
- Open Graph metadata.
- Semantic HTML landmarks.
- Logical heading hierarchy.
- Descriptive image alt text.
- Keyboard-accessible navigation and gallery controls.
- Visible focus indicators.
- Sufficient color contrast.
- Optimized images and sensible loading behavior.

Do not add unsupported claims about awards, ratings, location, or popularity.

## 8. Suggested Project Structure

Organize the application into reusable components, for example:

- `app/page.tsx` — main homepage.
- `app/layout.tsx` — root layout and metadata.
- `app/globals.css` — global styles.
- `components/Navbar.tsx`
- `components/Hero.tsx`
- `components/About.tsx`
- `components/MenuSection.tsx`
- `components/MenuCard.tsx`
- `components/Highlights.tsx`
- `components/Gallery.tsx`
- `components/Testimonials.tsx`
- `components/ContactSection.tsx`
- `components/Footer.tsx`
- `data/menu.ts` — editable sample menu.
- `data/restaurant.ts` — editable restaurant information.
- `public/images/` — local image assets where appropriate.

You may adjust this structure if the project already uses a different organization.

## 9. Code Quality Requirements

- Write complete, working code rather than pseudocode.
- Use TypeScript types for menu items and restaurant information.
- Keep content separate from presentation.
- Avoid unnecessary dependencies.
- Do not introduce backend services.
- Do not leave nonfunctional buttons or broken navigation.
- Do not use placeholder links that silently lead nowhere.
- Add graceful image fallbacks where practical.
- Ensure the project builds without TypeScript, linting, or compilation errors.
- Keep components maintainable and easy for a beginner to understand.

## 10. Final Deliverables

Deliver:
1. A complete, polished static website.
2. All required source files and reusable components.
3. Responsive styling and working frontend interactions.
4. Editable sample menu and restaurant details.
5. Appropriate metadata and accessibility improvements.
6. Instructions for installing dependencies and running the website locally.
7. Instructions for building and deploying the website to Vercel or another static-compatible hosting platform.


### Restaurant Locations
Create a dedicated “Our Locations” section with attractive location cards for:

1. **Kicukiro Centre, Kicukiro District, Kigali, Rwanda**
2. **Kacyiru, Gasabo District, Kigali, Rwanda**

Important: Treat these as proposed locations until the restaurant confirms the exact addresses and operating branches. Keep location data editable.

Each location card should contain:
- Branch name and district.
- Restaurant or food photography.
- Full street address when verified.
- Opening hours when confirmed.
- Branch-specific telephone number when available.
- A “Get Directions” button linking to Google Maps.
- A “Call Us” button using the verified phone number.

### Google Maps Integration
Provide a map or map links so visitors can find each confirmed branch.

Use these configurable Google Maps search links until precise branch coordinates are available:

- Kicukiro Centre: https://www.google.com/maps/search/?api=1&query=Kicukiro+Centre%2C+Kigali%2C+Rwanda
- Kacyiru: https://www.google.com/maps/search/?api=1&query=Kacyiru%2C+Gasabo%2C+Kigali%2C+Rwanda

These links identify the areas, not verified restaurant premises. Replace them with exact branch locations when confirmed.

### Location Selector
Add a “Find Your Nearest Keretii” section that allows visitors to select a branch and view its available contact details and directions.

Use a simple, interactive branch selector. If only one location is confirmed, show only that location rather than implying that multiple branches are operational.

### Contact and Branding
Display Keretii Restaurant's brand name consistently throughout the website. Use a premium visual style, high-quality food photography, an appetizing menu, a welcoming About section, a gallery, and a clear contact area.

Keep menu items, prices, addresses, hours, telephone numbers, and social media profiles in a separate editable data file.

Do not invent restaurant addresses, branch-specific phone numbers, customer testimonials, opening hours, or menu prices.

Before finishing, inspect the complete implementation, test every navigation link and interactive feature, check mobile responsiveness, and resolve all errors.

**Final design goal:** Create a premium, welcoming, visually memorable website that makes visitors hungry, builds trust in Keretii Restaurant, and helps them discover the menu and contact the restaurant easily.

Prioritize visual quality, usability, performance, and maintainable code over unnecessary features.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6ce10da4-e83d-4c40-bcac-fa90b48ba739).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
