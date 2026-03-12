import { MapPin, Phone, Mail, Instagram, Star, CreditCard } from "lucide-react";
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
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Innovation · Proximité · Convivialité
            </p>
            <div className="mt-3 flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-foreground">4.8/5</span>
              <span className="text-xs text-muted-foreground">— ~60 avis Google</span>
            </div>
            <a
              href="https://www.instagram.com/docdav_/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
              @docdav_
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Soins</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground sm:mt-4 sm:space-y-3">
              <li><a href="#services" className="transition-colors hover:text-primary">Chirurgie & Implantologie</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Parodontologie</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Pédodontie</a></li>
              <li><a href="#services" className="transition-colors hover:text-primary">Soins & Esthétique</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Infos pratiques</h4>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground sm:mt-4 sm:space-y-3">
              <li><a href="#team" className="transition-colors hover:text-primary">L&apos;équipe (5 praticiens)</a></li>
              <li><a href="#cabinet" className="transition-colors hover:text-primary">Le cabinet</a></li>
              <li className="flex items-center gap-1.5">
                <CreditCard className="h-3.5 w-3.5 text-primary" />
                Paiement en plusieurs fois
              </li>
              <li>🇫🇷 🇬🇧 🇪🇸 Français · English · Español</li>
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
                <a href="tel:+33147375316" className="transition-colors hover:text-primary">01 47 37 53 16</a>
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
