"use client";

import { Clock, X } from "lucide-react";
import { infos, type Hours } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hours() {
  const today = new Date().toLocaleDateString("fr-FR", { weekday: "long" });
  const now = new Date();
  const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

  const getDayStatus = (dayHours: Hours) => {
    if (dayHours.closed) {
      return { status: "closed", label: "Fermé" };
    }

    if (!dayHours.open || !dayHours.close) {
      return { status: "unknown", label: "—" };
    }

    const [openHour, openMin] = dayHours.open.split(":").map(Number);
    const [closeHour, closeMin] = dayHours.close.split(":").map(Number);
    const openTime = openHour * 60 + openMin;
    const closeTime = closeHour * 60 + closeMin;
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const isToday = dayHours.day.toLowerCase() === today.toLowerCase();
    const isOpen = isToday && currentMinutes >= openTime && currentMinutes < closeTime;

    return {
      status: isOpen ? "open" : "closed",
      label: isOpen ? "Ouvert" : "Fermé",
      hours: `${dayHours.open} - ${dayHours.close}`,
    };
  };

  return (
    <div className="rounded-2xl border border-gris-ardoise bg-gris-ardoise/50 p-6">
      <div className="mb-4 flex items-center gap-2">
        <Clock className="h-5 w-5 text-rouge-broche" aria-hidden="true" />
        <h3 className="font-display text-2xl text-blanc-pur">Horaires</h3>
      </div>
      <ul className="space-y-2" role="list">
        {infos.hours.map((dayHours) => {
          const status = getDayStatus(dayHours);
          const isToday = dayHours.day.toLowerCase() === today.toLowerCase();

          return (
            <li
              key={dayHours.day}
              className={cn(
                "flex items-center justify-between rounded-lg px-3 py-2",
                isToday && "bg-rouge-broche/10"
              )}
              role="listitem"
            >
              <span
                className={cn(
                  "font-medium capitalize",
                  isToday ? "text-rouge-broche" : "text-blanc-pur/80"
                )}
              >
                {dayHours.day}
                {isToday && (
                  <span className="ml-2 text-xs text-rouge-broche">(Aujourd'hui)</span>
                )}
              </span>
              <div className="flex items-center gap-2">
                {dayHours.closed ? (
                  <span className="flex items-center gap-1 text-sm text-blanc-pur/60">
                    <X className="h-4 w-4" aria-hidden="true" />
                    Fermé
                  </span>
                ) : (
                  <>
                    <span className="text-sm text-blanc-pur/80">
                      {dayHours.open} - {dayHours.close}
                    </span>
                    {status.status === "open" && (
                      <span className="rounded-full bg-rouge-broche px-2 py-0.5 text-xs font-medium text-blanc-pur">
                        Ouvert
                      </span>
                    )}
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      {infos.hours.some((h) => h.note) && (
        <p className="mt-4 text-sm text-blanc-pur/60">
          {infos.hours.find((h) => h.note)?.note}
        </p>
      )}
    </div>
  );
}

