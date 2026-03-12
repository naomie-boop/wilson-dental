import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/20 bg-white/10 backdrop-blur-xl"
      style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.2)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <a href="#hero" className="flex items-center gap-2">
              <Image src="/logo-icon.png" alt="Wilson Dental" width={32} height={32} className="h-8 w-8" />
              <Image src="/logo-horizontal.png" alt="Wilson Dental" width={120} height={35} className="h-7 w-auto" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cabinet dentaire libéral au cœur de Levallois-Perret. Des soins
              d&apos;excellence dans un cadre moderne et apaisant.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Soins</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground sm:mt-4 sm:space-y-3">
              <li><a href="#services" className="transition-colors hover:text-primary">Soins conservateurs</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Dentisterie pédiatrique</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Parodontologie</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Chirurgie & Implantologie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Cabinet</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground sm:mt-4 sm:space-y-3">
              <li><a href="#about" className="transition-colors hover:text-primary">À propos</a></li>
              <li><a href="#team" className="transition-colors hover:text-primary">L&apos;équipe</a></li>
              <li><a href="#testimonials" className="transition-colors hover:text-primary">Témoignages</a></li>
              <li><a href="#contact" className="transition-colors hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground sm:mt-4 sm:space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>57 rue du Président Wilson, 92300 Levallois-Perret</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+33147375316" className="transition-colors hover:text-primary">+33 1 47 37 53 16</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:cabinet.wilson.dental@gmail.com" className="break-all transition-colors hover:text-primary">cabinet.wilson.dental@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:mt-12 sm:flex-row sm:pt-8">
          <p className="text-xs text-muted-foreground sm:text-sm">
            © {new Date().getFullYear()} Wilson Dental. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground sm:gap-6 sm:text-sm">
            <a href="#" className="transition-colors hover:text-primary">Mentions légales</a>
            <a href="#" className="transition-colors hover:text-primary">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
