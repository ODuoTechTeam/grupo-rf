"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import { offices } from "@/data/contact";

export default function OfficeTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = offices[activeIndex];

  const mapsEmbedUrl = active.mapQuery
    ? `https://maps.google.com/maps?q=${active.mapQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`
    : null;

  const mapsLinkUrl = active.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${active.mapQuery}`
    : null;

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {offices.map((office, i) => (
          <button
            key={office.state}
            onClick={() => setActiveIndex(i)}
            className={`relative px-5 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
              i === activeIndex
                ? "bg-primary-medium text-white shadow-lg shadow-primary-medium/20"
                : "bg-white text-text-light border border-gray-200 hover:border-primary-medium/30 hover:text-primary-medium"
            }`}
          >
            <span className="font-bold">{office.city}</span>
            <span className="ml-1.5 opacity-70">/{office.state}</span>
            {i === activeIndex && (
              <motion.div
                layoutId="officeTabIndicator"
                className="absolute inset-0 rounded-xl bg-primary-medium -z-10"
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content: Map + Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6"
        >
          {/* Google Maps embed */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 min-h-[320px] lg:min-h-[400px]">
            {mapsEmbedUrl ? (
              <iframe
                src={mapsEmbedUrl}
                className="w-full h-full min-h-[320px] lg:min-h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa ${active.city}/${active.state}`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-medium text-sm">
                Mapa indisponível
              </div>
            )}
          </div>

          {/* Office details */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-100 flex-1">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-medium flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                    {active.city}
                  </h3>
                  <span className="text-sm text-primary-medium font-medium">
                    {active.state}
                    {active.state === "DF" && " — Sede"}
                  </span>
                </div>
              </div>

              {/* Address */}
              {active.address && (
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 mb-5">
                  <div className="text-xs font-bold text-text-medium uppercase tracking-wider mb-1.5">
                    Endereço
                  </div>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    {active.address}
                  </p>
                  {active.cep && (
                    <p className="text-xs text-text-medium mt-1">
                      CEP: {active.cep}
                    </p>
                  )}
                </div>
              )}

              {/* Phones */}
              <div className="space-y-2 mb-6">
                <div className="text-xs font-bold text-text-medium uppercase tracking-wider mb-2">
                  Telefones
                </div>
                {active.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary-pale/50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary-pale flex items-center justify-center group-hover:bg-primary-medium/20 transition-colors">
                      <Phone className="w-4 h-4 text-primary-medium" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 group-hover:text-primary-medium transition-colors">
                      {phone}
                    </span>
                  </a>
                ))}
              </div>

              {/* Google Maps link */}
              {mapsLinkUrl && (
                <a
                  href={mapsLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-medium hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Abrir no Google Maps
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
