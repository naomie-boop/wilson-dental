import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <span className="text-lg font-bold text-white">W</span>
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">Wilson</span>
                <span className="text-xl font-light text-primary"> Dental</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cabinet dentaire libéral au cœur de Levallois-Perret. Des soins
              d&apos;excellence dans un cadre moderne et apaisant.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Soins</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Soins conservateurs</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Esthétique dentaire</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Implantologie</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Parodontologie</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Dentisterie pédiatrique</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Cabinet</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">L&apos;équipe</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                57 rue du Président Wilson, 92300 Levallois-Perret
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:+33147375316" className="hover:text-primary transition-colors">
                  01 47 37 53 16
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:cabinet.wilson.dental@gmail.com" className="hover:text-primary transition-colors">
                  cabinet.wilson.dental@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wilson Dental. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
