import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Input,
  Collapse,
} from "@material-tailwind/react";

import { useSession } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const Router = useRouter();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);

  const checkIfAtTop = () => {
    const { top } = componentRef.current.getBoundingClientRect();
    setIsAtTop(top <= 0);
  };

  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      checkIfAtTop();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    searchQuery = e.target.value;
    console.log(searchQuery);
  };

  const handleClick = () => {
    Router.push({
      pathname: "/search",
      query: {
        name: searchQuery,
      },
    });
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-gray-900">
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <Link href="/search" className="flex items-center">
          Products
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <Link href="about" className="flex items-center  ">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="gray"
        className="p-1 font-normal"
      >
        <Link href="/contact-us" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );

  let searchQuery: String;

  return (
    <>
      <Navbar
        id="navbar"
        ref={componentRef}
        className={`sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 border-x-transparent border-t-transparent text-gray-900 border-b-gray-700 ${
          isAtTop ? "bg-transparent" : ""
        }`}
      >
        <div className="flex items-center justify-between text-blue-gray-900 flex-wrap">
          <div className="flex items-center gap-4">
            <Link href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
              RatePlaza
            </Link>
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
          <div className="relative flex w-full gap-2 md:w-max md:order-none order-last justify-self-start">
            <Input
              type="search"
              label="Type here..."
              className="pr-20"
              color="gray"
              onChange={handleInputChange}
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              className="!absolute right-1 top-1 rounded bg-orange-600"
              onClick={handleClick}
            >
              Search
            </Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden gap-2 lg:flex">
              {session?.user ? (
                <p>welcome {session?.user.name}</p>
              ) : (
                <div>
                  <Button variant="text" size="sm" color="gray">
                    Sign In
                  </Button>
                  <Button variant="gradient" size="sm" color="orange">
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </Collapse>
      </Navbar>
    </>
  );
}
