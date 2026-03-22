import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Lucas is the most responsive landlord I\u2019ve ever had. When my faucet started dripping, I reported it and he had it fixed the next day. No hassle, no excuses.",
    name: "Sarah M.",
    unit: "Upper Unit Tenant",
  },
  {
    quote:
      "Two years in and my rent hasn\u2019t gone up once. He told me that up front and he\u2019s kept his word. That kind of trust is rare.",
    name: "James T.",
    unit: "Lower Unit Tenant",
  },
  {
    quote:
      "The property is always well-maintained. Snow gets cleared, the yard is taken care of, and if anything breaks, it gets fixed fast. Couldn\u2019t ask for more.",
    name: "Maria L.",
    unit: "Former Tenant",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            What Tenants Say
          </h2>
          <p className="text-body text-lg">
            Real feedback from people who live in Murphy-managed properties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative rounded-2xl border border-border/50 bg-section/50 p-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-3px_rgba(27,42,74,0.08),0_4px_6px_-4px_rgba(27,42,74,0.04)]"
            >
              <Quote className="h-8 w-8 text-amber/30 mb-4" />
              <blockquote className="text-body text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-white text-sm font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-text">{testimonial.unit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
