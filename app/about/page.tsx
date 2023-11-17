"use client";

import { title } from "@/components/primitives";
import { skillsData } from "@/lib/data";
import { Chip } from "@nextui-org/react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  }),
};

export default function AboutPage() {
	return (
    <div>
      <h1 className={title()}>About</h1>
      <p className="mt-12 mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and playing with my dog. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m
        also learning how to play the guitar.
      </p>

      <ul className="flex flex-wrap justify-center gap-2 mt-8 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className=""
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Chip variant="shadow" color="primary" size="lg" radius="md">
              {skill}
            </Chip>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
