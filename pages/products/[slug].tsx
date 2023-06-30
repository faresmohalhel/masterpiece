// import "Pro" from "daisyui"
import axios from "axios";
import Item from "@/models/itemModel";

import { Rating, Group } from "@mantine/core";
import { Button } from "@material-tailwind/react";
import { Progress } from "@material-tailwind/react";

import { useRouter } from "next/router";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

// import Progress from "@/components/UI/Progress";
import * as Icon from "@tabler/icons-react";
import connectMongo from "@/utils/connectMongo";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Product = ({ product }) => {
  const { data: session } = useSession();
  const [usersReviews, setUsersReviews] = useState(product.usersReviews);
  // console.log(session?.user);

  console.log(product.image);

  const Router = useRouter();

  const [reviewBox, setReviewBox] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  const handleReviewSubmit = async (event) => {
    event.preventDefault();

    if (title && description && value) {
      const res = await axios.post("/api/review-item", {
        productName: product.name,
        userName: session?.user.name,
        description,
        rating: value,
        title,
      });
      console.log({
        productName: product.name,
        userName: session?.user.name,
        description,
        rating: value,
        title,
      });

      setUsersReviews((prevReviews) => [
        ...prevReviews,
        {
          username: session?.user.name,
          rating: value,
          title,
          description: description,
          date: new Date().toLocaleDateString("en-GB"),
        },
      ]);

      setReviewBox(false);

      // Router.reload();
    }
  };

  return (
    <div className="container bg-stone-50 flex flex-col px-6 py-12 mx-auto border-x border-gray-300 text-primary-text min-h-screen  max-w-sm lg:max-w-3xl">
      <div className="flex gap-4 mx-auto border-b border-gray-300 pb-12">
        <img
          src={
            product.image
              ? product.image
              : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
          }
          alt="a pizza image"
          className="w-24 md:w-48 object-fit rounded-lg shadow-sm"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <span className="text-xl text-gray-500 font-semibold">
            {product.description}
          </span>
          <span className="flex gap-2">
            <span className="flex gap-2">
              <Rating count={1} value={100} />{" "}
              {parseFloat(
                (product.usersRating / product.usersReviews.length).toFixed(1)
              )}{" "}
              users review
            </span>
            |
            <span className="flex gap-2">
              <Rating count={1} value={100} /> {product.expertRating} expert
              review
            </span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 border-b border-gray-300 pb-6">
        <h2 className="text-3xl font-semibold py-6 flex items-center gap-3 ">
          {" "}
          <span className="border-r pr-3">Expert Review</span>
          {!session?.user.subscribed && (
            <div className="flex gap-4 flex-col md:flex-row">
              <span className="text-base lg:text-xl">
                Join our family today to get access to this review
              </span>
              <Link
                href={{ pathname: session?.user ? "/payment" : "/Login" }}
                className="w-48"
              >
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Join Now
                </button>
              </Link>
            </div>
          )}
          {session?.user.subscribed && (
            <>
              <Rating readOnly value={product.expertRating} />
              <span className="text-xl text-gray-400">
                {product.expertRating == 0
                  ? "not available at the moment"
                  : product.expertRating}
              </span>
            </>
          )}
        </h2>
        {session?.user.subscribed && (
          <p className="">{product.expertReview.description}</p>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-3 py-12 mx-auto w-full lg:px-12 text-center border-b border-gray-300 items-center">
        <div className="flex flex-col w-full">
          <h3 className="font-semibold">Customer reviews and Rating</h3>
          <div className="flex gap-3 items-center justify-center">
            <Rating
              readOnly
              value={Math.floor(
                product.usersRating / product.usersReviews.length
              )}
            />
            <span>
              {parseFloat(
                (product.usersRating / product.usersReviews.length).toFixed(1)
              )}{" "}
              out of 5
            </span>
          </div>
          <span>{product.usersReviews.length} reviews</span>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2">
            <span className="font-semibold">5</span>
            <Progress
              value={
                (product.usersReviews.filter((review) => review.rating == 5)
                  .length /
                  product.usersReviews.length) *
                100
              }
              color="orange"
              size="sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">4</span>
            <Progress
              value={
                (product.usersReviews.filter((review) => review.rating == 4)
                  .length /
                  product.usersReviews.length) *
                100
              }
              color="orange"
              size="sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">3</span>
            <Progress
              value={
                (product.usersReviews.filter((review) => review.rating == 3)
                  .length /
                  product.usersReviews.length) *
                100
              }
              color="orange"
              size="sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">2</span>
            <Progress
              value={
                (product.usersReviews.filter((review) => review.rating == 2)
                  .length /
                  product.usersReviews.length) *
                100
              }
              color="orange"
              size="sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">1</span>
            <Progress
              value={
                (product.usersReviews.filter((review) => review.rating == 1)
                  .length /
                  product.usersReviews.length) *
                100
              }
              color="orange"
              size="sm"
            />
          </div>
        </div>
      </div>
      <div className="py-6 flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="avatar"></div>
          <button
            className="border border-gray-300 p-3 rounded-md text-gray-500"
            onClick={(event) => {
              if (session?.user) {
                setReviewBox((prevState) => !prevState);
                console.log(session);
              } else {
                Router.push({
                  pathname: "/Login",
                });
              }
            }}
          >
            write a review
          </button>
        </div>
        {reviewBox && (
          <form
            onSubmit={handleReviewSubmit}
            className="bg-white border border-gray-300 rounded-md p-4 flex-col flex gap-6"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="rating" className="text-gray-500 font-thin">
                Rating
              </label>
              <Rating value={value} onChange={setValue} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="review-title" className="text-gray-500 font-thin">
                Title
              </label>
              <input
                type="text"
                id="review-title"
                placeholder="title"
                required
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(e.target.value);
                }}
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
                required
                className="border-gray-300 border rounded-md py-2 px-1"
                onChange={(e) => {
                  setDescription(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
            <button className="bg-primary-color text-white w-24 h-12 rounded-lg">
              Submit
            </button>
          </form>
        )}
      </div>

      {usersReviews.length > 0 ? (
        usersReviews.map((review) => {
          // console.log(product.usersReviews);
          return (
            <div
              key={Math.random()}
              className="flex border gap-12 lg:gap-0 border-gray-300 p-6 text-sm lg:text-base mb-3"
            >
              <div className="flex flex-col gap-3 w-1/4 items-start justify-center ">
                <Rating readOnly value={review.rating} />
                <span>{review.username}</span>
                <span>{review.date}</span>
              </div>
              <div className="w-3/4 flex flex-col gap-3">
                <span className="font-semibold">{review.title}</span>
                <p className="font-thin">{review.description}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p>There are no reviews for this product</p>
      )}
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  try {
    await connectMongo();
    const items = await Item.find();

    const paths = items.map((item) => {
      return {
        params: { slug: item.slug },
      };
    });
    return {
      paths,
      fallback: true, // false or "blocking"
    };
  } catch (error) {
    console.log(error);
  }
};

export async function getStaticProps(context) {
  console.log("get static props", context);

  try {
    await connectMongo();
    const item = await Item.findOne({ slug: context.params.slug });
    console.log("item", item);
    return {
      props: {
        product: {
          name: item.name,
          description: item.description,
          category: item.category,
          usersRating: item.usersRating,
          image: item.image || "",
          expertRating: item.expertRating,
          expertReview: {
            rating: item.expertRating.rating || 0,
            title: item.expertRating.title || "not available",
            description: item.expertRating.description || "not available",
          },
          usersReviews:
            item.usersReviews.length > 0
              ? item.usersReviews.map((review) => {
                  return {
                    username: review.username,
                    rating: review.rating,
                    title: review.title,
                    description: review.description,
                    date: new Date(review.date).toLocaleDateString("en-GB"),
                  };
                })
              : [],
        },
      },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
  }
}
