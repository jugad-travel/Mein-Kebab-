import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceTagProps {
  price?: number;
  aConfirmer?: boolean;
  className?: string;
}

export function PriceTag({ price, aConfirmer, className }: PriceTagProps) {
  if (!price) return null;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="font-display text-3xl font-normal text-rouge-broche">
        {price.toFixed(2)} €
      </span>
      {aConfirmer && (
        <span
          className="flex items-center gap-1 text-xs text-blanc-pur/60"
          title="Prix à confirmer"
        >
          <AlertCircle className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">Prix à confirmer</span>
        </span>
      )}
    </div>
  );
}
