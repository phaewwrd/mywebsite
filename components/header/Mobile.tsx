import { AlignJustify } from "lucide-react";
import { useState } from "react";

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false);

  const hdlClick = () => {
    setIsOpen(!isOpen);
  };
  const hdlClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white  rounded-xl left-5 top-5  fixed z-10 ">
      <div className="p-4">
        <AlignJustify onClick={hdlClick} size={20} />
        {isOpen && (
          <nav>
            <ul className="text-cyan-600 font-semibold text-lg flex flex-col gap-2 p-4">
              <li >
                <a href="/"  onClick={hdlClose}>
                  HOME
                </a>
              </li>
              <li >
                <a href="#aboutme"  onClick={hdlClose}>
                  ABOUT ME
                </a>
              </li>
              <li >
                <a href="#projects" onClick={hdlClose}>
                  PROJECTS
                </a>
              </li>
              <li >
                <a href="#contactme"  onClick={hdlClose}>
                  CONTACT ME
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
}
