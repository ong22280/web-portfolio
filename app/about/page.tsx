"use client";

import { title } from "@/components/primitives";
import { skillsData } from "@/lib/data";
import { Chip, Divider } from "@nextui-org/react";
import Image from "next/image";
import profile from "@/public/profile.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import {
  ReactOriginal,
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  JavascriptPlain,
  NodejsOriginal,
  MysqlOriginal,
  NextjsOriginal,
  LaravelPlain,
  SpringOriginal,
  GithubOriginal,
  DockerPlain,
  TailwindcssPlain,
  ExpressOriginal,
  JavaOriginal,
  PhpPlain,
} from "devicons-react";

const icons = [
  // Frontend
  { component: <ReactOriginal size="50" />, name: "React" },
  { component: <NextjsOriginal size="50" />, name: "Next.js" },
  { component: <JavascriptPlain size="50" />, name: "JavaScript" },
  { component: <JavascriptOriginal size="50" />, name: "TypeScript" },
  { component: <Css3Original size="50" />, name: "CSS" },
  { component: <Html5Original size="50" />, name: "HTML" },

  // Backend
  { component: <NodejsOriginal size="50" />, name: "Node.js" },
  { component: <ExpressOriginal size="50" />, name: "Express" },
  { component: <JavaOriginal size="50" />, name: "Java" },
  { component: <SpringOriginal size="50" />, name: "Spring" },
  { component: <PhpPlain size="50" />, name: "PHP" },
  { component: <LaravelPlain size="50" />, name: "Laravel" },

  // Database
  { component: <MysqlOriginal size="50" />, name: "MySQL" },

  // Version Control
  { component: <GithubOriginal size="50" />, name: "GitHub" },

  // Others
  { component: <DockerPlain size="50" />, name: "Docker" },
  { component: <TailwindcssPlain size="50" />, name: "Tailwind CSS" },
];

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <main className="mt-4 mb-6 md:mt-12 md:flex">
        {/* Image */}
        <div className="flex justify-center flex-shrink-0 mb-6 md:justify-start">
          <Image
            src={profile}
            width={250}
            alt="NextUI hero Image"
            className="border-8 rounded-full shadow-lg border-primary "
          />
        </div>
        {/* content */}
        <div className="ml-12 text-left">
          <h1 className="mb-4 text-xl font-bold">
            Hello, I&apos;m{" "}
            <span className="text-primary">Sittipong Hemluan</span> (Ong).
          </h1>

          <p className="mb-4 ">
            Currently a 3rd-year{" "}
            <span className="font-semibold ">Computer Science</span> student at{" "}
            <span className="font-semibold ">Kasetsart University</span>.
          </p>

          <p className="mb-4 ">
            Passionate about{" "}
            <span className="font-semibold">web development</span>, I love
            building things and experimenting. Always on the lookout for new
            opportunities to improve my coding skills and more.
          </p>

          <p>
            I sincerely hope to be a part of some of the coolest innovations in
            the future.
          </p>
        </div>
      </main>

      <Divider className="container px-6 mx-auto max-w-7xl" />

      <h2 className="mt-6 mb-3 text-2xl font-semibold">My Skills</h2>

      <section className="flex flex-wrap justify-center gap-4 mt-6 text-lg text-gray-800">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-16 h-16 transition bg-white border-2 shadow-md rounded-xl dark:bg-slate-200 border-primary hover:scale-105"
          >
            {icon.component}
          </div>
        ))}
      </section>
    </div>
  );
}
