import Link from "next/link";
import React from "react";

export default function PetsHome() {
  return (
    <div>
      <div className="flex flex-col">
        {/* tools and technologies */}
        <div className=" p-10  flex place-items-center  max-sm:flex-col max-md:flex-col">
          <div className="flex flex-col gap-5">
         
            <div className="flex gap-5 mt-5">
              {/* github icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>

              <div className="flex gap-5 max-sm:flex-col">
                {/* frontend */}
                <Link
                  href="https://github.com/phaewwrd/pet-homes/tree/main/Front-end"
                  className="cursor-pointer bg-slate-900 text-white px-4 py-2 rounded-md flex gap-2 place-items-center"
                >
                  Github / Front end
                </Link>
                {/* Backend */}
                <Link 
                href="https://github.com/phaewwrd/pet-homes/tree/main/Back-end"
                className="cursor-pointer bg-slate-600 text-white px-4 py-2 rounded-md flex gap-2 place-items-center">
                  Github / Back end
                </Link>
              </div>
            </div>
            <div className="flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-figma-icon lucide-figma"
              >
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
              </svg>{" "}
              {/* figma */}
              <Link
                href="https://www.figma.com/proto/spFun88xIhL1kXfwtIwZpt/Pets-Home?node-id=2-3&starting-point-node-id=2%3A3&t=vvsiWAThxG7JKP8C-1"
                className="bg-slate-900 w-30 justify-center text-white px-4 py-2 rounded-md flex gap-2 place-items-center"
              >
                Figma
              </Link>
            </div>
          </div>
          {/* <Image
            src="/images/petshomestack.png"
            alt="languages"
            width={380}
            height={80}
            className="w-300 max-sm:w-100 max-sm:pt-10"
          /> */}
        </div>
      </div>
    </div>
  );
}
