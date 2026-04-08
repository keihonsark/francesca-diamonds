import type { Metadata } from "next";
import DiamondSearch from "@/components/diamonds/DiamondSearch";

export const metadata: Metadata = {
  title: "Diamond Search",
  description:
    "Search thousands of certified natural and lab-grown diamonds. Find the perfect stone for your custom piece at FRANCESCA.",
};

export default function DiamondsPage() {
  return (
    <>
      <section className="pt-32 pb-8">
        <div className="container-narrow text-center">
          <h1 className="font-cormorant font-light text-4xl md:text-5xl mb-4">
            Diamond Search
          </h1>
          <p className="text-muted max-w-lg mx-auto">
            Search our curated selection of certified diamonds. Each stone has been
            evaluated for quality and value.
          </p>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-narrow">
          <DiamondSearch />
        </div>
      </section>
    </>
  );
}
