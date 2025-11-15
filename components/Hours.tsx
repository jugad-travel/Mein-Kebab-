"use client";

import { Clock, X, CheckCircle2 } from "lucide-react";
import { infos, type Hours } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Card } from "./primitives/Card";
import { Heading } from "./primitives/Heading";
import { Icon } from "./primitives/Icon";

export function Hours() {
  const today = new Date().toLocaleDateString("fr-FR", { weekday: "long" });
  const now = new Date();

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
    <Card>
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-14 bg-rouge-broche/20 p-3">
          <Icon icon={Clock} size="xl" className="text-rouge-broche" />
        </div>
      </div>
      <ul className="space-y-3" role="list">
        {infos.hours.map((dayHours, index) => {
          const status = getDayStatus(dayHours);
          const isToday = dayHours.day.toLowerCase() === today.toLowerCase();

          return (
            <motion.li
              key={dayHours.day}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={cn(
                "flex items-center justify-between rounded-14 border-2 border-gris-ardoise/20 px-4 py-3 transition-all duration-300",
                isToday
                  ? "border-rouge-broche/50 bg-gradient-to-r from-rouge-broche/20 to-rouge-broche/10"
                  : "bg-gris-ardoise/10 hover:border-gris-ardoise-light"
              )}
              role="listitem"
            >
              <span
                className={cn(
                  "font-bold text-base",
                  isToday ? "text-rouge-broche" : "text-blanc-pur/90"
                )}
              >
                <span className="capitalize">{dayHours.day}</span>
                {isToday && (
                  <span className="ml-2 text-xs font-normal text-rouge-broche/70">
                    (Aujourd'hui)
                  </span>
                )}
              </span>
              <div className="flex items-center gap-3">
                {dayHours.closed ? (
                  <span className="flex items-center gap-2 rounded-full bg-gris-ardoise px-3 py-1 text-xs font-semibold text-blanc-pur/60">
                    <X className="h-3 w-3" aria-hidden="true" />
                    Fermé
                  </span>
                ) : (
                  <>
                    <span className="text-base font-semibold text-blanc-pur/80">
                      {dayHours.open} - {dayHours.close}
                    </span>
                    {status.status === "open" && (
                      <span className="flex items-center gap-2 rounded-full bg-rouge-broche px-3 py-1 text-xs font-bold text-blanc-pur">
                        <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                        Ouvert
                      </span>
                    )}
                  </>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
      {infos.hours.some((h) => h.note) && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 rounded-14 bg-rouge-broche/10 p-4 text-sm text-blanc-pur/70"
        >
          {infos.hours.find((h) => h.note)?.note}
        </motion.p>
      )}
    </Card>
  );
}
