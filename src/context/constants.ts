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
