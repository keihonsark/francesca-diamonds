"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { configuratorSteps } from "@/data/configurator";

export default function DesignPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Filter steps based on conditionals
  const activeSteps = configuratorSteps.filter((step) => {
    if (!step.conditional) return true;
    const parentValue = selections[step.conditional.step];
    return parentValue && step.conditional.values.includes(parentValue);
  });

  const step = activeSteps[currentStep];
  const isNotesStep = step?.key === "notes";
  const isSummaryStep = step?.key === "summary";

  const handleSelect = (value: string) => {
    setSelections((prev) => ({ ...prev, [step.key]: value }));
    // Auto-advance after selection
    if (currentStep < activeSteps.length - 1) {
      setTimeout(() => setCurrentStep((c) => c + 1), 300);
    }
  };

  const goToStep = useCallback(
    (stepKey: string) => {
      const idx = activeSteps.findIndex((s) => s.key === stepKey);
      if (idx >= 0) setCurrentStep(idx);
    },
    [activeSteps]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append("form_source", "configurator");
    formData.append("selections", JSON.stringify(selections));
    formData.append("notes", notes);

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
      <div className="pt-32 section-padding">
        <div className="container-narrow text-center">
          <h1 className="font-cormorant font-light text-4xl md:text-5xl mb-4">
            Thank You
          </h1>
          <p className="text-muted max-w-md mx-auto">
            We&apos;ve received your custom design inquiry. Our team will review
            your selections and reach out within 24 hours to begin bringing your
            vision to life.
          </p>
        </div>
      </div>
    );
  }

  if (!step) return null;


  return (
    <>
      <section className="pt-32 pb-8">
        <div className="container-narrow text-center">
          <h1 className="font-cormorant font-light text-4xl md:text-5xl mb-4">
            Design Your Piece
          </h1>
          <p className="text-muted max-w-lg mx-auto">
            Walk through our guided process to share your vision.
          </p>
        </div>
      </section>

      {/* Progress Stepper */}
      <section className="pb-8">
        <div className="container-narrow">
          <div className="flex items-center justify-center gap-1 overflow-x-auto pb-2">
            {activeSteps.map((s, i) => (
              <button
                key={s.key}
                onClick={() => {
                  if (i <= currentStep || selections[s.key]) setCurrentStep(i);
                }}
                className={`flex items-center gap-1 ${
                  i <= currentStep || selections[s.key]
                    ? "cursor-pointer"
                    : "cursor-default"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs transition-colors ${
                    i === currentStep
                      ? "bg-accent text-white"
                      : i < currentStep || selections[s.key]
                      ? "bg-foreground text-white"
                      : "bg-card text-muted"
                  }`}
                >
                  {i + 1}
                </div>
                {i < activeSteps.length - 1 && (
                  <div
                    className={`w-4 md:w-8 h-[1px] ${
                      i < currentStep ? "bg-foreground" : "bg-card"
                    }`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="section-padding pt-0">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Left: Image */}
            <div className="aspect-[4/5] relative overflow-hidden bg-card">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: Options */}
            <div>
              <h2 className="font-cormorant font-light text-2xl md:text-3xl mb-2">
                {step.title}
              </h2>
              <p className="text-sm text-muted mb-8">{step.subtitle}</p>

              {isNotesStep ? (
                <div>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share any additional details about your dream piece — inspiration, specific details, timelines..."
                    rows={6}
                    className="w-full bg-transparent border border-foreground/20 p-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                  <div className="flex gap-4 mt-6">
                    {currentStep > 0 && (
                      <button
                        onClick={() => setCurrentStep((c) => c - 1)}
                        className="btn-secondary"
                      >
                        Back
                      </button>
                    )}
                    <button
                      onClick={() => setCurrentStep((c) => c + 1)}
                      className="btn-primary"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              ) : isSummaryStep ? (
                <div>
                  {/* Summary Cards */}
                  <div className="space-y-3 mb-8">
                    {activeSteps
                      .filter((s) => s.key !== "summary" && s.key !== "notes")
                      .map((s) => {
                        const selected = selections[s.key];
                        if (!selected) return null;
                        const option = s.options.find(
                          (o) => o.value === selected
                        );
                        return (
                          <button
                            key={s.key}
                            onClick={() => goToStep(s.key)}
                            className="flex items-center justify-between w-full bg-card p-3 hover:bg-card/80 transition-colors text-left"
                          >
                            <div>
                              <span className="text-[10px] uppercase tracking-[0.08em] text-muted">
                                {s.title}
                              </span>
                              <p className="text-sm font-medium mt-0.5">
                                {option?.label || selected}
                              </p>
                            </div>
                            <span className="text-xs text-accent">Edit</span>
                          </button>
                        );
                      })}
                    {notes && (
                      <button
                        onClick={() => goToStep("notes")}
                        className="flex items-center justify-between w-full bg-card p-3 hover:bg-card/80 transition-colors text-left"
                      >
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.08em] text-muted">
                            Additional Notes
                          </span>
                          <p className="text-sm mt-0.5 line-clamp-1">{notes}</p>
                        </div>
                        <span className="text-xs text-accent">Edit</span>
                      </button>
                    )}
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-cormorant text-xl mb-4">
                      Your Contact Information
                    </h3>
                    <div className="space-y-4">
                      <input
                        name="name"
                        placeholder="Full Name"
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
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                      />
                      <textarea
                        name="message"
                        placeholder="Any final thoughts..."
                        rows={3}
                        className="w-full bg-transparent border-b border-foreground/20 py-2 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>
                    <div className="flex gap-4 mt-6">
                      <button
                        type="button"
                        onClick={() => setCurrentStep((c) => c - 1)}
                        className="btn-secondary"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary disabled:opacity-50"
                      >
                        {loading ? "Submitting..." : "Submit Inquiry"}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-2 gap-3">
                    {step.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(option.value)}
                        className={`group text-left transition-all ${
                          selections[step.key] === option.value
                            ? "ring-2 ring-accent"
                            : "hover:shadow-md"
                        }`}
                      >
                        <div className="aspect-[4/3] relative overflow-hidden bg-card">
                          <Image
                            src={option.image}
                            alt={option.label}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 40vw, 20vw"
                          />
                        </div>
                        <p className="text-xs text-center py-2 uppercase tracking-[0.08em]">
                          {option.label}
                        </p>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    {currentStep > 0 && (
                      <button
                        onClick={() => setCurrentStep((c) => c - 1)}
                        className="btn-secondary"
                      >
                        Back
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
