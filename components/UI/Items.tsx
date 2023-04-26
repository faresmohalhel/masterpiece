import * as Icon from "@tabler/icons-react";
import { Fragment } from "react";
import SubTitle from "./SubTitle";

const color = "#1f2937";
const size = 24;

const Items = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-200 py-24 space-y-12">
      <SubTitle title="Explore Items" />
      <div className="container box-border text-primary-text font-semibold grid lg:grid-cols-4 grid-cols-2 lg:px-24 mx-auto gap-6 ">
        <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md bg-sky-300 items-center justify-center rounded-md">
          <Icon.IconBowl color={color} size={size} />
          <span>Food</span>
        </div>
        <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md bg-sky-300 items-center justify-center rounded-md">
          <Icon.IconHanger color={color} size={size} />
          <span>Clothing</span>
        </div>
        <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md bg-sky-300 items-center justify-center rounded-md">
          <Icon.IconDiamond color={color} size={size} />
          <span>Jewelry</span>
        </div>
        <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md bg-sky-300 items-center justify-center rounded-md">
          <Icon.IconCar color={color} size={size} />
          <span>Cars</span>
        </div>
        <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md bg-sky-300 items-center justify-center rounded-md">
          <Icon.IconSofa color={color} size={size} />
          <span>Furniture</span>
        </div>
        <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md bg-sky-300 items-center justify-center rounded-md">
          <Icon.IconHome color={color} size={size} />
          <span>Housing</span>
        </div>
        <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md bg-sky-300 items-center justify-center rounded-md">
          <Icon.IconPaw color={color} size={size} />
          <span>Pet Supplies</span>
        </div>
        <div className="flex px-12 py-6 bg-neutral-50 space-x-2 shadow-md bg-sky-300 items-center justify-center rounded-md">
          <Icon.IconDeviceLaptop color={color} size={size} />
          <span>Electronics</span>
        </div>
      </div>
    </div>
  );
};

export default Items;
