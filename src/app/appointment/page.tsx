import type { Metadata } from "next";
import FormspreeForm from "@/components/ui/FormspreeForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule a private consultation at our studio or virtually. By appointment only — we dedicate our full attention to every client.",
};

const formFields = [
  { name: "name", label: "Full Name", type: "text" as const, required: true },
  { name: "email", label: "Email Address", type: "email" as const, required: true },
  { name: "phone", label: "Phone Number", type: "tel" as const, required: false },
  { name: "preferred_date", label: "Preferred Date", type: "date" as const, required: false },
  {
    name: "appointment_type",
    label: "Appointment Type",
    type: "select" as const,
    required: true,
    options: ["Consultation", "Custom Design", "Diamond Viewing", "Other"],
  },
  { name: "message", label: "Message", type: "textarea" as const, required: false, placeholder: "Tell us about what you're looking for..." },
];

export default function AppointmentPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="container-narrow text-center">
          <h1 className="font-cormorant font-light text-4xl md:text-5xl mb-4">
            Book an Appointment
          </h1>
          <p className="text-muted max-w-lg mx-auto">
            By appointment only — we dedicate our full attention to every client.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal>
              <FormspreeForm
                fields={formFields}
                formSource="appointment"
                submitLabel="Request Appointment"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-card p-8">
                <h3 className="font-cormorant text-xl mb-4">Visit Us</h3>
                <div className="space-y-3 text-sm text-muted">
                  <p>
                    Contact us to schedule a private consultation at our studio
                    or virtually.
                  </p>
                  <p>By Appointment Only</p>
                  <p>
                    <a
                      href="mailto:hello@lumiere.com"
                      className="hover:text-accent transition-colors"
                    >
                      hello@lumiere.com
                    </a>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
