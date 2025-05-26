import React from "react";
import { Github, Linkedin, Mail, Phone, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <div className="relative bg-slate-800 h-full text-slate-300 p-10">
      <div className="w-full flex justify-end">
      
        <div className="grid  gap-5 object-end ">
          <a href="https://github.com/phaewwrd" className="flex gap-2">
            <Github /> Github
          </a>
          <a
            href="www.linkedin.com/in/phaewphan-woradanuphan"
            className="flex gap-2"
          >
            {" "}
            <Linkedin /> Linkedin
          </a>
          <a href="tel:+66621456941" className="flex gap-2">
            <PhoneCall /> 0621456941
          </a>
          <a href="mailto:phaewphan.wrd@gmail.com" className="flex gap-2">
            <Mail /> phaewphan.wrd@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
