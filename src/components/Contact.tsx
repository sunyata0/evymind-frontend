export const Contact = () => {
  return (
    <section id="contact" class="relative">
      <div class="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 class="mb-12 text-center text-3xl font-bold sm:text-4xl">Contact</h2>

        {/* Form */}
        <form class="space-y-6">
          {/* Name + Email */}
          <div class="grid gap-6 sm:grid-cols-2">
            <Field label="Your Name*" placeholder="Enter your name" type="text" required />
            <Field label="Your Email*" placeholder="Enter your email" type="email" required />
          </div>

          {/* License */}
          <Field label="Your License Number" placeholder="Enter your license number" type="text" />

          {/* Message */}
          <Field label="Message*" placeholder="Tell about your project" textarea required />

          {/* Submit */}
          <div class="flex justify-center pt-4">
            <button
              type="submit"
              class="bg-primary focus-visible:ring-primary inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(209,255,0,0.6),0_14px_40px_rgba(209,255,0,0.22)] transition hover:-translate-y-px hover:shadow-[0_0_0_1px_rgba(209,255,0,0.8),0_20px_55px_rgba(209,255,0,0.28)] focus-visible:ring-2 focus-visible:outline-none"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

type FieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
};

const Field = ({
  label,
  placeholder,
  type = "text",
  textarea = false,
  required = false,
}: FieldProps) => {
  const baseClasses =
    "w-full rounded-xl border border-primary/50 bg-surface/30 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 backdrop-blur transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40";

  return (
    <label class="text-text-primary flex flex-col gap-2 text-sm font-medium">
      {label}
      {textarea ? (
        <textarea rows={6} class={baseClasses} placeholder={placeholder} required={required} />
      ) : (
        <input type={type} class={baseClasses} placeholder={placeholder} required={required} />
      )}
    </label>
  );
};
