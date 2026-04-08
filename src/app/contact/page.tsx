import type { Metadata } from "next";
import FormspreeForm from "@/components/ui/FormspreeForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FRANCESCA. Fine Jewelry in Carlsbad, CA. We'd love to hear from you.",
};

const formFields = [
  { name: "name", label: "Full Name", type: "text" as const, required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone Number", type: "tel" as const, required: false },
  { name: "message", label: "Message", type: "textarea" as const, required: true, placeholder: "How can we help?" },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-narrow text-center">
          <h1 className="font-cormorant font-light text-4xl md:text-5xl mb-4">
            Contact Us
          </h1>
          <p className="text-muted max-w-lg mx-auto">
            We&apos;d love to hear from you. Reach out to start a conversation.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal>
              <FormspreeForm
                fields={formFields}
                formSource="contact"
                submitLabel="Send Message"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-cormorant text-xl mb-3">Email</h3>
                    <a
                      href="mailto:hello@francescadiamonds.com"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      hello@francescadiamonds.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl mb-3">Phone</h3>
                    <a
                      href="tel:+17605551234"
                      className="text-muted hover:text-accent transition-colors"
                    >
                      (760) 555-1234
                    </a>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl mb-3">Location</h3>
                    <p className="text-muted">Carlsbad, CA 92008</p>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl mb-3">Hours</h3>
                    <p className="text-muted">By Appointment Only</p>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="aspect-[4/3] relative mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53594.23844488655!2d-117.39!3d33.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc73579ab20fb5%3A0x4e6e7e5e2c5f4c8!2sCarlsbad%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Francesca location in Carlsbad, CA"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
