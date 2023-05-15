import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "./Home";
import Projects from "./Projects";
import Tools from "./Tools";
import Footer from "./Footer";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(()=>{})
  return (
    <div>
      <Homepage />
      <Projects />
      <Tools />
      <Footer />
    </div>
  );
}
