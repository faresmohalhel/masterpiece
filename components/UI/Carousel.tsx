import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";

export default function CarouselComponent() {
  return (
    <Carousel className="rounded-xl h-[60vh] relative overflow-hidden ">
      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-[70vh] w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Empowering Your Electronics Choices
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-lg md:text-xl lg:text-2xl"
            >
              With our comprehensive and objective ratings, reviews, and expert
              analysis, you can navigate the dynamic world of technology with
              confidence. Whether you&apos;re a gadget enthusiast, a
              professional seeking reliable tools, or a consumer looking for the
              latest innovations, our website is your trusted resource.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                <Link
                  href={{
                    pathname: "/search",
                    query: { category: "electronics" },
                  }}
                >
                  Explore
                </Link>
              </Button>
              <a href="#pricing" className="scroll-smooth">
                <Button size="lg" color="white" variant="text">
                  Join
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.pexels.com/photos/2977515/pexels-photo-2977515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image 1"
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 grid w-full overflow-y-hidden place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Delightful Dining Decisions
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-lg md:text-xl lg:text-2xl"
            >
              Whether you&apos;re a food enthusiast seeking new dining
              adventures or a discerning connoisseur in search of top-notch
              establishments, our comprehensive rating system offers valuable
              insights and reliable reviews.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                <Link
                  href={{ pathname: "/search", query: { category: "food" } }}
                >
                  Explore
                </Link>
              </Button>
              <a href="#pricing" className="scroll-smooth">
                <Button size="lg" color="white" variant="text">
                  Join
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1621808752171-531c30903889?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
          alt="image 1"
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 grid w-full h-[70vh] overflow-y-hidden place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Road to Excellence
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-lg md:text-xl lg:text-2xl"
            >
              With our comprehensive and unbiased car ratings, reviews, and
              expert insights, you can navigate the vast automotive landscape
              with confidence. Whether you&apos;re a car enthusiast, a practical
              driver, or someone seeking the perfect blend of performance and
              comfort, our website is your ultimate destination.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                <Link
                  href={{ pathname: "/search", query: { category: "cars" } }}
                >
                  Explore
                </Link>
              </Button>
              <a href="#pricing" className="scroll-smooth">
                <Button size="lg" color="white" variant="text">
                  Join
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
