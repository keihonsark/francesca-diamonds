import type { Metadata } from "next";
import FormspreeForm from "@/components/ui/FormspreeForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lumière Fine Jewelry. We'd love to hear from you.",
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
              <div className="space-y-8">
                <div>
                  <h3 className="font-cormorant text-xl mb-3">Email</h3>
                  <a
                    href="mailto:hello@lumiere.com"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    hello@lumiere.com
                  </a>
                </div>
                <div>
                  <h3 className="font-cormorant text-xl mb-3">Hours</h3>
                  <p className="text-muted">By Appointment Only</p>
                </div>
                <div>
                  <h3 className="font-cormorant text-xl mb-3">Social</h3>
                  <a
                    href="https://instagram.com/lumierejewelry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent transition-colors"
                  >
                    @lumierejewelry
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
