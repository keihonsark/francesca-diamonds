import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story behind Lumière — a boutique fine jewelry house specializing in custom designs and ethically sourced diamonds.",
};

const values = [
  {
    title: "Craftsmanship",
    description:
      "Every piece is meticulously crafted by hand, honoring traditional techniques while embracing modern design. We believe in quality that lasts generations.",
  },
  {
    title: "Personal Service",
    description:
      "By appointment only, we dedicate our full attention to every client. Your journey with us is as special as the piece we create together.",
  },
  {
    title: "Ethically Sourced",
    description:
      "We are committed to responsible sourcing. Every diamond and gemstone is traceable, conflict-free, and selected with care for both beauty and integrity.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container-narrow text-center">
          <h1 className="font-cormorant font-light text-4xl md:text-5xl mb-4">
            Our Story
          </h1>
          <p className="text-muted max-w-lg mx-auto">
            Where intention meets artistry.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-cormorant font-light text-3xl mb-6">
                  A Different Kind of Jeweler
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Lumi&egrave;re was founded on a simple belief: that fine jewelry
                    should be as unique as the person who wears it. We are a boutique
                    jewelry house specializing in custom designs and ethically sourced
                    diamonds, creating pieces that celebrate life&apos;s most meaningful
                    moments.
                  </p>
                  <p>
                    Every engagement ring, every necklace, every pair of earrings begins
                    as a conversation — between your vision and our craft. We don&apos;t
                    believe in one-size-fits-all, and we never will.
                  </p>
                  <p>
                    We work by appointment only because we believe you deserve more than
                    a transactional experience. When you work with us, you&apos;re not
                    just a customer — you&apos;re a collaborator. Together, we create
                    something that tells your story.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/lifestyle/glow-by-sea.png"
                  alt="Lumière jewelry studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <ScrollReveal>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl text-center mb-12">
              What We Stand For
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <div className="text-center">
                  <h3 className="font-cormorant text-xl mb-3">{value.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <h2 className="font-cormorant font-light text-3xl md:text-4xl mb-4">
              Let&apos;s Create Together
            </h2>
            <p className="text-muted max-w-md mx-auto mb-8">
              We&apos;d love to hear your story and help bring your vision to life.
              Book an appointment at our studio.
            </p>
            <Link href="/appointment" className="btn-primary">
              Book an Appointment
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
