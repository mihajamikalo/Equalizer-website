import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconHowToReg,
  IconBadge,
  IconAssistantDirection,
  IconSettingsVoice,
  IconStorefront,
  IconAutoAwesome,
} from "@/components/Icons";
import type { ComponentType, SVGProps } from "react";

export const metadata: Metadata = {
  title: "Hôtesses & Animatrices",
  description:
    "Equalizer Studio met à votre disposition des hôtesses et animatrices professionnelles pour vos événements, salons, conférences et promotions à Madagascar.",
};

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const missions: { Icon: IconComponent; title: string; description: string }[] = [
  {
    Icon: IconHowToReg,
    title: "Accueil & Check-in",
    description:
      "Nos hôtesses assurent un accueil chaleureux et professionnel à l'entrée de vos événements, salons et conférences.",
  },
  {
    Icon: IconBadge,
    title: "Remise de Badges",
    description:
      "Gestion efficace de la remise de badges, programmes et supports de communication pour vos participants.",
  },
  {
    Icon: IconAssistantDirection,
    title: "Orientation",
    description:
      "Guidage et orientation des participants vers les différents espaces de votre événement avec le sourire.",
  },
  {
    Icon: IconSettingsVoice,
    title: "Passation de Micro",
    description:
      "Lors des séances questions/réponses en plénière, nos hôtesses assurent la passation de micro avec discrétion et efficacité.",
  },
  {
    Icon: IconStorefront,
    title: "Animation de Ventes",
    description:
      "Présentation et promotion de vos produits en CHR, GMS et grandes surfaces. Nos animatrices dynamisent vos ventes.",
  },
  {
    Icon: IconAutoAwesome,
    title: "Promotion de Produits",
    description:
      "Démonstration et promotion de vos nouveaux produits lors de vos lancements et événements commerciaux.",
  },
];

const advantages = [
  "Sélection rigoureuse et formation professionnelle",
  "Présentation soignée et tenue adaptée à votre événement",
  "Polyvalentes : malagasy, français, anglais",
  "Expérience dans les grands événements et salons",
  "Disponibilité flexible selon vos besoins",
  "Suivi personnalisé par notre équipe",
];

const contexts = [
  {
    title: "Conférences d'entreprise",
    description:
      "Accueil des participants, check-in, remise de badges et passation de micro lors des sessions plénières.",
    image: "/first_image.png",
  },
  {
    title: "Salons & Expositions",
    description:
      "Animation de stands, présentation de produits et accueil des visiteurs pour maximiser votre visibilité.",
    image: "/second_image.png",
  },
  {
    title: "Lancements de Produits",
    description:
      "Démonstration dynamique et promotion de vos nouveaux produits en CHR, GMS et points de vente.",
    image: "/album-cover.jpeg",
  },
];

export default function HotessesPage() {
  return (
    <>
      {/* ── Page hero ──────────────────────────────────── */}
      <section className="relative h-72 lg:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/10.png"
            alt=""
            fill
            className="object-cover object-top"
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
            Equalizer Booking
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
          >
            Hôtesses & Animatrices
          </h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────── */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
                Equalizer Booking
              </p>
              <h2
                className="font-display text-4xl lg:text-5xl font-light text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
              >
                Des professionnelles à votre service
              </h2>
              <div className="divider-gold w-16 mb-8" aria-hidden="true" />
              <div className="flex flex-col gap-5 text-muted text-base leading-8">
                <p>
                  Vous souhaitez faire un lancement de grande envergure ? Que
                  ce soit en CHR, GMS ou pour un événement d&apos;entreprise,
                  Equalizer Studio vous propose des animatrices de ventes et
                  hôtesses soigneusement sélectionnées.
                </p>
                <p>
                  Nos hôtesses interviennent lors de l&apos;accueil et du
                  check-in, assurent la remise de badges, l&apos;orientation des
                  participants et la passation de micro en plénière pendant
                  les sessions questions/réponses de vos conférences
                  d&apos;entreprise.
                </p>
                <p>
                  Professionnalisme, élégance et sourire sont les maîtres mots
                  de notre équipe d&apos;hôtesses.
                </p>
              </div>

              <Link
                href="/nous-contacter"
                className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-gold text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,142,196,0.4)]"
              >
                Réserver des hôtesses
              </Link>
            </div>

            <div className="img-zoom relative h-80 lg:h-[500px] rounded-xl overflow-hidden border border-border">
              <Image
                src="/16.png"
                alt="Hôtesses Equalizer Studio en action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Missions ────────────────────────────────────── */}
      <section
        className="section-padding bg-surface"
        aria-labelledby="missions-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
              Ce qu&apos;elles font
            </p>
            <h2
              id="missions-heading"
              className="font-display text-4xl sm:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
            >
              Leurs Missions
            </h2>
            <div className="divider-gold w-24 mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission) => (
              <div
                key={mission.title}
                className="card-hover bg-background border border-border rounded-xl p-8 flex flex-col gap-4"
              >
                <span className="text-gold">
                  <mission.Icon size={24} />
                </span>
                <h3 className="text-white font-semibold text-lg">
                  {mission.title}
                </h3>
                <p className="text-muted text-sm leading-7">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contexts ────────────────────────────────────── */}
      <section
        className="section-padding bg-background"
        aria-labelledby="contexts-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
              Nos interventions
            </p>
            <h2
              id="contexts-heading"
              className="font-display text-4xl sm:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
            >
              Où interviennent-elles ?
            </h2>
            <div className="divider-gold w-24 mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contexts.map((context) => (
              <article
                key={context.title}
                className="card-hover bg-surface border border-border rounded-xl overflow-hidden"
              >
                <div className="img-zoom relative h-52">
                  <Image
                    src={context.image}
                    alt={`Equalizer Studio hôtesses — ${context.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-base mb-3">
                    {context.title}
                  </h3>
                  <p className="text-muted text-sm leading-7">
                    {context.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ──────────────────────────────────────── */}
      <section
        className="section-padding bg-surface"
        aria-labelledby="advantages-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="img-zoom relative h-80 rounded-xl overflow-hidden border border-border order-2 lg:order-1">
              <Image
                src="/album-cover.jpeg"
                alt="Equalizer Studio — équipe d'hôtesses professionnelles"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
                Nos atouts
              </p>
              <h2
                id="advantages-heading"
                className="font-display text-4xl lg:text-5xl font-light text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
              >
                Pourquoi choisir Equalizer Booking ?
              </h2>
              <div className="divider-gold w-16 mb-8" aria-hidden="true" />

              <ul className="flex flex-col gap-4 list-none m-0 p-0">
                {advantages.map((advantage) => (
                  <li
                    key={advantage}
                    className="flex items-start gap-4 text-white/80 text-sm leading-7"
                  >
                    <span
                      className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0"
                      aria-hidden="true"
                    />
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-background border-t border-border py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
            Réservez maintenant
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
          >
            Votre événement mérite le meilleur accueil
          </h2>
          <p className="text-muted text-base leading-8 mb-10">
            Contactez-nous pour réserver vos hôtesses et animatrices.
            Nous vous proposerons une équipe adaptée à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/nous-contacter"
              className="px-10 py-4 bg-gold text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,142,196,0.4)]"
            >
              Réserver des hôtesses
            </Link>
            <Link
              href="/nos-services"
              className="px-10 py-4 border border-gold text-gold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold hover:text-black transition-all duration-300"
            >
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}



