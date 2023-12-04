"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import axios from "axios";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

interface GithubData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export default function Home() {
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const theme = useTheme(); // dark or light

  useEffect(() => {
    // Fetch GitHub data
    const fetchGithubData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/ong22280"
        );
        console.log("GitHub data:", response.data);
        setGithubData(response.data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 pt-8 md:py-10 md:pt-16">
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

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            download
            href={"/cv.pdf"}
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

          <div className="flex gap-3">
            {/* GitHub link */}
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

            {/* Linkedin link */}
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
        </div>
        <a href="https://wakatime.com/@018b1f7e-27b2-4c78-a321-0f067342c8f6">
          <Image
            src="https://wakatime.com/badge/user/018b1f7e-27b2-4c78-a321-0f067342c8f6.svg"
            alt="Total time coded since Oct 11 2023"
            width={155}
            height={50}
            className="mt-6 shadow-lg rounded-xl"
          />
        </a>

        {/* GitHub data */}
        <Link isExternal href={siteConfig.links.github}>
          <div className="flex flex-col items-center justify-center gap-4 p-6 mx-12 mt-6 text-lg bg-gray-800 border-2 border-gray-700 shadow-lg md:mx-0 md:flex-row rounded-xl">
            {githubData && (
              <>
                {/* Avatar */}
                <div className="flex items-center justify-center w-16 h-16 transition border-2 border-gray-200 rounded-full shadow-md dark:bg-gray-800 hover:scale-105">
                  <Image
                    src={githubData.avatar_url}
                    width={80}
                    height={80}
                    alt="GitHub Avatar"
                    className="rounded-full"
                  />
                </div>

                {/* GitHub data */}
                <div className="flex flex-col justify-center gap-2 ml-4 text-white">
                  <h1 className="text-2xl font-bold">{githubData.login}</h1>

                  <p className="text-gray-300">
                    {githubData.public_repos} repositories,{" "}
                    {githubData.followers} followers, {githubData.following}{" "}
                    following.
                  </p>
                </div>
              </>
            )}
          </div>
        </Link>
      </section>
    </>
  );
}
