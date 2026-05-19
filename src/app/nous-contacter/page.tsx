import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description:
    "Contactez Equalizer Studio pour vos projets de communication à Madagascar. Photos, vidéos, voix off, évènementiel, hôtesses et team building.",
};

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
          fill="currentColor"
        />
      </svg>
    ),
    label: "Adresse",
    value: "Lot II A 122 FK Nanisana\nAntananarivo, Madagascar",
    href: undefined as string | undefined,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          fill="currentColor"
        />
      </svg>
    ),
    label: "Téléphone",
    value: "+261 34 64 931 98\n+261 32 25 407 73",
    href: "tel:+261346493198" as string | undefined,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          fill="currentColor"
        />
      </svg>
    ),
    label: "Email",
    value: "contact.equalizerstudio@gmail.com",
    href: "mailto:contact.equalizerstudio@gmail.com" as string | undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page hero ──────────────────────────────────── */}
      <section className="relative h-72 lg:h-80 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/first_image.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
            Parlons de votre projet
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
          >
            Contactez-nous
          </h1>
        </div>
      </section>

      {/* ── Main contact section ─────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact info sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              <div>
                <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
                  Nous joindre
                </p>
                <h2
                  className="font-display text-3xl lg:text-4xl font-light text-white mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
                >
                  Discutons de vos besoins
                </h2>
                <div className="divider-gold w-16 mb-6" aria-hidden="true" />
                <p className="text-muted text-sm leading-7">
                  Notre équipe est disponible pour répondre à toutes vos
                  questions et vous accompagner dans la réalisation de vos
                  projets de communication.
                </p>
              </div>

              {/* Contact details */}
              <address className="not-italic flex flex-col gap-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-gold">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-muted text-xs tracking-[0.2em] uppercase mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white text-sm leading-6 hover:text-gold transition-colors duration-200 whitespace-pre-line"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm leading-6 whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </address>

              {/* Service tags */}
              <div>
                <p className="text-muted text-xs tracking-[0.2em] uppercase mb-4">
                  Nos services
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Photos & Vidéos",
                    "Voix Off",
                    "Évènementiel",
                    "MC",
                    "Hôtesses",
                    "Team Building",
                  ].map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1.5 rounded-full border border-border text-muted text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-surface border border-border rounded-2xl p-8 lg:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────── */}
      <section
        className="bg-surface border-t border-border py-16"
        aria-label="Notre localisation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
              Où nous trouver
            </p>
            <h2
              className="font-display text-3xl sm:text-4xl font-light text-white"
              style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
            >
              Notre Localisation
            </h2>
          </div>

          <div className="bg-background border border-border rounded-xl overflow-hidden h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
                    fill="#0e8ec4"
                  />
                </svg>
              </div>
              <p className="text-white font-medium mb-1">Equalizer Studio</p>
              <p className="text-muted text-sm">
                Lot II A 122 FK Nanisana, Antananarivo
              </p>
              <a
                href="https://maps.google.com/?q=Nanisana+Antananarivo+Madagascar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-gold text-xs tracking-[0.2em] uppercase hover:underline"
              >
                Ouvrir dans Google Maps
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10L10 2M10 2H4M10 2V8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick call banner ────────────────────────────── */}
      <section className="bg-background border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-gold text-xs tracking-[0.35em] uppercase mb-2">
                Besoin urgent ?
              </p>
              <h3
                className="font-display text-2xl font-light text-white"
                style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
              >
                Appelez-nous directement
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="tel:+261346493198"
                className="flex items-center gap-3 px-6 py-3 border border-border text-white text-sm rounded-full hover:border-gold hover:text-gold transition-all duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                +261 34 64 931 98
              </a>
              <a
                href="tel:+261322540773"
                className="flex items-center gap-3 px-6 py-3 border border-border text-white text-sm rounded-full hover:border-gold hover:text-gold transition-all duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    fill="currentColor"
                  />
                </svg>
                +261 32 25 407 73
              </a>
              <a
                href="mailto:contact.equalizerstudio@gmail.com"
                className="flex items-center gap-3 px-6 py-3 bg-gold text-black font-semibold text-sm rounded-full hover:bg-gold-light transition-all duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    fill="currentColor"
                  />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



