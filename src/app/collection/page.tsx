"use client";

import { useState } from "react";
import Image from "next/image";
import { products, Product } from "@/data/products";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categories = ["All", "Rings", "Necklaces", "Bracelets", "Earrings"];
const metals = ["All", "Yellow Gold", "White Gold", "Rose Gold", "Platinum"];

function InquiryModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      await fetch("https://formspree.io/f/xpqodbdv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2">
          <div className="aspect-square relative bg-card">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-6 md:p-8">
            <button
              onClick={onClose}
              className="float-right text-muted hover:text-foreground text-xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>
            <span className="text-xs uppercase tracking-[0.08em] text-muted">
              {product.category} &middot; {product.metal}
            </span>
            <h3 className="font-cormorant text-2xl mt-2 mb-3">
              {product.name}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              {product.description}
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <h4 className="font-cormorant text-xl mb-2">Thank You</h4>
                <p className="text-sm text-muted">
                  We&apos;ll be in touch about this piece soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="form_source"
                  value="collection_inquiry"
                />
                <input type="hidden" name="product" value={product.name} />
                <div className="space-y-4">
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows={3}
                    className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary mt-6 w-full text-center disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Inquire About This Piece"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollectionPage() {
  const [category, setCategory] = useState("All");
  const [metal, setMetal] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = products.filter((p) => {
    if (category !== "All" && p.category !== category) return false;
    if (metal !== "All" && p.metal !== metal) return false;
    return true;
  });

  return (
    <>
      <section className="pt-32 pb-8">
        <div className="container-narrow text-center">
          <h1 className="font-cormorant font-light text-4xl md:text-5xl mb-4">
            The Collection
          </h1>
          <p className="text-muted max-w-lg mx-auto">
            Each piece is crafted with intention. Inquire to learn more or begin
            your custom journey.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container-narrow">
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs uppercase tracking-[0.08em] text-muted mr-2">
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-xs uppercase tracking-[0.08em] px-3 py-1.5 transition-colors ${
                    category === cat
                      ? "bg-foreground text-white"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs uppercase tracking-[0.08em] text-muted mr-2">
                Metal:
              </span>
              {metals.map((m) => (
                <button
                  key={m}
                  onClick={() => setMetal(m)}
                  className={`text-xs uppercase tracking-[0.08em] px-3 py-1.5 transition-colors ${
                    metal === m
                      ? "bg-foreground text-white"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding pt-8">
        <div className="container-narrow">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.05}>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="group block text-left w-full"
                >
                  <div className="aspect-square relative overflow-hidden bg-card">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] uppercase tracking-[0.1em] text-muted">
                      {product.category}
                    </span>
                    <h3 className="font-cormorant text-lg mt-0.5">
                      {product.name}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.1em] text-accent mt-1 inline-block group-hover:text-hover transition-colors">
                      Inquire
                    </span>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted py-16">
              No pieces match your filters. Try adjusting your selection.
            </p>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <InquiryModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
