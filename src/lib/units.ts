import data from "@/data/units.json";
import type { Photo } from "@/components/units/PhotoGallery";

export interface Unit {
  slug: string;
  unit_label: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  beds: string;
  baths: string;
  sqft: string;
  status: string;
  /** Absent entirely on an occupied unit. */
  rent?: string;
  /** Absent entirely on an occupied unit. */
  deposit?: string;
  lease_term: string;
  available_long: string;
  available_short: string;
  available_label: string;
  utilities_tenant: string;
  utilities_landlord: string;
  pet_policy: string;
  features: string[];
  nearby: string;
  app_fee: string;
  quals: string[];
  photos: Photo[];
  hero: Photo;
  floorplan: Photo | null;
}

const units = (data as { units: Unit[] }).units;

export function getAllUnits(): Unit[] {
  return units;
}

export function getVacantUnits(): Unit[] {
  return units.filter((u) => u.status === "vacant");
}

export function getUnit(slug: string): Unit | undefined {
  return units.find((u) => u.slug === slug);
}
