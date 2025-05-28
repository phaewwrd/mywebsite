"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { onSubmit } from "@/libs/data";
import Swal from "sweetalert2";
import Phone3D from "./phone3d";

export default function ContactForm() {
  const [state, formAction] = useActionState(onSubmit, { success: false });

  useEffect(() => {
    if (state.success) {
      Swal.fire({
        icon: "success",
        title: "Your message has been sent!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [state.success]);

  return (
    <div className="grid grid-cols-1 gap-10 place-items-center mt-20  xl:mt-50 2xl:mt-50">
      <div className="flex flex-col justify-center place-items-center text-center">
        <div
          className="text-[clamp(2rem,6vmin,10rem)] font-bold text-slate-300 flex gap-2 tracking-wider"
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
        >
          Contact Form
        </div>
        <div className="text-md md:text-xl w-3/4">
        Should you have any questions, please don&apos;t hesitate to contact me.
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 place-items-center">

        <form
          action={formAction}
          className="flex flex-col gap-10 place-items-center"
        >
          <div className="space-y-5 w-70 md:w-100 flex flex-col text-xl">
            <label htmlFor="topic">Topic</label>
            <Input name="topic" placeholder="please fill your topic or any question." className="h-20" required />
            <label htmlFor="email">Contact Email</label>
            <Input name="email" placeholder="please fill your contact email" type="email" required />
            <label htmlFor="phone">Conatct Phone</label>
            <Input name="phone" placeholder="please fill your phone number." required />
          </div>

          <SubmitButton />
        </form>
      <Phone3D/>
      </div>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="bg-cyan-600" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
