import stjude from "@/assets/images/logos/stjude.svg";
import casaDeChuy from "@/assets/images/logos/casa-de-chuy.webp";
import vectorCasaDeBolsa from "@/assets/images/logos/vector-casa-de-bolsa.png";
import accenture from "@/assets/images/logos/accenture.png";
import alvero from "@/assets/images/logos/alvero.png";
import udem from "@/assets/images/logos/udem.png";

/** Logos for Resume / About career timeline (same order as locale timeline arrays). */
export const timelineLogos = [
  { src: stjude, alt: "St. Jude / ALSAC" },
  { src: casaDeChuy, alt: "La Casa de Chuy el Rico" },
  { src: vectorCasaDeBolsa, alt: "Vector Casa de Bolsa" },
  { src: accenture, alt: "Accenture" },
  { src: alvero, alt: "Alvero" },
  { src: udem, alt: "Universidad de Monterrey" },
] as const;
