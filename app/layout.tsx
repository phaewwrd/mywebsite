import type { Metadata } from "next";
import "./globals.css";
import LayoutHeader from "@/components/header/LayoutHeader";
import Stars from "@/components/background/Stars";
import Leaf from "@/components/background/Leaf";
import Footer from "@/components/Footer";





export const metadata: Metadata = {
  title:{
    template : "%s | Phaewphan Wrd.",
    default: 'Phaewphan Wrd.',
  },
  description: "my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 

{
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-slate-800 ">
       <div className="grid mt-10 place-items-center z-10">
        <LayoutHeader />
       </div>
        <Stars />
                    <Leaf />
    
        <div className="
          block sm:hidden 
          fixed inset-0 
          bg-[url('/bg-mobile.png')] 
          bg-no-repeat 
          bg-left 
          bg-cover          
          z-[-1]
          ">


          </div>

        <div className="
          hidden sm:block 
          fixed inset-0 
          bg-[url('/bg.png')] 
          bg-no-repeat 
          bg-left 
          bg-cover 
          z-[-1]
        "></div>


        <main className="grid mt-20 justify-items-center tracking-widest text-slate-200">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
