"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiDownload } from "react-icons/hi";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="justify-center inline-block text-center ">
          <h1 className={title()}>
            <span className="relative">
              Sawasdee&nbsp;{" "}
              <motion.span
                className="absolute top-0 text-4xl right--1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7,
                }}
              >
                👋
              </motion.span>
            </span>
            <br />
            I&apos;m
          </h1>
          <h1 className={title({ color: "violet" })}>
            {" "}
            Ong Sittipong&nbsp;
          </h1>{" "}
          <br />
          <h1 className={title()}>I enjoy to be a web developer.</h1>
          <h2 className={subtitle({ class: "mt-4" })}>let&apos;s see who I am</h2>
        </div>

        <div className="flex gap-3">
          <Link
            download
            href={"/resume.pdf"}
            className={
              buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              }) + " hover:scale-105 "
            }
          >
            Download CV
            <HiDownload className="transition opacity-60 group-hover:translate-y-1" />
          </Link>
          <Link
            isExternal
            className={
              buttonStyles({ variant: "bordered", radius: "full" }) +
              " hover:scale-105 "
            }
            href={siteConfig.links.github}
          >
            <FaGithub size={20} />
            GitHub
          </Link>
          <Link
            isExternal
            className={
              buttonStyles({ variant: "bordered", radius: "full" }) +
              " hover:scale-105 "
            }
            href={siteConfig.links.linkedin}
          >
            <FaLinkedin size={20} />
            Linkedin
          </Link>
        </div>
      </section>
    </>
  );
}
