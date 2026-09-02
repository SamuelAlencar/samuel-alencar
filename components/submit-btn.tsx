import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import {useFormStatus} from "@/lib/useFormStatus";


export default function SubmitBtn() {
  const { pending, data, method } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-[3rem] w-[9rem] items-center justify-center gap-2 rounded-xl bg-[var(--ink)] text-white outline-none transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] focus:scale-105 active:scale-100 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#54d2c3] dark:text-[#082326] dark:hover:bg-[#8ae8dc]"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-[#082326]"></div>
      ) : (
        <>
          Enviar{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
