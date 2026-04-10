import { contact } from "@/data/contact";

/**
 * Build a wa.me URL with a pre-filled message for the Grupo RF WhatsApp contact.
 * Uses contact.whatsapp from data/contact.ts.
 */
export function buildWhatsAppHref(message: string): string {
  const digits = contact.whatsapp.replace("+", "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${encoded}`;
}
