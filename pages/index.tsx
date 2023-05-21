import FeaturedReview from "@/components/UI/FeaturedReview";
import Hero from "@/components/UI/Hero";
import Items from "@/components/UI/Items";
import Places from "@/components/UI/Places";
import RecentUserReviews from "@/components/UI/RecentUserReviews";
import Image from "next/image";
import Pricing from "@/components/UI/Pricing";
import { Fragment } from "react";
import HowItWorks from "@/components/UI/HowItWorks";
import CarouselComponent from "@/components/UI/Carousel";

/* 
importing fonts???
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
*/

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <CarouselComponent />
      <Places />
      <Items />
      <FeaturedReview />
      <RecentUserReviews />
      <Pricing />
      <HowItWorks />
    </Fragment>
  );
}
