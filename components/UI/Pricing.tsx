import Link from "next/link";
import SubTitle from "./SubTitle";

import { useSession } from "next-auth/react";

import * as Icon from "@tabler/icons-react";

const Pricing = () => {
  const { data: session } = useSession();

  let pathname;
  if (!session?.user) {
    pathname = "/Login";
  } else if (session?.user.subscribed === true) {
    pathname = "/search";
  } else {
    pathname = "/payment";
  }

  return (
    <div
      className="flex flex-col justify-center items-center gap-12 py-12 scroll-smooth"
      id="pricing"
    >
      <SubTitle title="Pricing" />

      <div className="flex flex-col text-primary-text items-center justify-center gap-4">
        <span className="text-4xl font-bold">You deserve a better</span>
        <span className="text-4xl font-bold bg-white border-text-orange-500">
          Experience
        </span>
        <span className="font-thin">
          Chose a plan that&apos;s right for you
        </span>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="bg-white w-80 flex flex-col px-4 py-6 rounded-xl gap-6 relative shadow-md text-primary-text">
          <span className="font-semibold text-xl">Freebie</span>
          <span className="font-thin">
            Ideal for individuals who need quick access to basic features
          </span>
          <span className="flex items-center">
            <span className="text-5xl font-semibold">$0 </span>
            <span className="text-sm font-thin">/ Month</span>
          </span>
          <Link
            href={{ pathname }}
            className="flex items-center justify-center py-2 bg-white text-orange-500 rounded-md border border-orange-500"
          >
            Get Started Now
          </Link>

          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center">
              <Icon.IconCircleCheckFilled size={36} />
              <span className="font-thin">1000+ of Products</span>
            </span>
            <span className="flex gap-2 items-center">
              <Icon.IconCircleCheckFilled size={36} />
              <span className="font-thin">Access to 1000+ of user reviews</span>
            </span>
            <span className="flex gap-2 items-center">
              <Icon.IconCircleXFilled size={36} />
              <span className="font-thin">
                Access to 100+ of expert reviews
              </span>
            </span>
          </div>
        </div>
        <div className="bg-orange-500 w-80 flex flex-col px-4 py-6 rounded-xl gap-6 relative top-[-10px] shadow-md">
          <span className="font-semibold text-xl">Professional</span>
          <span className="font-thin">
            Ideal for individuals who casually try new products and places
          </span>
          <span className="flex items-center">
            <span className="text-5xl font-semibold">$20 </span>
            <span className="text-sm font-thin">/ Month</span>
          </span>
          <Link
            href={{ pathname }}
            className="flex items-center justify-center py-2 bg-white text-orange-500 rounded-md"
          >
            Get Started Now
          </Link>

          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center">
              <Icon.IconCircleCheckFilled size={36} />
              <span className="font-thin">1000+ of Products</span>
            </span>
            <span className="flex gap-2 items-center">
              <Icon.IconCircleCheckFilled size={36} />
              <span className="font-thin">Access to 1000+ of user reviews</span>
            </span>
            <span className="flex gap-2 items-center">
              <Icon.IconCircleCheckFilled size={36} />
              <span className="font-thin">
                Access to 100+ of expert reviews
              </span>
            </span>
          </div>
        </div>
        <div className="text-primary-text w-80 flex flex-col px-4 py-6 rounded-xl gap-6 relativex shadow-md">
          <span className="font-semibold text-xl">Life-time Access</span>
          <span className="font-thin">
            Ideal for businesses who need personalized services.
          </span>
          <span className="flex items-center">
            <span className="text-5xl font-semibold">$500 </span>
            <span className="text-sm font-thin">/ Lifetime</span>
          </span>
          <Link
            href={{ pathname }}
            className="flex items-center justify-center py-2 bg-white text-orange-500 border border-orange-500 rounded-md"
          >
            Get Started Now
          </Link>

          <div className="flex flex-col gap-2">
            <span className="flex gap-2 items-center">
              <Icon.IconCircleCheckFilled size={36} />
              <span className="font-thin">1000+ of Products</span>
            </span>
            <span className="flex gap-2 items-center">
              <Icon.IconCircleCheckFilled size={36} />
              <span className="font-thin">Access to 1000+ of user reviews</span>
            </span>
            <span className="flex gap-2 items-center">
              <Icon.IconCircleCheckFilled size={36} />
              <span className="font-thin">
                Unlimited Access to expert reviews
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
