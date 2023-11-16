"use client";

import { title } from "@/components/primitives";
import SectionHeading from "./components/section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./components/submit-btn";

export default function ContactPage() {
	return (
    <div>
      <motion.section
        id="contact"
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{
					opacity: 0,
        }}
        whileInView={{
					opacity: 1,
        }}
        transition={{
					duration: 1,
        }}
        viewport={{
					once: true,
        }}
      >
				<h1 className={title()}>Contact</h1>
        <p className="mt-6 text-gray-700 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:hemloun.s@gmail.com">
            example@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form
          className="flex flex-col mt-10 dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="px-4 transition-all border rounded-lg h-14 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="p-4 my-3 transition-all border rounded-lg h-52 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </motion.section>
    </div>
  );
}
