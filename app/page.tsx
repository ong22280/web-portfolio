"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Home() {

	// get theme from providers.tsx
	const theme = useTheme(); // dark or light
	
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 pt-4 md:py-10 md:pt-16">
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
          {theme.theme === "dark" ? (
            <h1 className={title({ color: "blue" })}>
              {" "}
              Sittipong Hemloun&nbsp;
            </h1>
          ) : (
            <h1 className={title({ color: "yellow" })}>
              {" "}
              Sittipong Hemloun&nbsp;
            </h1>
          )}
          <br />
          <h1 className={title()}>I enjoy to be a web developer.</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            let&apos;s see who I am
          </h2>
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
