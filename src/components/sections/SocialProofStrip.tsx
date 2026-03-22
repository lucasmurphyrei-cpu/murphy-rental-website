import { Award, MapPin, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    label: "Milwaukee-Based",
    detail: "Local landlord, local investment",
  },
  {
    icon: Award,
    label: "Licensed Realtor\u00AE",
    detail: "Wisconsin licensed professional",
  },
  {
    icon: ShieldCheck,
    label: "Fair Housing Committed",
    detail: "Equal opportunity for all",
  },
];

export function SocialProofStrip() {
  return (
    <section className="py-10 border-y border-border/50 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-muted-text uppercase tracking-widest mb-6">
          Proudly serving Milwaukee renters
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 text-center sm:text-left"
            >
              <stat.icon className="h-5 w-5 text-navy/40" />
              <div>
                <p className="text-sm font-semibold text-heading">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-text">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
