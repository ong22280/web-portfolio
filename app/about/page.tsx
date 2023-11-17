"use client";

import { title } from "@/components/primitives";
import { skillsData } from "@/lib/data";
import { Chip, Divider } from "@nextui-org/react";
import Image from "next/image";
import profile from "@/public/profile.jpeg";
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
      <main className="mt-12 mb-6 md:flex">
        {/* Image */}
        <div className="flex justify-center flex-shrink-0 mb-6 md:justify-start">
          <Image
            src={profile}
            width={300}
            alt="NextUI hero Image"
            className="border-8 rounded-full shadow-lg border-primary "
          />
        </div>
        {/* content */}
        <aside className="ml-12 text-left">
          <p>
            After graduating with a degree in{" "}
            <span className="font-medium">Accounting</span>, I decided to pursue
            my passion for programming. I enrolled in a coding bootcamp and
            learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{" "}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem. My core stack is{" "}
            <span className="font-medium">
              React, Next.js, Node.js, and MongoDB
            </span>
            . I am also familiar with TypeScript and Prisma. I am always looking
            to learn new technologies. I am currently looking for a{" "}
            <span className="font-medium">full-time position</span> as a
            software developer.
          </p>

          <p>
            <span className="italic">When I&apos;m not coding</span>, I enjoy
            playing video games, watching movies, and playing with my dog. I
            also enjoy <span className="font-medium">learning new things</span>.
            I am currently learning about{" "}
            <span className="font-medium">history and philosophy</span>.
            I&apos;m also learning how to play the guitar.
          </p>
        </aside>
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
