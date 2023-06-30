/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import axios from "axios";

// icons

import { FaDonate } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineRateReview } from "react-icons/md";

export const Stats = (props) => {
  const [stats, setStats] = useState({
    items: 0,
    users: 0,
    sales: 0,
    reviews: 0,
  });

  // get total of donors
  useEffect(() => {
    async function getStats() {
      try {
        const res = await axios.get("http://localhost:3000/api/stats");
        setStats(res.data.stats);
      } catch (error) {
        // console.log(error.message);
      }
    }

    getStats();
  }, [props.refresh]);

  return (
    <div className="stats stats-vertical xl:stats-horizontal md:stats-horizontal bg-white shadow-lg ">
      <div className="stat">
        <div className="stat-title  text-amber-500 font-bold">Total Items</div>
        <div className="stat-value text-amber-500">{stats.items}</div>
        <div className="stat-figure text-amber-500">
          <AiFillStar className="text-[40px]" />
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure text-amber-500">
          <BsPerson className="text-[40px]" />
        </div>
        <div className="stat-title text-amber-500 font-bold">Total Users</div>
        <div className="stat-value text-amber-500">{stats.users}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-amber-500 ">
          <FaDonate className="text-[40px] " />
        </div>
        <div className="stat-title text-amber-500 font-bold"> Total Sales </div>
        <div className="stat-value text-amber-500">${stats.payments}</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-amber-500">
          <MdOutlineRateReview className="text-[40px] text-amber-500" />
        </div>
        <div className="stat-title  text-amber-500 font-bold">
          Total Reviews{" "}
        </div>
        <div className="stat-value text-amber-500">{stats.reviews}</div>
      </div>
    </div>
  );
};
