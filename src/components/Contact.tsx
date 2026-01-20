import type { TargetedEvent, TargetedSubmitEvent } from "preact";
import { useState } from "react";

type ContactPayload = {
  name: string;
  email: string;
  license?: string;
  message: string;
};

export const Contact = () => {
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    email: "",
    license: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: TargetedEvent<HTMLInputElement | HTMLTextAreaElement, Event>) => {
    const { name, value } = e.currentTarget;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: TargetedSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      setForm({
        name: "",
        email: "",
        license: "",
        message: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" class="relative">
      <div class="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <h2 class="mb-12 text-center text-3xl font-bold sm:text-4xl">Contact</h2>

        {success ? (
          <div class="border-primary/40 bg-primary/10 text-text-primary rounded-xl border px-6 py-4 text-center text-sm">
            Thanks for reaching out! We’ll get back to you shortly.
          </div>
        ) : (
          <form class="space-y-6" onSubmit={onSubmit}>
            {/* Name + Email */}
            <div class="grid gap-6 sm:grid-cols-2">
              <Field
                label="Your Name*"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={onChange}
                required
              />
              <Field
                label="Your Email*"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            {/* License */}
            <Field
              label="Your License Number"
              name="license"
              placeholder="Enter your license number"
              value={form.license}
              onChange={onChange}
            />

            {/* Message */}
            <Field
              label="Message*"
              name="message"
              placeholder="Tell us about your project"
              value={form.message}
              onChange={onChange}
              textarea
              required
            />

            {error && <p class="text-center text-sm text-red-400">{error}</p>}

            {/* Submit */}
            <div class="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                class={`bg-primary inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-black transition ${
                  loading
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer shadow-[0_0_0_1px_rgba(209,255,0,0.6),0_14px_40px_rgba(209,255,0,0.22)] hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(209,255,0,0.8),0_20px_55px_rgba(209,255,0,0.28)]"
                }`}
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  value?: string | undefined;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  onChange: (e: TargetedEvent<HTMLTextAreaElement | HTMLInputElement, Event>) => void;
};

const Field = ({
  label,
  name,
  placeholder,
  value,
  type = "text",
  textarea = false,
  required = false,
  onChange,
}: FieldProps) => {
  const baseClasses =
    "w-full rounded-xl border border-primary/50 bg-surface/30 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 backdrop-blur transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <label class="text-text-primary flex flex-col gap-2 text-sm font-medium">
      {label}
      {textarea ? (
        <textarea
          name={name}
          rows={6}
          class={baseClasses}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          name={name}
          type={type}
          class={baseClasses}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  );
};
