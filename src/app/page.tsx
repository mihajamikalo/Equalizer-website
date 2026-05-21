import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconVideocam,
  IconMic,
  IconEvent,
  IconRecordVoiceOver,
  IconPeople,
  IconGroups,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Equalizer Studio | Agence de Communication Professionnelle",
  description:
    "Equalizer Studio — Photos, vidéos, voix off, évènementiel, MC, hôtesses et team building à Madagascar depuis plus de 13 ans.",
};

const services = [
  {
    Icon: IconVideocam,
    title: "Photos & Vidéos",
    description:
      "5 ans d'expérience en production audiovisuelle pour une chaîne de télévision. Des campagnes de communication percutantes avec des supports visuels de haute qualité.",
    href: "/nos-services#photos-videos",
  },
  {
    Icon: IconMic,
    title: "Voix Off & Spot Audio",
    description:
      "12 ans de voix à notre actif. Un support indispensable pour vos spots vidéo, spots audio et présentations. Disponible en malagasy, français, anglais et italien.",
    href: "/nos-services#voix-off",
  },
  {
    Icon: IconEvent,
    title: "Évènementiel",
    description:
      "Chez Equalizer Studio, nous concevons et accompagnons vos événements avec une approche complète, professionnelle et terrain. De l’accueil des invités à l’animation, en passant par la coordination, la photo, la vidéo, le drone ou encore la voix off, notre équipe veille à créer une expérience fluide, élégante et mémorable.",
    href: "/nos-services#evenementiel",
  },
  {
    Icon: IconRecordVoiceOver,
    title: "MC & Animateur",
    description:
      "Un maître de cérémonie charismatique pour animer vos événements, conférences d'entreprise, galas et soirées de prestige.",
    href: "/nos-services#mc",
  },
  {
    Icon: IconPeople,
    title: "Hôtesses & Animatrices",
    description:
      "Accueil, check-in, remise de badge, orientation et passation de micro. Des professionnelles pour vos CHR, GMS, salons et conférences d'entreprise.",
    href: "/nos-hotesses",
  },
  {
    Icon: IconGroups,
    title: "Team Building",
    description:
      "Améliorez la cohésion de votre équipe. Des activités sur mesure pour fédérer vos collaborateurs autour des valeurs de votre entreprise.",
    href: "/nos-services#team-building",
  },
];

const stats = [
  { value: "13+", label: "Ans d'expérience" },
  { value: "4", label: "Langues disponibles" },
  { value: "100+", label: "Événements réalisés" },
  { value: "50+", label: "Clients satisfaits" },
];

const clients = [
  "Happy Mother Day 2024",
  "Passation de Directeurs — Logistique Pétrolière",
  "Salon de l'Auto 2022",
  "Odity",
  "Digitalisation Canon",
  "Lead Your Way Up",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Bienvenue chez Equalizer Studio"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/13.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#070d10]/70 via-[#070d10]/60 to-[#070d10]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#135a63]/20 via-transparent to-[#b28cfc]/10"
            aria-hidden="true"
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center py-32">
          <p className="animate-fade-up animation-delay-200 text-gold text-xs tracking-[0.35em] uppercase font-medium mb-6">
            Agence de Communication événementielle
          </p>
          <h1
            className="animate-fade-up animation-delay-400 font-display text-5xl sm:text-6xl lg:text-8xl font-light text-white leading-[1.1] mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
          >
            <span className="block">Soutenir</span>
            <span className="block text-gold-gradient italic">
              ceux qui veulent évoluer
            </span>
          </h1>
          <p className="animate-fade-up animation-delay-600 text-white/70 text-base sm:text-lg leading-8 max-w-2xl mx-auto mb-10">
            Depuis plus de 13 ans, Equalizer Studio accompagne les entreprises
            et les particuliers dans leurs projets de communication à Madagascar.
          </p>
          <div className="animate-fade-up animation-delay-800 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/nos-services"
              className="px-8 py-4 bg-gold text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,142,196,0.4)]"
            >
              Découvrir nos services
            </Link>
            <Link
              href="/nous-contacter"
              className="px-8 py-4 border border-white/30 text-white text-xs tracking-[0.2em] uppercase rounded-full hover:border-gold hover:text-gold transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-800"
          aria-hidden="true"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Défiler</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ── Stats bar ───────────────────────────────────── */}
      <section
        className="bg-surface border-y border-border py-12"
        aria-label="Nos chiffres clés"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <dt
                  className="font-display text-4xl lg:text-5xl font-light text-gold"
                  style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
                >
                  {stat.value}
                </dt>
                <dd className="text-muted text-xs tracking-[0.2em] uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────── */}
      <section className="section-padding bg-background" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
              Ce que nous faisons
            </p>
            <h2
              id="services-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white"
              style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
            >
              Nos Services
            </h2>
            <div className="divider-gold w-24 mx-auto mt-6" aria-hidden="true" />
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-hover group bg-surface border border-border rounded-xl p-8 flex flex-col gap-4 no-underline"
              >
                <span className="text-gold">
                  <service.Icon size={28} />
                </span>
                <h3 className="text-white font-semibold text-lg tracking-wide group-hover:text-gold transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-7 flex-1">
                  {service.description}
                </p>
                <span className="text-gold text-xs tracking-[0.2em] uppercase mt-2 group-hover:gap-3 flex items-center gap-2 transition-all duration-200">
                  En savoir plus
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/nos-services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold text-gold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold hover:text-black transition-all duration-300"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Portfolio preview ────────────────────────────── */}
      <section
        className="section-padding bg-surface"
        aria-labelledby="portfolio-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
              Nos réalisations
            </p>
            <h2
              id="portfolio-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white"
              style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
            >
              Portfolio
            </h2>
            <div className="divider-gold w-24 mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Featured image */}
            <div className="img-zoom lg:col-span-2 relative h-72 lg:h-96 rounded-xl overflow-hidden border border-border">
              <Image
                src="/first_image.png"
                alt="Equalizer Studio — Production audiovisuelle"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-gold text-xs tracking-[0.2em] uppercase">Production</span>
                <p className="text-white font-semibold text-lg mt-1">
                  Photos & Vidéos
                </p>
              </div>
            </div>

            {/* Second image */}
            <div className="img-zoom relative h-72 lg:h-96 rounded-xl overflow-hidden border border-border">
              <Image
                src="/12.png"
                alt="Equalizer Studio — Évènementiel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-gold text-xs tracking-[0.2em] uppercase">Événement</span>
                <p className="text-white font-semibold text-lg mt-1">
                  Évènementiel
                </p>
              </div>
            </div>

            {/* Album cover */}
            <div className="img-zoom relative h-72 rounded-xl overflow-hidden border border-border">
              <Image
                src="/album-cover.jpeg"
                alt="Equalizer Studio — Album cover"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-gold text-xs tracking-[0.2em] uppercase">Médias</span>
                <p className="text-white font-semibold text-lg mt-1">
                  Voix Off & Audio
                </p>
              </div>
            </div>

            {/* Text CTA card */}
            <div className="md:col-span-2 lg:col-span-2 bg-background border border-border rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  Voir plus
                </p>
                <h3
                  className="font-display text-3xl font-light text-white"
                  style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
                >
                  Explorez l&apos;ensemble de nos réalisations
                </h3>
              </div>
              <Link
                href="/album"
                className="shrink-0 px-8 py-4 bg-gold text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,142,196,0.4)]"
              >
                Voir le portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Clients ──────────────────────────────────────── */}
      <section
        className="section-padding bg-background"
        aria-labelledby="clients-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
              Ils nous ont fait confiance
            </p>
            <h2
              id="clients-heading"
              className="font-display text-4xl sm:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
            >
              Nos Références
            </h2>
            <div className="divider-gold w-24 mx-auto mt-6" aria-hidden="true" />
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0 mb-8"
            aria-label="Liste de clients et événements"
          >
            {clients.map((client) => (
              <li
                key={client}
                className="flex items-center gap-4 bg-surface border border-border rounded-lg px-6 py-5"
              >
                <span
                  className="w-2 h-2 rounded-full bg-gold shrink-0"
                  aria-hidden="true"
                />
                <span className="text-white/80 text-sm">{client}</span>
              </li>
            ))}
          </ul>

          <p className="text-center text-muted text-sm italic">
            ...et bien d&apos;autres clients et partenaires à travers Madagascar.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="relative py-24 overflow-hidden"
        aria-label="Contactez-nous"
      >
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/10.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#070d10]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d10] via-[#070d10]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-bl from-[#0e8ec4]/10 via-transparent to-[#135a63]/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
              Démarrez votre projet
            </p>
            <h2
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
            >
              Travaillons ensemble
            </h2>
            <p className="text-white/70 text-base leading-8 mb-10">
              Vous avez un projet en tête ? Contactez-nous dès aujourd&apos;hui
              pour discuter de vos besoins en communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/nous-contacter"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,142,196,0.4)]"
              >
                Nous contacter
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-xs tracking-[0.2em] uppercase rounded-full hover:border-gold hover:text-gold transition-all duration-300"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



