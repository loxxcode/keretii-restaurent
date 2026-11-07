import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import {
  About, BackToTop, Contact, Footer, Gallery, Hero, Highlights, Locations, MenuSection, Testimonials,
} from "@/components/site/Sections";

const title = "Keretii Restaurant | Great Food and Memorable Dining";
const description =
  "Keretii Restaurant in Kigali — explore the menu, gallery and branch locations, and plan your visit.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Highlights />
        <Gallery />
        <Testimonials />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
