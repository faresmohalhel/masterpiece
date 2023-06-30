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
      className="text-primary-text flex gap-6 border border-gray-300 rounded-md p-4 max-w-sm w-[28rem] md:max-w-md hover:cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="lg:w-32 w-24 h-24 lg:h-32 object-fit rounded-md"
        src={
          props.item
            ? props.item.image
            : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        }
        alt={props.item ? props.item.name : "alt image"}
      />
      <div className="flex flex-col gap-1">
        <div className="flex gap-4 items-center justify-between">
          <span className="font-semibold text-2xl">
            {props.item ? props.item.name : "name not available"}
          </span>

          <Rating
            readOnly
            value={
              props.item
                ? props.item.usersRating / props.item.usersReviews.length
                : 4
            }
            defaultValue={0}
          />
        </div>
        <p className="font-thin">
          {props.item ? props.item.description : "description not available"}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
