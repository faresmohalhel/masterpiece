import * as Icon from "@tabler/icons-react";
import { Fragment } from "react";
import SubTitle from "./SubTitle";

import Link from "next/link";

const color = "#1f2937";
const size = 24;

const Items = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-200 py-24 space-y-12">
      <SubTitle title="Explore Items" />
      <div className="container box-border text-primary-text font-semibold grid lg:grid-cols-4 grid-cols-2 lg:px-24 mx-auto gap-6 ">
        <Link href={{ pathname: "/search", query: { category: "food" } }}>
          <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md items-center justify-center rounded-md">
            <Icon.IconBowl color={color} size={size} />
            <span>Food</span>
          </div>
        </Link>
        <Link href={{ pathname: "/search", query: { category: "clothing" } }}>
          <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md items-center justify-center rounded-md">
            <Icon.IconHanger color={color} size={size} />
            Clothing
          </div>
        </Link>
        <Link href={{ pathname: "/search", query: { category: "jewelry" } }}>
          <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md items-center justify-center rounded-md">
            <Icon.IconDiamond color={color} size={size} />
            Jewelry
          </div>
        </Link>
        <Link href={{ pathname: "/search", query: { category: "cars" } }}>
          <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md items-center justify-center rounded-md">
            <Icon.IconCar color={color} size={size} />
            Cars
          </div>
        </Link>
        <Link href={{ pathname: "/search", query: { category: "furniture" } }}>
          <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md items-center justify-center rounded-md">
            <Icon.IconSofa color={color} size={size} />
            Furniture
          </div>
        </Link>
        <Link href={{ pathname: "/search", query: { category: "Housing" } }}>
          <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md items-center justify-center rounded-md">
            <Icon.IconHome color={color} size={size} />
            Housing
          </div>
        </Link>
        <Link
          href={{ pathname: "/search", query: { category: "pet-supplies" } }}
        >
          <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md items-center justify-center rounded-md">
            <Icon.IconPaw color={color} size={size} />
            Pet Supplies
          </div>
        </Link>
        <Link
          href={{ pathname: "/search", query: { category: "electronics" } }}
        >
          <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md items-center justify-center rounded-md">
            <Icon.IconDeviceLaptop color={color} size={size} />
            Electronics
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Items;
