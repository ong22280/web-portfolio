"use client";

import { title } from "@/components/primitives";
import SectionHeading from "./components/section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./components/submit-btn";
import { Input, Textarea } from "@nextui-org/input";
import { IoMail } from "react-icons/io5";

export default function ContactPage() {
  return (
    <div>
      <h1 className={title()}>Contact</h1>
      <p className="mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:hemloun.s@gmail.com">
          hemloun.s@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="flex flex-col mt-6 dark:text-black gap-y-6"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <Input
          type="email"
          label="Email"
          name="senderEmail"
          isRequired
          placeholder="you@example.com"
          labelPlacement="outside"
          startContent={
            <IoMail className="flex-shrink-0 text-2xl pointer-events-none text-default-400" />
          }
        />
        <Textarea
          label="Message"
          labelPlacement="outside"
          name="message"
          placeholder="Enter your message"
          isRequired
          className="text-start"
        />
        <div className="flex justify-end">
          <SubmitBtn />
        </div>
      </form>
    </div>
  );
}
