import { Shield, Wrench, Heart, Home } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fair Rent Promise",
    description:
      "We price units fairly from day one and keep increases reasonable. Good tenants who take care of the property will always pay below what comparable nearby units charge.",
  },
  {
    icon: Wrench,
    title: "Responsive Maintenance",
    description:
      "Report an issue and hear back within 24 hours. Emergency? Call Lucas directly, day or night.",
  },
  {
    icon: Heart,
    title: "Milwaukee Community",
    description:
      "Lucas lives and works in Milwaukee. He\u2019s invested in the neighborhood and cares about the people in his properties.",
  },
  {
    icon: Home,
    title: "Well-Maintained Property",
    description:
      "Regular upkeep, seasonal prep, and proactive improvements keep the property in great condition year-round.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Why Rent From Lucas
          </h2>
          <p className="text-body text-lg">
            Fair, transparent, and locally rooted property management in Milwaukee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-border/50 bg-white p-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-3px_rgba(27,42,74,0.1),0_4px_6px_-4px_rgba(27,42,74,0.05)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-200 group-hover:bg-amber/10 group-hover:text-amber-dark">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm text-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
