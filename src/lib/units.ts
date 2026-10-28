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
  /** Fair-housing carve-out that must accompany the pet policy wherever it is shown. */
  assistance_animal_notice: string;
  /** The uniform-application notice that must accompany the screening standards. */
  uniform_application_notice: string;
  /** Source of the square-footage figure and the not-guaranteed caveat (Wis. Stat. 452.136(1)). */
  measurement_notice: string;
  showing_notice: string;
  /** Absent when the unit has no showing to book. */
  showing_url?: string;
  move_in_funds_notice: string;
  /** Absent entirely on an occupied unit — it is pricing. */
  move_in_total?: string;
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

/**
 * Screening standards are property-level, not per-unit: every unit publishes the
 * same list. Read them from here rather than retyping them in a page — the wording
 * is fair-housing sensitive and a second copy is where it drifts.
 *
 * Throws rather than returning an empty list. /how-to-apply renders a "Qualification
 * Standards" heading, "your application will be denied if you do not meet the
 * following standards" and a footnote promising the standards are applied equally;
 * with nothing in between, that page makes a fair-housing claim about standards it
 * does not show. A failed build is the better outcome. The list is matched across
 * units rather than read off `units[0]`, so reordering units.json cannot change it.
 */
/**
 * The showing step is property-level process, same for every unit, and the packet prints the
 * identical sentence from `showing_notice`. Read it from here so the two cannot diverge.
 */
export function getShowingNotice(): string {
  const n = units[0]?.showing_notice;
  if (!n) throw new Error("units.json has no showing_notice — re-run engines/packet/export_website.py");
  return n;
}

/** The booking link for a unit's showing, or null when there is nothing to book. */
export function getShowingUrl(slug: string): string | null {
  return getUnit(slug)?.showing_url || null;
}

export function getScreeningStandards(): string[] {
  const fix = "Re-run engines/packet/export_website.py to regenerate src/data/units.json.";
  if (units.length === 0) {
    throw new Error(`getScreeningStandards(): src/data/units.json has no units. ${fix}`);
  }
  const empty = units.find((u) => !u.quals || u.quals.length === 0);
  if (empty) {
    throw new Error(
      `getScreeningStandards(): unit "${empty.slug}" publishes no qualification standards. ${fix}`,
    );
  }
  const [first, ...rest] = units;
  const key = (u: Unit) => u.quals.join("\u0000");
  const disagreeing = rest.find((u) => key(u) !== key(first));
  if (disagreeing) {
    throw new Error(
      `getScreeningStandards(): units "${first.slug}" and "${disagreeing.slug}" publish ` +
        `different qualification standards, so there is no single property-level list ` +
        `to show. Make them identical in each unit.json, then ${fix}`,
    );
  }
  return first.quals;
}

/** Every unit's display name, in unit.json order — the one source for unit labels. */
export function getUnitLabels(): string[] {
  return units.map((u) => u.unit_label);
}
