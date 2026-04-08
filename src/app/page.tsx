"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ui/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  { name: "Aurelia Solitaire Ring", category: "Rings", image: "/images/products/ring-1.svg" },
  { name: "Luna Pendant Necklace", category: "Necklaces", image: "/images/products/necklace-1.svg" },
  { name: "Seraphina Tennis Bracelet", category: "Bracelets", image: "/images/products/bracelet-1.svg" },
  { name: "Celeste Drop Earrings", category: "Earrings", image: "/images/products/earring-1.svg" },
];

const instagramImages = [
  "/images/lifestyle/insta-1.svg",
  "/images/lifestyle/insta-2.svg",
  "/images/lifestyle/insta-3.svg",
  "/images/lifestyle/insta-4.svg",
  "/images/lifestyle/insta-5.svg",
  "/images/lifestyle/insta-6.svg",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const heroImage = heroImageRef.current;
    if (!hero || !heroImage) return;

    // Hero text animation
    const tl = gsap.timeline();
    tl.fromTo(
      hero.querySelectorAll(".hero-animate"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.3, ease: "power2.out" }
    );

    // Parallax
    gsap.to(heroImage, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div ref={heroImageRef} className="absolute inset-0 -top-20">
          <div className="w-full h-[120%] bg-card relative">
            <Image
              src="/images/hero/hero-main.svg"
              alt="Fine jewelry by Francesca"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-foreground/20" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <h1 className="hero-animate font-cormorant font-light text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] uppercase opacity-0">
            FRANCESCA.
          </h1>
          <p className="hero-animate font-cormorant font-light text-lg md:text-xl mt-4 tracking-wide opacity-0">
            Fine jewelry designed around you.
          </p>
          <div className="hero-animate mt-8 opacity-0">
            <Link href="/collection" className="btn-primary bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-accent hover:border-accent">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="section-padding">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl text-center mb-12">
              The Collection
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.1}>
                <Link href="/collection" className="group block">
                  <div className="aspect-square relative overflow-hidden bg-card">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="font-cormorant text-lg">{product.name}</h3>
                    <span className="text-xs uppercase tracking-[0.1em] text-muted mt-1 inline-block">
                      Inquire
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/lifestyle/custom-design.svg"
                  alt="Custom jewelry design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="font-cormorant font-light text-3xl md:text-4xl mb-6">
                  Your vision, our craft.
                </h2>
                <p className="text-muted leading-relaxed mb-8">
                  From the first sketch to the final polish, we bring your dream piece to life.
                  Every detail is considered, every stone hand-selected. This is jewelry as personal
                  as your story.
                </p>
                <Link href="/design" className="btn-primary">
                  Start Designing
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Diamond Search Banner */}
      <section className="py-16 md:py-24">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl mb-4">
              Find your perfect diamond.
            </h2>
            <p className="text-muted mb-8 max-w-md mx-auto">
              Search thousands of certified diamonds to find the one that speaks to you.
            </p>
            <Link href="/diamonds" className="btn-secondary">
              Search Diamonds
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal>
              <div className="order-2 md:order-1">
                <p className="text-muted leading-relaxed mb-6">
                  Born from a love of timeless design and the California coast, FRANCESCA. creates
                  fine jewelry that celebrates life&apos;s most meaningful moments. Based in Carlsbad,
                  we offer a deeply personal experience — by appointment only — because every client
                  deserves our full attention.
                </p>
                <Link href="/about" className="text-sm uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors border-b border-foreground hover:border-accent pb-0.5">
                  Our Story
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="aspect-[4/5] relative overflow-hidden order-1 md:order-2">
                <Image
                  src="/images/lifestyle/about-teaser.svg"
                  alt="Francesca jewelry studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="section-padding">
        <div className="container-narrow text-center mb-8">
          <ScrollReveal>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl mb-2">
              Follow Along
            </h2>
            <a
              href="https://instagram.com/francescadiamonds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              @francescadiamonds
            </a>
          </ScrollReveal>
        </div>
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {instagramImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <a
                  href="https://instagram.com/francescadiamonds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block aspect-square relative overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt="Francesca on Instagram"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
