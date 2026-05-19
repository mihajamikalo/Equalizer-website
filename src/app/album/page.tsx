import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio & Album",
  description:
    "Découvrez le portfolio d'Equalizer Studio : productions photo et vidéo, événements, voix off et bien plus encore à Madagascar.",
};

const categories = [
  "Tous",
  "Photos & Vidéos",
  "Évènementiel",
  "Hôtesses",
  "Team Building",
];

const galleryItems = [
  {
    id: 1,
    src: "/first_image.png",
    alt: "Equalizer Studio — Production audiovisuelle professionnelle",
    category: "Photos & Vidéos",
    title: "Production Audiovisuelle",
    event: "Campagne publicitaire",
  },
  {
    id: 2,
    src: "/second_image.png",
    alt: "Equalizer Studio — Événement d'entreprise",
    category: "Évènementiel",
    title: "Salon de l'Auto 2022",
    event: "Salon professionnel",
  },
  {
    id: 3,
    src: "/album-cover.jpeg",
    alt: "Equalizer Studio — Production musicale et voix off",
    category: "Photos & Vidéos",
    title: "Studio Voix Off",
    event: "Spot audio & radio",
  },
  {
    id: 4,
    src: "/first_image.png",
    alt: "Equalizer Studio — Happy Mother Day 2024",
    category: "Évènementiel",
    title: "Happy Mother Day 2024",
    event: "Événement festif",
  },
  {
    id: 5,
    src: "/second_image.png",
    alt: "Equalizer Studio — Passation de directeurs Logistique Pétrolière",
    category: "Évènementiel",
    title: "Passation de Directeurs",
    event: "Cérémonie officielle",
  },
  {
    id: 6,
    src: "/album-cover.jpeg",
    alt: "Equalizer Studio — Digitalisation Canon",
    category: "Évènementiel",
    title: "Digitalisation Canon",
    event: "Lancement de produit",
  },
  {
    id: 7,
    src: "/first_image.png",
    alt: "Equalizer Studio — Lead Your Way Up",
    category: "Évènementiel",
    title: "Lead Your Way Up",
    event: "Conférence d'entreprise",
  },
  {
    id: 8,
    src: "/second_image.png",
    alt: "Equalizer Studio — Animation hôtesse",
    category: "Hôtesses",
    title: "Animation de Stand",
    event: "Salon professionnel",
  },
  {
    id: 9,
    src: "/album-cover.jpeg",
    alt: "Equalizer Studio — Team building entreprise",
    category: "Team Building",
    title: "Team Building Corporate",
    event: "Activité d'entreprise",
  },
];

const highlightedEvents = [
  {
    title: "Happy Mother Day 2024",
    description: "Un événement festif empreint d'émotion et d'élégance.",
    image: "/first_image.png",
  },
  {
    title: "Salon de l'Auto 2022",
    description: "Animation et hôtesses pour l'un des plus grands salons de Madagascar.",
    image: "/second_image.png",
  },
  {
    title: "Passation de Directeurs — Logistique Pétrolière",
    description: "Cérémonie officielle animée avec professionnalisme et prestige.",
    image: "/album-cover.jpeg",
  },
  {
    title: "Odity",
    description: "Production audiovisuelle et voix off pour une campagne nationale.",
    image: "/first_image.png",
  },
  {
    title: "Digitalisation Canon",
    description: "Lancement de produit avec animation et présentation dynamique.",
    image: "/second_image.png",
  },
  {
    title: "Lead Your Way Up",
    description: "Conférence d'entreprise animée avec énergie et professionnalisme.",
    image: "/album-cover.jpeg",
  },
];

export default function AlbumPage() {
  return (
    <>
      {/* ── Page hero ──────────────────────────────────── */}
      <section className="relative h-72 lg:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/album-cover.jpeg"
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
            Nos réalisations
          </p>
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white"
            style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
          >
            Portfolio & Album
          </h1>
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────── */}
      <section className="bg-surface border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-muted text-base leading-8 max-w-2xl">
              Retrouvez ici une sélection de nos meilleures réalisations —
              productions audiovisuelles, événements, animations et bien plus
              encore. Chaque projet témoigne de notre savoir-faire et de notre
              engagement envers l&apos;excellence.
            </p>
            <Link
              href="/nous-contacter"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold hover:text-black transition-all duration-300"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* ── Gallery grid ─────────────────────────────────── */}
      <section
        className="section-padding bg-background"
        aria-labelledby="gallery-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2
              id="gallery-heading"
              className="font-display text-4xl sm:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
            >
              Galerie
            </h2>
            <div className="divider-gold w-24 mx-auto mt-4" aria-hidden="true" />
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                className={`img-zoom relative rounded-xl overflow-hidden border border-border group cursor-pointer ${
                  index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                } ${index === 3 ? "lg:col-span-2" : ""}`}
              >
                <div
                  className={`relative w-full ${
                    index === 0 || index === 3 ? "h-80" : "h-64"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-gold text-xs tracking-[0.2em] uppercase block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white font-semibold text-base">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.event}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Highlighted events ───────────────────────────── */}
      <section
        className="section-padding bg-surface"
        aria-labelledby="events-heading"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.35em] uppercase mb-3">
              Événements marquants
            </p>
            <h2
              id="events-heading"
              className="font-display text-4xl sm:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
            >
              Ils nous ont fait confiance
            </h2>
            <div className="divider-gold w-24 mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightedEvents.map((event) => (
              <article
                key={event.title}
                className="card-hover bg-background border border-border rounded-xl overflow-hidden"
              >
                <div className="img-zoom relative h-52">
                  <Image
                    src={event.image}
                    alt={`Equalizer Studio — ${event.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-base mb-2 leading-6">
                    {event.title}
                  </h3>
                  <p className="text-muted text-sm leading-6">
                    {event.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-muted text-sm italic mt-10">
            ...et bien d&apos;autres projets à travers Madagascar.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-background border-t border-border py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gold text-xs tracking-[0.35em] uppercase mb-4">
            Votre prochain événement
          </p>
          <h2
            className="font-display text-4xl sm:text-5xl font-light text-white mb-6"
            style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
          >
            Créons quelque chose d&apos;exceptionnel
          </h2>
          <p className="text-muted text-base leading-8 mb-10">
            Votre projet mérite d&apos;être dans notre portfolio. Contactez-nous
            dès aujourd&apos;hui pour discuter de vos besoins.
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



