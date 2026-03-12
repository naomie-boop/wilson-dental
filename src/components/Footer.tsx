import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <a href="#hero" className="flex items-center gap-2">
              <Image
                src="/logo-icon.png"
                alt="Wilson Dental"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <Image
                src="/logo-horizontal.png"
                alt="Wilson Dental"
                width={120}
                height={35}
                className="h-7 w-auto"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cabinet dentaire libéral au cœur de Levallois-Perret. Des soins
              d&apos;excellence dans un cadre moderne et apaisant.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Soins</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground sm:mt-4 sm:space-y-3">
              <li><a href="#services" className="hover:text-primary transition-colors">Soins conservateurs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Esthétique dentaire</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Implantologie</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Parodontologie</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Dentisterie pédiatrique</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Cabinet</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground sm:mt-4 sm:space-y-3">
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">L&apos;équipe</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
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
                <a href="tel:+33147375316" className="hover:text-primary transition-colors">
                  01 47 37 53 16
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:cabinet.wilson.dental@gmail.com" className="hover:text-primary transition-colors break-all">
                  cabinet.wilson.dental@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:mt-12 sm:flex-row sm:pt-8">
          <p className="text-xs text-muted-foreground sm:text-sm">
            © {new Date().getFullYear()} Wilson Dental. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground sm:gap-6 sm:text-sm">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
