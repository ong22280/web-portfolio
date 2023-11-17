"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
// import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  // const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-primary text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110  active:scale-105   disabled:scale-100 disabled:bg-opacity-65"
      // disabled={pending}
    >
      Submit{" "}
      <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
    </button>
  );
}
