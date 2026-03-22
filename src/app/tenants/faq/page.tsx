import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BuyHomeCTA } from "@/components/sections/BuyHomeCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about renting from Murphy Rental Property Management in Milwaukee, WI.",
};

const faqs = [
  {
    q: "When is rent due?",
    a: "Rent is due on the 1st of each month.",
  },
  {
    q: "What happens if I pay late?",
    a: "A $35 late fee applies if rent is not received by the 5th. After that, a formal notice may be issued per Wisconsin law. If you know you\u2019ll be late, contact Lucas before the 5th \u2014 communication always helps.",
  },
  {
    q: "How do I submit a maintenance request?",
    a: "Use the online maintenance request form in the Tenant Hub. For emergencies, call Lucas directly.",
  },
  {
    q: "What counts as an emergency vs. routine maintenance?",
    a: "Emergencies: gas leaks, fire, burst pipes, flooding, no heat in winter, or anything posing an immediate safety risk. Everything else is routine and will be addressed within 24\u201348 hours.",
  },
  {
    q: "Will my rent go up?",
    a: "Our Rent Stability Promise: rent does not increase for good tenants who communicate proactively about maintenance issues, take care of the property, and pay on time. This is stated clearly \u2014 not buried in fine print.",
  },
  {
    q: "Can I have a pet?",
    a: "Please check the pet policy page for current details. The policy is clearly stated so there are no surprises.",
  },
  {
    q: "Can I sublease or add a roommate?",
    a: "Subleasing is not permitted without prior written consent. Adding an occupant requires a lease amendment \u2014 contact Lucas to discuss.",
  },
  {
    q: "What notice do I need to give to move out?",
    a: "28 days written notice before the end of your lease term.",
  },
  {
    q: "What happens at the end of my lease?",
    a: "We\u2019ll reach out before your lease expires to discuss renewal. If both parties agree, the lease renews under the same or updated terms.",
  },
  {
    q: "Who pays for utilities?",
    a: "Tenants are responsible for gas, electric, and internet. Water is [included/tenant responsibility \u2014 placeholder]. Set up utilities through We Energies and Milwaukee Water Works before move-in.",
  },
  {
    q: "Can I paint or make changes to the unit?",
    a: "Any modifications require prior written approval from Lucas. This includes painting, installing fixtures, or attaching anything to walls or exterior surfaces.",
  },
  {
    q: "What do I do if I\u2019m locked out?",
    a: `Call Lucas at ${SITE.phone}. There may be a lockout fee depending on the time and circumstances.`,
  },
  {
    q: "How do I reach Lucas in an emergency?",
    a: `Call ${SITE.phone} directly. For gas leaks, call We Energies first (800-261-5325) and evacuate. For fire, call 911 first.`,
  },
  {
    q: "What is the security deposit and how do I get it back?",
    a: "The security deposit equals one month\u2019s rent. It\u2019s returned within 21 days of move-out, minus deductions for damages beyond normal wear and tear, per Wisconsin ATCP 134.",
  },
  {
    q: "What is renters insurance and do I need it?",
    a: "Renters insurance covers your personal belongings and liability. It costs about $10\u2013$20/month. The lease recommends it but does not require it. We strongly encourage it.",
  },
  {
    q: "Where do I park?",
    a: "Each unit has an assigned off-street parking space. Guest parking is on the street only. No overnight street parking during snow emergencies.",
  },
  {
    q: "What day is trash pickup?",
    a: "Check the Parking & Trash page for your specific pickup day based on the Milwaukee DPW zone.",
  },
];

export default function FAQPage() {
  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-2">Frequently Asked Questions</h1>
      <p className="text-body mb-8">Quick answers to the most common questions.</p>

      <Accordion className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-xl border border-border/50 px-5 data-[state=open]:border-navy/10 data-[state=open]:shadow-[0_4px_14px_rgba(27,42,74,0.04)]"
          >
            <AccordionTrigger className="text-sm font-semibold text-heading text-left py-4 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-body leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12">
        <BuyHomeCTA />
      </div>
    </div>
  );
}
