"use client";

import { useState, FormEvent } from "react";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "date" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface FormspreeFormProps {
  fields: FormField[];
  formSource: string;
  submitLabel?: string;
  className?: string;
}

export default function FormspreeForm({
  fields,
  formSource,
  submitLabel = "Submit",
  className = "",
}: FormspreeFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

  if (submitted) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <h3 className="font-cormorant text-2xl mb-2">Thank You</h3>
        <p className="text-muted text-sm">
          We&apos;ve received your message and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input type="hidden" name="form_source" value={formSource} />
      <div className="space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-xs uppercase tracking-[0.08em] text-muted mb-2"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select...</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
              />
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary mt-8 w-full text-center disabled:opacity-50"
      >
        {loading ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
