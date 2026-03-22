import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center py-24">
      <div className="text-center max-w-md px-4">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy/5 text-navy">
            <Home className="h-8 w-8" />
          </div>
        </div>
        <h1 className="text-4xl font-normal mb-3">Page Not Found</h1>
        <p className="text-body mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center bg-amber hover:bg-amber-dark text-navy font-semibold rounded-full px-8 text-sm shadow-[0_2px_8px_rgba(212,168,83,0.3)] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Go Home
          </Link>
          <Link
            href="/tenants"
            className="inline-flex h-10 items-center justify-center rounded-full px-8 text-sm font-medium border border-navy/20 text-navy hover:bg-navy/5 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Tenant Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
