import type { Metadata } from "next";
import { Thermometer, Droplets, CookingPot, Home, AlertTriangle, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Property Care Guide",
  description: "Seasonal tips and maintenance guidelines for Murphy rental tenants in Milwaukee, WI.",
};

const sections = [
  {
    icon: Thermometer,
    title: "Winter / Seasonal Care (Milwaukee)",
    items: [
      "Keep thermostat at minimum 65\u00B0F at all times, even when away",
      "Report any frozen or slow-draining pipes immediately",
      "Do not block heating vents or radiators",
      "Know where your unit\u2019s main water shutoff is located",
      "Snow and ice removal responsibilities per lease agreement",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing",
    items: [
      "Do not flush wipes, paper towels, or feminine products",
      "Do not pour grease down drains",
      "Report any drips or slow drains immediately \u2014 small leaks become big repairs",
    ],
  },
  {
    icon: CookingPot,
    title: "Appliances",
    items: [
      "Refrigerator coil cleaning (annually)",
      "Dryer lint trap \u2014 clean after every load (fire hazard)",
      "Dishwasher filter cleaning (monthly)",
      "Range hood filter (monthly)",
    ],
  },
  {
    icon: Home,
    title: "Exterior",
    items: [
      "Do not attach anything to exterior without written permission",
      "Keep entryway and porch clear",
      "Report any damage to gutters, siding, or windows promptly",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Smoke & CO Detectors",
    items: [
      "Test monthly",
      "Report malfunctions immediately \u2014 do not remove batteries",
      "Replacement is landlord\u2019s responsibility when reported",
    ],
  },
];

export default function PropertyCarePage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-2">Property Care Guide</h1>
      <p className="text-body mb-8">Taking care of the property protects your home, your deposit, and helps keep your rent stable.</p>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-border/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <section.icon className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold">{section.title}</h2>
            </div>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-body">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div className="mt-8 rounded-xl bg-success/5 border border-success/10 p-5 flex items-start gap-3">
        <Shield className="h-5 w-5 text-success shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-heading mb-1">A Reminder</p>
          <p className="text-sm text-body leading-relaxed">
            If you notice something, say something. Early reports protect the property, protect your security deposit, and help keep your rent stable. We are not here to penalize proactive tenants \u2014 we reward them.
          </p>
        </div>
      </div>
    </div>
  );
}
