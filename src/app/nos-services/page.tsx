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
import type { ComponentType, SVGProps } from "react";

export const metadata: Metadata = {
  title: "Nos Services",
  description:
    "Découvrez l'ensemble des services d'Equalizer Studio : photos & vidéos, voix off, évènementiel, MC, hôtesses et team building à Madagascar.",
};

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const services: {
  id: string;
  Icon: IconComponent;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}[] = [
  {
    id: "photos-videos",
    Icon: IconVideocam,
    title: "Photos & Vidéos",
    tagline: "5 ans à travailler pour une chaîne de télévision",
    description:
      "Que serait une campagne de communication sans supports visuels ? Equalizer Studio vous propose des productions photo et vidéo de haute qualité pour vos campagnes publicitaires, lancements de produits, reportages d'entreprise et bien plus encore. Notre expérience en production audiovisuelle professionnelle garantit un résultat à la hauteur de vos ambitions.",
    features: [
      "Tournage & réalisation vidéo",
      "Photographie professionnelle",
      "Montage et post-production",
      "Spot publicitaire TV & réseaux sociaux",
      "Couverture d'événements",
    ],
    image: "/first_image.png",
  },
  {
    id: "voix-off",
    Icon: IconMic,
    title: "Voix Off & Spot Audio",
    tagline: "12 ans de voix à notre actif",
    description:
      "La voix est un support obligatoire pour tous vos besoins de communication — que ce soit sur un spot vidéo, un spot audio ou même pendant une présentation. Avec 12 ans d'expérience, notre équipe vous propose des voix professionnelles dans quatre langues pour toucher un public plus large et renforcer l'impact de vos messages.",
    features: [
      "Version Malagasy",
      "Version Française",
      "Version Anglaise",
      "Version Italienne",
      "Spots radio & TV",
      "Voix pour présentations",
    ],
    image: "/album-cover.jpeg",
  },
  {
    id: "evenementiel",
    Icon: IconEvent,
    title: "Évènementiel",
    tagline: "Début à la radio, près de 13 ans d'expérience",
    description:
      "L'évènementiel, c'est notre passion. Indispensable pour vos ouvertures officielles, mariages, conférences et lancements de grande envergure — notre équipe donne le rythme et l'énergie nécessaires durant toute la programmation. Nous gérons chaque détail pour que votre événement soit mémorable.",
    features: [
      "Ouvertures officielles & inaugurations",
      "Mariages & cérémonies",
      "Conférences d'entreprise",
      "Lancements de produits (CHR, GMS)",
      "Galas & soirées de prestige",
      "Séminaires & ateliers",
    ],
    image: "/12.png",
  },
  {
    id: "mc",
    Icon: IconRecordVoiceOver,
    title: "MC & Animateur",
    tagline: "Le chef d'orchestre de vos événements",
    description:
      "Un maître de cérémonie professionnel fait toute la différence. Notre animateur charismatique et expérimenté saura tenir votre audience en haleine, gérer les transitions et donner à votre événement le rythme et la dynamique qu'il mérite. Il est celui qui transforme un événement ordinaire en un moment inoubliable.",
    features: [
      "Animation de galas & soirées",
      "Maître de cérémonie pour mariages",
      "Animation de conférences",
      "Présentateur de lancements",
      "Gestion du timing & transitions",
    ],
    image: "/18.png",
  },
  {
    id: "hotesses",
    Icon: IconPeople,
    title: "Hôtesses & Animatrices de Ventes",
    tagline: "L'excellence de l'accueil professionnel",
    description:
      "Nos hôtesses et animatrices de ventes sont sélectionnées et formées pour représenter votre marque avec professionnalisme et élégance. Que ce soit pour un salon professionnel, un lancement de produit ou une conférence d'entreprise, elles assurent un accueil irréprochable et une animation dynamique.",
    features: [
      "Accueil & check-in",
      "Remise de badges",
      "Orientation des participants",
      "Passation de micro en plénière",
      "Animation de stands (CHR, GMS)",
      "Promotion & démonstration de produits",
    ],
    image: "/15.png",
  },
  {
    id: "team-building",
    Icon: IconGroups,
    title: "Team Building",
    tagline: "Renforcez la cohésion de votre équipe",
    description:
      "L'objectif principal d'un team building est l'amélioration de la cohésion interne de l'équipe participante. Il s'agit de fédérer les membres d'un groupe autour des valeurs de leur entreprise, de les inciter à participer et à coopérer entre eux et à renforcer leur esprit d'équipe. Nous concevons des programmes sur mesure adaptés à votre culture d'entreprise.",
    features: [
      "Activités de cohésion sur mesure",
      "Ateliers créatifs & jeux de rôles",
      "Challenges sportifs & outdoor",
      "Animation & facilitation",
      "Évaluation & restitution",
    ],
    image: "/9.png",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page hero ──────────────────────────────────── */}
      <section className="relative h-72 lg:h-96 flex items-end overflow-hidden">
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
            className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-12 w-full">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
            Ce que nous proposons
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
          >
            Nos Services
          </h1>
        </div>
      </section>

      {/* ── Services list ──────────────────────────────── */}
      <div className="bg-background">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 1 ? "bg-surface" : "bg-background"}`}
            aria-labelledby={`service-${service.id}-heading`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold">
                      <service.Icon size={22} />
                    </span>
                    <span className="text-gold text-xs tracking-[0.25em] uppercase">
                      {service.tagline}
                    </span>
                  </div>
                  <h2
                    id={`service-${service.id}-heading`}
                    className="font-display text-4xl lg:text-5xl font-light text-white mb-6"
                    style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-muted text-base leading-8 mb-8">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 list-none m-0 p-0">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-white/80 text-sm"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/nous-contacter"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    Demander un devis
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Image */}
                <div
                  className={`img-zoom relative h-72 lg:h-96 rounded-xl overflow-hidden border border-border ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`Equalizer Studio — ${service.title}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-surface border-t border-border py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
            Prêt à démarrer ?
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
          >
            Votre projet mérite le meilleur
          </h2>
          <p className="text-muted text-base leading-8 mb-10">
            Contactez-nous pour discuter de vos besoins et obtenir un devis
            personnalisé. Notre équipe est à votre disposition.
          </p>
          <Link
            href="/nous-contacter"
            className="inline-flex items-center px-10 py-4 bg-gold text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,142,196,0.4)]"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </>
  );
}



