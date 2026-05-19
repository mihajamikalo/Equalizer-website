"use client";

import { useState } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const subject = `[Equalizer Studio] Demande de ${formData.name}${formData.service ? ` — ${formData.service}` : ""}`;
    const body = `Nom : ${formData.name}\nEmail : ${formData.email}\nTéléphone : ${formData.phone || "Non renseigné"}\nService : ${formData.service || "Non renseigné"}\n\nMessage :\n${formData.message}`;

    window.location.href = `mailto:contact.equalizerstudio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setTimeout(() => setStatus("sent"), 500);
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12">
        <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold flex items-center justify-center mb-6">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="#0e8ec4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3
          className="font-display text-3xl font-light text-white mb-3"
          style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
        >
          Message envoyé !
        </h3>
        <p className="text-muted text-sm leading-7 mb-8 max-w-sm">
          Votre message a été préparé dans votre client email. Nous reviendrons
          vers vous dans les plus brefs délais.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
          }}
          className="px-6 py-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold hover:text-black transition-all duration-300"
        >
          Nouveau message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulaire de contact Equalizer Studio"
    >
      <h2
        className="font-display text-2xl font-light text-white mb-8"
        style={{ fontFamily: "var(--font-ibrand), sans-serif" }}
      >
        Envoyez-nous un message
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-muted text-xs tracking-[0.2em] uppercase"
          >
            Nom complet <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className="bg-background border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-200"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-muted text-xs tracking-[0.2em] uppercase"
          >
            Email <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            className="bg-background border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-200"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-muted text-xs tracking-[0.2em] uppercase"
          >
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+261 XX XX XXX XX"
            className="bg-background border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-200"
          />
        </div>

        {/* Service */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="service"
            className="text-muted text-xs tracking-[0.2em] uppercase"
          >
            Service souhaité
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="bg-background border border-border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors duration-200 appearance-none"
          >
            <option value="" className="bg-surface">
              Sélectionner un service
            </option>
            <option value="Photos & Vidéos" className="bg-surface">
              Photos & Vidéos
            </option>
            <option value="Voix Off / Spot Audio" className="bg-surface">
              Voix Off / Spot Audio
            </option>
            <option value="Évènementiel" className="bg-surface">
              Évènementiel
            </option>
            <option value="MC / Animateur" className="bg-surface">
              MC / Animateur
            </option>
            <option value="Hôtesses & Animatrices" className="bg-surface">
              Hôtesses & Animatrices
            </option>
            <option value="Team Building" className="bg-surface">
              Team Building
            </option>
            <option value="Autre" className="bg-surface">
              Autre
            </option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 mb-8">
        <label
          htmlFor="message"
          className="text-muted text-xs tracking-[0.2em] uppercase"
        >
          Message <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet ou votre demande..."
          className="bg-background border border-border rounded-lg px-4 py-3 text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black font-semibold text-xs tracking-[0.2em] uppercase rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,142,196,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <svg
              className="animate-spin w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Envoi en cours...
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>

      <p className="text-muted text-xs text-center mt-4">
        Votre message ouvrira votre application email pour envoi.
      </p>
    </form>
  );
}



