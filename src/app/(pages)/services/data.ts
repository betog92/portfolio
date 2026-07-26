export type ServicesType = {
  icon: string;
  title: string;
  variant: string;
  description: string;
};

/** Icon/variant shells; titles & descriptions come from i18n (`servicesPage.items`). */
export const servicesData: ServicesType[] = [
  {
    icon: "feather:smartphone",
    variant: "bg-soft-alt-primary",
    title: "Mobile Development",
    description:
      "Scalable, secure mobile apps built with React Native and TypeScript — from fintech platforms to the official St. Jude Children's Research Hospital fundraising app.",
  },
  {
    icon: "feather:globe",
    variant: "bg-soft-alt-info",
    title: "Web Development",
    description:
      "Modern, fast websites and web apps with Next.js and React, taken from idea to production launch.",
  },
  {
    icon: "feather:users",
    variant: "bg-soft-alt-success",
    title: "Technical Leadership",
    description:
      "Leading agile teams of 6+ developers: code reviews, PR processes, and quality delivery with stable release cycles.",
  },
  {
    icon: "feather:shield",
    variant: "bg-soft-alt-warning",
    title: "Mobile Security",
    description:
      "Biometric authentication, MFA, AES-256 encryption, jailbreak/root and Frida detection, and native code obfuscation for apps that handle sensitive data.",
  },
  {
    icon: "feather:zap",
    variant: "bg-soft-alt-pink",
    title: "Performance Optimization",
    description:
      "Profiling and optimizing app flows — I've cut operation times by 20% while improving the overall user experience.",
  },
  {
    icon: "feather:package",
    variant: "bg-soft-alt-dark",
    title: "End-to-End Products",
    description:
      "Complete digital products with booking, online payments, and instant confirmation — like lacasadechuyelrico.com, built from scratch.",
  },
];
