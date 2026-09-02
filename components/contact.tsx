"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full text-center sm:mb-28"
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
      <SectionHeading>Vamos conversar</SectionHeading>

      <p className="-mt-6 text-[var(--muted)] dark:text-white/80">
      Tem um projeto, oportunidade ou desafio em tecnologia? Fale comigo pelo e-mail{" "}
        <a className="underline" href="mailto:samuel.d.alencar@gmail.com">
          samuel.d.alencar@gmail.com
        </a>{" "}
        ou através deste formulário.
      </p>

      <form
        className="glass-surface mt-8 flex flex-col rounded-3xl p-5 text-left sm:p-7 dark:text-black"
        name="senderEmail"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("E-mail enviado com sucesso!");
        }}
      >
        <input
          className="h-14 rounded-xl border border-[var(--line-color)] bg-white/70 px-4 outline-none transition-all placeholder:text-gray-400 focus:border-[var(--accent)] focus:ring-2 focus:ring-teal-500/15 dark:bg-white/90"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Seu e-mail"
        />
        <textarea
          className="my-3 h-52 rounded-xl border border-[var(--line-color)] bg-white/70 p-4 outline-none transition-all placeholder:text-gray-400 focus:border-[var(--accent)] focus:ring-2 focus:ring-teal-500/15 dark:bg-white/90"
          name="message"
          placeholder="Mensagem"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
