import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, Calendar } from "lucide-react";

interface UnitCardProps {
  name: string;
  status: "available" | "occupied" | "coming-soon";
  rent: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  availableDate?: string;
  features: string[];
  imageUrl?: string;
}

const statusConfig = {
  available: { label: "Available Now", className: "bg-success/10 text-success border-success/20" },
  occupied: { label: "Currently Occupied", className: "bg-muted text-muted-foreground border-border" },
  "coming-soon": { label: "Coming Soon", className: "bg-amber/10 text-amber-dark border-amber/20" },
};

export function UnitCard({
  name,
  status,
  rent,
  bedrooms,
  bathrooms,
  sqft,
  availableDate,
  features,
  imageUrl,
}: UnitCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <div className="rounded-2xl border border-border/50 bg-white overflow-hidden shadow-[0_4px_14px_rgba(27,42,74,0.06)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_-3px_rgba(27,42,74,0.1),0_4px_6px_-4px_rgba(27,42,74,0.05)]">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageUrl || "https://placehold.co/600x400/1B2A4A/D4A853?text=Unit+Photo"}
          alt={`${name} interior`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
        <Badge className={`absolute top-4 left-4 ${statusInfo.className} border font-medium`}>
          {statusInfo.label}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">{name}</h3>
          <div className="text-right">
            <p className="text-2xl font-bold text-navy">{rent}</p>
            <p className="text-xs text-muted-text">/month</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 text-sm text-body">
          <div className="flex items-center gap-1.5">
            <Bed className="h-4 w-4 text-navy/40" />
            <span>{bedrooms} Bed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-navy/40" />
            <span>{bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-navy/40" />
            <span>{sqft} sq ft</span>
          </div>
        </div>

        {availableDate && (
          <div className="flex items-center gap-1.5 text-sm text-amber-dark">
            <Calendar className="h-4 w-4" />
            <span>Available {availableDate}</span>
          </div>
        )}

        {/* Features */}
        <ul className="space-y-1.5">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-body">
              <span className="h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
