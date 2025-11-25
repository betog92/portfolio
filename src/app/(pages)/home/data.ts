import angular from "@/assets/images/logos/Angular.svg";
import react from "@/assets/images/logos/react.svg";
import laravel from "@/assets/images/logos/laravel.svg";
import nodejs from "@/assets/images/logos/nodejs-icon.svg";

type PersonalDataType = {
  name: string;
  experience: string;
  image: string;
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
  category?: string[];
};

export type BlogsType = {
  image: string;
  title: string;
  name: string;
  date: string;
  userImg: string;
};

export const personalData: PersonalDataType[] = [
  {
    name: "React Native",
    experience: "5+ Years",
    image: react,
  },
  {
    name: "TypeScript",
    experience: "5+ Years",
    image: react, // Puedes cambiar por un logo de TypeScript si tienes
  },
  {
    name: "Angular",
    experience: "1 Years",
    image: angular,
  },
  {
    name: "GraphQL",
    experience: "2 Years",
    image: react, // Puedes cambiar por un logo de GraphQL si tienes
  },
  {
    name: "Firebase",
    experience: "3 Years",
    image: react, // Puedes cambiar por un logo de Firebase si tienes
  },
  {
    name: "Redux Toolkit",
    experience: "5 Years",
    image: react, // Puedes cambiar por un logo de Redux si tienes
  },
  {
    name: "Node.js",
    experience: "3 Years",
    image: nodejs,
  },
  {
    name: "Laravel",
    experience: "1 Year",
    image: laravel,
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
    category: ["react-native", "fintech"],
  },
  {
    image: react,
    variant: "soft-alt-info",
    title: "VectorApp",
    link: "https://vector.com.mx",
    language: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs"],
    category: ["react-native", "fintech"],
  },
];

export const blogsData: BlogsType[] = [
  // Puedes agregar blogs aquí cuando los tengas
];
