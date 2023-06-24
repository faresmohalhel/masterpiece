// import "Pro" from "daisyui"
import axios from "axios";
import Item from "@/models/itemModel";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

import Progress from "@/components/UI/Progress";
import Rating from "@/components/UI/Rating";
import * as Icon from "@tabler/icons-react";
import connectMongo from "@/utils/connectMongo";

const Product = ({ product }) => {
  return (
    <div className="container bg-stone-50 flex flex-col px-6 py-12 mx-auto border-x border-gray-300 text-primary-text min-h-screen  max-w-sm lg:max-w-3xl">
      <div className="flex gap-4 mx-auto border-b border-gray-300 pb-12">
        <img
          src="https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="a pizza image"
          className="w-48 object-fit rounded-lg shadow-sm"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <span className="text-xl text-gray-500 font-semibold">
            {product.description}
          </span>
          <span className="flex gap-2">
            <span className="flex gap-2">
              <Icon.IconStarFilled /> 5.0 users review
            </span>
            |
            <span className="flex gap-2">
              <Icon.IconStarFilled /> 4.3 expert review
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b border-gray-300 pb-6">
        <h2 className="text-3xl font-semibold py-6 flex items-center gap-3 ">
          <span className="border-r pr-3">Expert Review</span>
          <Rating readonly stars={4} />
          <span className="text-xl text-gray-400">4.3</span>
        </h2>
        <ul className="flex flex-col gap-3">
          <li>
            Lorem ipsum dolor sit amet consectetur. Viverra amet pellentesque
            odio aenean ultrices at malesuada habitasse. Volutpat neque faucibus
            vitae facilisis nisl risus.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. Viverra amet pellentesque
            odio aenean ultrices at malesuada habitasse. Volutpat neque faucibus
            vitae facilisis nisl risus.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. Viverra amet pellentesque
            odio aenean ultrices at malesuada habitasse. Volutpat neque faucibus
            vitae facilisis nisl risus.
          </li>
        </ul>
      </div>
      <div className="flex gap-3 py-12 mx-auto w-full lg:px-24 text-center border-b border-gray-300">
        <div className="flex flex-col w-full">
          <h3 className="font-semibold">Customer reviews and Rating</h3>
          <div className="flex gap-3 items-center justify-center">
            <Rating readonly stars={5} />
            <span>(5 out of 5)</span>
          </div>
          <span>99+ reviews</span>
        </div>
        <div className="flex flex-col w-full gap-1">
          <progress
            className="progress progress-warning w-56"
            value="0"
            max="100"
          ></progress>
          <progress
            className="progress progress-warning w-56"
            value="10"
            max="100"
          ></progress>
          <progress
            className="progress progress-warning w-56"
            value="40"
            max="100"
          ></progress>
          <progress
            className="progress progress-warning w-56"
            value="70"
            max="100"
          ></progress>
          <progress
            className="progress progress-warning w-56"
            value="100"
            max="100"
          ></progress>
        </div>
      </div>
      <div className="py-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src="https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
          </div>
          <button className="border border-gray-300 p-3 rounded-md text-gray-500">
            write a review
          </button>
        </div>
        {true && (
          <form className="bg-white border border-gray-300 rounded-md p-4 flex-col flex gap-6">
            <div className="flex flex-col gap-1">
              <label htmlFor="rating" className="text-gray-500 font-thin">
                Rating
              </label>
              <Rating readonly={false} stars={3} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="review-title" className="text-gray-500 font-thin">
                Title
              </label>
              <input
                type="text"
                id="review-title"
                placeholder="title"
                className="border-gray-300 border rounded-md py-2 px-1"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="review-description"
                className="text-gray-500 font-thin"
              >
                Description
              </label>
              <textarea
                id="review-description"
                placeholder="description"
                className="border-gray-300 border rounded-md py-2 px-1"
              />
            </div>
            <button
              className="bg-primary-color text-white w-24 h-12 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>

      <div className="flex border border-gray-300 p-6">
        <div className="flex flex-col gap-3 w-1/4 items-start justify-center ">
          <Rating readonly stars={3} />
          <span>Alex Mohammad</span>
          <span>15 May 2020</span>
        </div>
        <div className="w-3/4 flex flex-col gap-3">
          <span className="font-semibold">Really Tasty and affordable</span>
          <p className="font-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            accusantium cumque quo deleniti excepturi perferendis assumenda,
            incidunt dicta voluptatibus aliquid harum at earum unde! Facilis
            maxime dolores nemo. Explicabo, dolorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "test item",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
};

export async function getStaticProps(context) {
  console.log("get static props", context);

  try {
    await connectMongo();
    const item = await Item.findOne({ name: context.params.slug });
    console.log("item", item);
    return {
      props: {
        product: {
          name: item.name,
          description: item.description,
          category: item.category,
          userReviews: item.userReviews,
        },
      },
    };
  } catch (error) {
    console.log(error);
  }
}
