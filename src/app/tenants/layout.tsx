import { TenantSidebar } from "@/components/layout/TenantSidebar";

export default function TenantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <div className="flex gap-10">
        <TenantSidebar />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}
