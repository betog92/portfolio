import casaDeChuy from "@/assets/images/logos/casa-de-chuy.webp";
import vite from "@/assets/images/logos/vite.svg";
import stjude from "@/assets/images/logos/stjude.svg";
import vitByVector from "@/assets/images/logos/vit-by-vector.png";
import vectorApp from "@/assets/images/logos/vector-app.png";

type PersonalDataType = {
  name: string;
  experience: string;
  icon: string;
};

export type ServicesType = {
  icon: string;
  title: string;
  variant: string;
  description: string;
};

export type WorkDataType = {
  image: string;
  variant: string;
  title: string;
  link: string;
  linkLabel?: string;
  language: string[];
  category?: string[];
  fill?: boolean;
  objectFit?: "cover" | "contain";
  titleKey?: string;
};

export const personalData: PersonalDataType[] = [
  {
    name: "React Native",
    experience: "6 Years",
    icon: "logos:react",
  },
  {
    name: "TypeScript",
    experience: "6 Years",
    icon: "logos:typescript-icon",
  },
  {
    name: "Redux Toolkit",
    experience: "6 Years",
    icon: "logos:redux",
  },
  {
    name: "GraphQL",
    experience: "3 Years",
    icon: "logos:graphql",
  },
  {
    name: "Firebase",
    experience: "4 Years",
    icon: "logos:firebase",
  },
  {
    name: "Apollo Client",
    experience: "3 Years",
    icon: "logos:apollostack",
  },
  {
    name: "Jest",
    experience: "4 Years",
    icon: "logos:jest",
  },
  {
    name: "Git",
    experience: "7+ Years",
    icon: "logos:git-icon",
  },
];

export const servicesData: ServicesType[] = [
  {
    icon: "feather:smartphone",
    variant: "soft-alt-primary",
    title: "Mobile Development",
    description:
      "Expert in React Native development with 6 years of experience building scalable, secure mobile applications for fintech and enterprise solutions.",
  },
  {
    icon: "feather:users",
    variant: "soft-alt-info",
    title: "Technical Leadership",
    description:
      "Led teams of 6+ developers, managing code reviews, PR processes, and ensuring quality delivery through agile methodologies and best practices.",
  },
  {
    icon: "feather:shield",
    variant: "soft-alt-success",
    title: "Mobile Security",
    description:
      "Specialized in implementing biometric authentication, MFA, encryption, and security measures for fintech applications.",
  },
  {
    icon: "feather:zap",
    variant: "soft-alt-orange",
    title: "Performance Optimization",
    description:
      "Optimized application flows and reduced operation times by 20%, improving user experience and application efficiency.",
  },
];

export const workData: WorkDataType[] = [
  {
    image: stjude,
    variant: "soft-alt-danger",
    title: "I Love St. Jude",
    link: "https://www.stjude.org/support-and-fundraising/i-love-st-jude-app.html",
    linkLabel: "stjude.org",
    language: ["React Native", "TypeScript", "Okta", "AWS"],
    category: ["react-native"],
    fill: true,
    objectFit: "contain",
  },
  {
    image: vitByVector,
    variant: "soft-alt-primary",
    title: "Vit by Vector",
    link: "https://www.vector.com.mx",
    language: ["React Native", "TypeScript", "GraphQL", "Firebase"],
    category: ["react-native"],
    fill: true,
  },
  {
    image: vectorApp,
    variant: "soft-alt-info",
    title: "VectorApp",
    link: "https://play.google.com/store/apps/details?id=com.appvectormovil",
    linkLabel: "Google Play",
    language: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
    category: ["react-native"],
    fill: true,
  },
  {
    image: casaDeChuy,
    variant: "soft-alt-warning",
    title: "La Casa de Chuy el Rico",
    link: "https://lacasadechuyelrico.com",
    language: ["Next.js", "React", "TypeScript", "Supabase"],
    category: ["nextjs", "web"],
    fill: true,
  },
  {
    image: vite,
    variant: "soft-alt-success",
    title: "Personal Portfolio",
    titleKey: "home.work.portfolioTitle",
    link: "https://github.com/betog92/portfolio",
    language: ["React", "TypeScript", "Vite", "SCSS"],
    category: ["react", "web"],
  },
];
