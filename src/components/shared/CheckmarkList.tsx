import { Check } from "lucide-react";

interface CheckmarkListProps {
  items: string[];
}

export function CheckmarkList({ items }: CheckmarkListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10 mt-0.5">
            <Check className="h-3.5 w-3.5 text-success" />
          </span>
          <span className="text-body text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}
