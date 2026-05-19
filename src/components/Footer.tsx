import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/nos-services", label: "Nos Services" },
  { href: "/nos-hotesses", label: "Hôtesses & Animatrices" },
  { href: "/album", label: "Portfolio" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/nous-contacter", label: "Contact" },
];

const services = [
  "Photos & Vidéos",
  "Voix Off / Spot Audio",
  "Évènementiel",
  "MC / Animateur",
  "Hôtesses & Animatrices",
  "Team Building",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group"
              aria-label="Equalizer Studio — Accueil"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-gold/30 group-hover:ring-gold/60 transition-all duration-300">
                <Image
                  src="/logo-light.jpeg"
                  alt="Equalizer Studio"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-white font-semibold text-lg tracking-[0.15em] uppercase">
                Equalizer Studio
              </span>
            </Link>
            <p className="text-muted text-sm leading-7 max-w-xs">
              Votre partenaire de confiance en communication professionnelle à
              Madagascar depuis plus de 13 ans.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted text-sm hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              Nos Services
            </h3>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {services.map((service) => (
                <li key={service} className="text-muted text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-5">
              Contactez-nous
            </h3>
            <address className="not-italic flex flex-col gap-3">
              <p className="text-muted text-sm leading-6">
                Lot II A 122 FK Nanisana
                <br />
                Antananarivo, Madagascar
              </p>
              <a
                href="tel:+261346493198"
                className="text-muted text-sm hover:text-gold transition-colors duration-200"
              >
                +261 34 64 931 98
              </a>
              <a
                href="tel:+261322540773"
                className="text-muted text-sm hover:text-gold transition-colors duration-200"
              >
                +261 32 25 407 73
              </a>
              <a
                href="mailto:contact.equalizerstudio@gmail.com"
                className="text-muted text-sm hover:text-gold transition-colors duration-200 break-all"
              >
                contact.equalizerstudio@gmail.com
              </a>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold" aria-hidden="true" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-muted text-xs">
            © {year} Equalizer Studio. Tous droits réservés.
          </p>
          <p className="text-muted text-xs">
            Antananarivo, Madagascar
          </p>
        </div>
      </div>
    </footer>
  );
}



