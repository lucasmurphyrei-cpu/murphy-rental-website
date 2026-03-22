interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-white via-hero-gradient to-section py-16 lg:py-20 border-b border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {badge && (
          <span className="inline-block text-sm font-medium text-navy-light bg-navy/5 rounded-full px-4 py-1.5 tracking-wide mb-4">
            {badge}
          </span>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-body max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
