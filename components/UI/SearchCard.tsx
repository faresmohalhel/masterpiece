// import Rating from "./Rating";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

import { Rating, Group } from "@mantine/core";

const SearchCard = (props: any) => {
  const handleClick = () => {
    const itemQuery = props.item ? props.item.name : "";
    const itemPage = props.item ? props.item.slug : "";
    const pathname = "/products/" + itemPage;
    Router.push({ pathname });
  };
  return (
    <div
      className="text-primary-text flex gap-6 border border-gray-300 rounded-md p-4 max-w-sm lg:max-w-lg hover:cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="lg:w-32 w-24 object-cover rounded-md"
        src={
          props.item
            ? props.item.img
            : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        }
        alt={props.item ? props.item.name : "alt image"}
      />
      <div className="flex flex-col gap-1">
        <div className="flex gap-4 items-center">
          <span className="font-semibold text-2xl">
            {props.item ? props.item.name : "name not available"}
          </span>
          <Group position="center">
            <Rating readOnly value={props.item ? props.item.rating : 4} />
          </Group>
        </div>

        <p className="font-thin">
          {props.item ? props.item.description : "description not available"}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
