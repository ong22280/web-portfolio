import kuWongnai from "@/public/kuWongnai.png";
import beam from "@/public/beam.png";
import kuTranscript from "@/public/kuTranscript.png";
import scbChallenge from "@/public/scbChallenge.png";
import wespace from "@/public/wespace.png";
import tsri from "@/public/tsri.png";
import kuFondue from "@/public/kuFondue.png";
import kuSport from "@/public/kuSport.png";
import regex from "@/public/regex.png";
import valentine from "@/public/valentine.png";

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "The platform for restaurant and venue reviews",
    description:
      "The website helps you find restaurants and reviews, manage your restaurants, order food, and pay online. Utilizing a microservices architecture.",
    tags: [
      "Next.js",
      "SpringBoot",
      "Node(Express)",
      "RubbitMQ",
      "MySQL",
      "Docker",
    ],
    imageUrl: kuWongnai,
  },
  {
    title:
      "Platform for reporting credits for each subject area of the curriculum",
    description:
      "web application for uploading PDF transcript files to check whether the credits in each subject group are enough to graduate.",
    tags: ["Laravel", "Laravel Blade", "Tailwind", "MySQL"],
    imageUrl: kuTranscript,
  },
  {
    title: "WESpace",
    description:
      "WE Space is a platform for students to explore their career path.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Mui",
      "Redux-Tookit",
      "Reacr-Query",
    ],
    imageUrl: wespace,
  },
  {
    title: "Thailand Science Research and Innovation",
    description:
      "Enhance SRI system, deliver sustainable economic and social value, and encourage Thailand to become a developed country",
    tags: ["React", "Next.js", "Scss", "Ant-design", "Wordpress backend"],
    imageUrl: tsri,
  },
  {
    title: "Landing page for a company that registers for events",
    description:
      "A landing page for a company that registers for events. The website is designed to be simple and easy to use.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    imageUrl: scbChallenge,
  },
  {
    title: "The platform for event management and registration",
    description:
      "A website for event management and registration using monolith architecture. ",
    tags: ["Laravel", "Laravel Blade", "Tailwind", "MySQL"],
    imageUrl: beam,
  },
  {
    title: "KU-Fondue",
    description: "Program for reporting complaints within Kasetsart University",
    tags: ["Java", "JavaFX", "csv"],
    imageUrl: kuFondue,
  },
  {
    title: "KU-Sport",
    description:
      "Website for booking sports facilities at Kasetsart University",
    tags: ["Next.js", "Tailwind", "prisma", "PostgreSQL"],
    imageUrl: kuSport,
  },
  {
    title: "Regex to NFAs",
    description:
      "Convert a regular expression to a non-deterministic finite automaton",
    tags: ["Next.js", "Tailwind", "vis-network"],
    imageUrl: regex,
  },
  {
    title: "Valentine Mail",
    description: "Send a valentine message to your loved one",
    tags: ["Next.js", "SMTP", "nodemailer"],
    imageUrl: valentine,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
