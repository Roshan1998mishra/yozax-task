import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/Components/Hero";
import Head from "@/Components/Head";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
    <Hero/>
    <Head/>
  </>
      );
}
