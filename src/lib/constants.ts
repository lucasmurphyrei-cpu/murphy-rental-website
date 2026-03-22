export const SITE = {
  name: "Murphy Rental Property Management",
  shortName: "Murphy Rentals",
  domain: "murphyrentalpropertymanagement.com",
  url: "https://www.murphyrentalpropertymanagement.com",
  owner: "Lucas Murphy",
  title: "Licensed Wisconsin Realtor\u00AE",
  phone: "414-533-8364",
  email: "Murphyrentalpropertymanagement@gmail.com",
  license: "WI Realtor\u00AE License #XXXXX", // placeholder
  realEstateSite: "https://www.lucasmurphyrealestate.com",
} as const;

export const PROPERTY = {
  address: "3463 N 98th Street",
  city: "Milwaukee",
  state: "WI",
  zip: "53222",
  fullAddress: "3463 N 98th Street, Milwaukee, WI 53222",
  type: "Duplex",
  units: ["Unit A (Upper)", "Unit B (Lower)"],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Available Units", href: "/available" },
  { label: "How to Apply", href: "/how-to-apply" },
  { label: "Tenant Hub", href: "/tenants" },
  { label: "Buy a Home", href: "/buy" },
] as const;

export const TENANT_NAV_LINKS = [
  { label: "Pay Rent", href: "/tenants/pay-rent", icon: "CreditCard" },
  { label: "Maintenance", href: "/tenants/maintenance", icon: "Wrench" },
  { label: "Property Care", href: "/tenants/property-care", icon: "Home" },
  { label: "Resources", href: "/tenants/resources", icon: "BookOpen" },
  { label: "Pet Policy", href: "/tenants/pet-policy", icon: "PawPrint" },
  { label: "Parking & Trash", href: "/tenants/parking", icon: "Car" },
  { label: "Community Standards", href: "/tenants/quiet-hours", icon: "Users" },
  { label: "FAQ", href: "/tenants/faq", icon: "HelpCircle" },
] as const;

export const FORMSPREE = {
  waitlist: process.env.NEXT_PUBLIC_FORMSPREE_WAITLIST || "placeholder",
  inquiry: process.env.NEXT_PUBLIC_FORMSPREE_INQUIRY || "placeholder",
  maintenance: process.env.NEXT_PUBLIC_FORMSPREE_MAINTENANCE || "placeholder",
  buyer: process.env.NEXT_PUBLIC_FORMSPREE_BUYER || "placeholder",
  contact: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT || "placeholder",
} as const;

export const EMERGENCY_CONTACTS = {
  gasLeak: { name: "We Energies", phone: "800-261-5325" },
  fire: { name: "Emergency Services", phone: "911" },
  powerOutage: { name: "We Energies", phone: "800-261-5325" },
  waterWorks: { name: "Milwaukee Water Works", phone: "414-286-2830" },
  city311: { name: "Milwaukee 311", phone: "414-286-2489" },
} as const;
