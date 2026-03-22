import Link from "next/link";
import {
  CreditCard,
  Wrench,
  Home,
  BookOpen,
  PawPrint,
  Car,
  Users,
  HelpCircle,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CreditCard,
  Wrench,
  Home,
  BookOpen,
  PawPrint,
  Car,
  Users,
  HelpCircle,
};

interface TenantHubCardProps {
  label: string;
  href: string;
  icon: string;
  description: string;
}

export function TenantHubCard({ label, href, icon, description }: TenantHubCardProps) {
  const Icon = iconMap[icon];

  return (
    <Link
      href={href}
      className="group rounded-2xl border border-border/50 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-3px_rgba(27,42,74,0.1),0_4px_6px_-4px_rgba(27,42,74,0.05)] hover:border-navy/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-200 group-hover:bg-amber/10 group-hover:text-amber-dark">
        {Icon && <Icon className="h-5 w-5" />}
      </div>
      <h3 className="text-base font-semibold text-heading mb-1">{label}</h3>
      <p className="text-sm text-muted-text leading-relaxed">{description}</p>
    </Link>
  );
}
