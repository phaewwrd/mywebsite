import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const hdlClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white absolute rounded-xl left-5 top-5 z-10">
      <div className="p-4">
        <AlignJustify onClick={hdlClick} size={20} />
        {isOpen && (
          <nav>
            <ul>
              <li>
                <Link href="/" aria-label="Home Page">
                  Phaewphan Wrd.
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
