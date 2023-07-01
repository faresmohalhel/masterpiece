import ReviewBox from "./ReviewBox";
import SubTitle from "./SubTitle";

import axios from "axios";
import { useEffect, useState } from "react";

const RecentUserReviews = () => {
  const [recentReviews, setRecentReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const res = (await axios.get("/api/recent-reviews")).data;
        setRecentReviews(
          res.reviews.usersReviews.flat().length > 10
            ? res.reviews.userReviews.flat().slice(0, 10)
            : res.reviews.usersReviews.flat()
        );
        console.log(res.reviews.usersReviews.flat());
      } catch (error: any) {
        console.log(error.message);
      }
    }

    console.log(recentReviews);
    getReviews();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-12 pb-12 px-12">
      <SubTitle title="Recent User Reviews" />

      <div className="flex flex-wrap gap-3">
        {recentReviews.map((review) => {
          return (
            <ReviewBox
              key={Math.random()}
              rating={review.rating}
              description={review.description}
              title={review.title}
              username={review.username}
              date={review.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RecentUserReviews;
