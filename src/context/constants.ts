type CurrencyType = "₹" | "$" | "€";

export const currency: CurrencyType = "$";

export const currentYear = new Date().getFullYear();

export const developedByLink = "";

export const developedBy = "";

export const contactUs = "";

export const buyLink = "";

export const basePath = "";

export const DEFAULT_PAGE_TITLE = "Selfown-NextJs | Responsive Personal page";

/** WhatsApp number in international format (no + or spaces). */
export const WHATSAPP_NUMBER = "528116605611";

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** CV PDFs in /public — served by site language. */
export const CV_FILES = {
  en: "Resume_Alberto_Garcia.pdf",
  es: "Curriculum_Alberto_Garcia.pdf",
} as const;

export const getCvFile = (language?: string) =>
  (language ?? "en").startsWith("es") ? CV_FILES.es : CV_FILES.en;

/** Absolute site path to the CV for the active language (respects Vite `base`). */
export const getCvHref = (language?: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${getCvFile(language)}`;
};
