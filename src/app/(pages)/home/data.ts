import react from "@/assets/images/logos/react.svg";
import casaDeChuy from "@/assets/images/logos/casa-de-chuy.webp";
import vite from "@/assets/images/logos/vite.svg";

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
  language: string[];
  fill?: boolean;
  titleKey?: string;
};

export const personalData: PersonalDataType[] = [
  {
    name: "React Native",
    experience: "5+ Years",
    icon: "logos:react",
  },
  {
    name: "TypeScript",
    experience: "5+ Years",
    icon: "logos:typescript-icon",
  },
  {
    name: "Redux Toolkit",
    experience: "5 Years",
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
    experience: "6+ Years",
    icon: "logos:git-icon",
  },
];

export const servicesData: ServicesType[] = [
  {
    icon: "feather:smartphone",
    variant: "soft-alt-primary",
    title: "Mobile Development",
    description:
      "Expert in React Native development with 5+ years of experience building scalable, secure mobile applications for fintech and enterprise solutions.",
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
    image: react,
    variant: "soft-alt-primary",
    title: "Vit by Vector",
    link: "https://vit.vector.com.mx",
    language: ["React Native", "TypeScript", "GraphQL", "Firebase"],
  },
  {
    image: react,
    variant: "soft-alt-info",
    title: "VectorApp",
    link: "https://vector.com.mx",
    language: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
  },
  {
    image: casaDeChuy,
    variant: "soft-alt-warning",
    title: "La Casa de Chuy el Rico",
    link: "https://lacasadechuyelrico.com",
    language: ["Next.js", "React", "TypeScript", "Supabase"],
    fill: true,
  },
  {
    image: vite,
    variant: "soft-alt-success",
    title: "Personal Portfolio",
    titleKey: "home.work.portfolioTitle",
    link: "https://github.com/betog92/portfolio",
    language: ["React", "TypeScript", "Vite", "SCSS"],
  },
];
