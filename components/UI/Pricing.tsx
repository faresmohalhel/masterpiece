import * as Icon from "@tabler/icons-react";

import SubTitle from "./SubTitle";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 py-12">
      <SubTitle title="Pricing" />

      <div className="flex flex-col text-primary-text items-center justify-center gap-4">
        <span className="text-4xl font-bold">You deserve a better</span>
        <span className="text-4xl font-bold bg-white border-text-primary-color">
          Experience
        </span>
        <span className="font-thin">
          Chose a plan that&apos;s right for you
        </span>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="bg-primary-color w-80 flex flex-col px-4 py-6 rounded-xl gap-6 relative shadow-md">
          <span className="font-semibold text-xl">Professional</span>
          <span className="font-thin">
            Ideal for individuals who casually try new products and places
          </span>
          <span className="flex items-center">
            <span className="text-5xl font-semibold">$25 </span>
            <span className="text-sm font-thin">/ Month</span>
          </span>
          <a
            href=""
            className="flex items-center justify-center py-2 bg-white text-primary-color rounded-md"
          >
            Get Started Now
          </a>

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
        <div className="bg-primary-color w-80 flex flex-col px-4 py-6 rounded-xl gap-6 relative top-[-10px] shadow-md">
          <span className="font-semibold text-xl">Professional</span>
          <span className="font-thin">
            Ideal for individuals who casually try new products and places
          </span>
          <span className="flex items-center">
            <span className="text-5xl font-semibold">$25 </span>
            <span className="text-sm font-thin">/ Month</span>
          </span>
          <a
            href=""
            className="flex items-center justify-center py-2 bg-white text-primary-color rounded-md"
          >
            Get Started Now
          </a>

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
        <div className="bg-primary-color w-80 flex flex-col px-4 py-6 rounded-xl gap-6 relativex shadow-md">
          <span className="font-semibold text-xl">Professional</span>
          <span className="font-thin">
            Ideal for individuals who casually try new products and places
          </span>
          <span className="flex items-center">
            <span className="text-5xl font-semibold">$25 </span>
            <span className="text-sm font-thin">/ Month</span>
          </span>
          <a
            href=""
            className="flex items-center justify-center py-2 bg-white text-primary-color rounded-md"
          >
            Get Started Now
          </a>

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
      </div>
    </div>
  );
};

export default Pricing;
