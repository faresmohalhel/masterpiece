import Hero from "@/components/UI/Hero";
import Places from "@/components/UI/Places";
import Image from "next/image";
import { Fragment } from "react";

/* 
importing fonts???
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
*/

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Places />
    </Fragment>
  );
}
