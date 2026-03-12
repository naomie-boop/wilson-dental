import { Lightbulb, Heart, Smile } from "lucide-react";

const values = [
  { icon: Lightbulb, label: "Innovation", desc: "Imprimante 3D, scanner, caméra optique, studio photo" },
  { icon: Heart, label: "Proximité", desc: "On ne refuse jamais un patient, urgences acceptées" },
  { icon: Smile, label: "Convivialité", desc: "Un cadre chaleureux pour toute la famille" },
];

export default function ValueBanner() {
  return (
    <section className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {values.map((v) => (
            <div
              key={v.label}
              className="flex items-start gap-4 rounded-2xl border border-white/25 bg-white/12 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 sm:flex-col sm:items-center sm:text-center"
              style={{ boxShadow: "0 4px 24px -6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)" }}
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/20 bg-primary/15 text-primary backdrop-blur-md sm:h-12 sm:w-12">
                <v.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground sm:text-base">{v.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
