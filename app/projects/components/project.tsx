"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  return (
    <main className="mb-8 group sm:mb-12 last:mb-0">
      <section className=" max-w-[42rem]    sm:pr-8 relative sm:h-[20rem]  transition sm:group-even:pl-8 dark:text-white  ">
        <Link href="/">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            {/* Render the image for mobile */}
            {imageUrl && (
              <div className="mt-4 sm:hidden ">
                <Image
                  src={imageUrl}
                  alt="Project I worked on"
                  quality={95}
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            )}
            <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-primary px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
              transition 
              group-even:right-[initial] group-even:-left-40"
            />
          )}
        </Link>
      </section>
    </main>
  );
}
