"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { sectors } from "@/data/sectors";

type Status = "idle" | "submitting" | "success";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const budgets = [
  "Under AED 100k",
  "AED 100k – 250k",
  "AED 250k – 500k",
  "AED 500k – 1M",
  "Over AED 1M",
];

export function ConsultationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form);
    const next: Errors = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) next.name = "Please enter your name.";
    if (!email) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!message || message.length < 10) {
      next.message = "Tell us a little about your project (10+ characters).";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(e.currentTarget);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    // Mock submission — wire to a backend / email service later.
    setTimeout(() => setStatus("success"), 1200);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center border border-bone/10 bg-onyx-2 p-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-onyx">
          <Check size={26} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-light text-bone">
          Thank you.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
          Your enquiry has reached our atelier. A member of the Eva team will be
          in touch within one business day to arrange your consultation.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full border-b border-bone/20 bg-transparent py-3 text-bone outline-none transition-colors placeholder:text-muted/60 focus:border-gold [&>option]:bg-onyx-2 [&>option]:text-bone";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className={cn(fieldClass, errors.name && "border-red-700/60")}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            className={cn(fieldClass, errors.email && "border-red-700/60")}
          />
        </Field>
        <Field label="Phone (optional)">
          <input
            name="phone"
            type="tel"
            placeholder="+971 ..."
            className={fieldClass}
          />
        </Field>
        <Field label="Sector of interest">
          <select name="sector" className={cn(fieldClass, "appearance-none")}>
            {sectors.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Indicative budget">
          <select name="budget" className={cn(fieldClass, "appearance-none")}>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Project location (optional)">
          <input
            name="location"
            type="text"
            placeholder="e.g. Palm Jumeirah"
            className={fieldClass}
          />
        </Field>
      </div>

      <Field label="Tell us about your project" error={errors.message}>
        <textarea
          name="message"
          rows={5}
          placeholder="A few words on your space, style and timeline..."
          className={cn(
            fieldClass,
            "resize-none",
            errors.message && "border-red-700/60",
          )}
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Request Consultation"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-muted">{label}</span>
      <div className="mt-2">{children}</div>
      {error && <span className="mt-1 block text-xs text-red-700">{error}</span>}
    </label>
  );
}
