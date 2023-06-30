/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// icons
import { SiCircle } from "react-icons/si";
import { FiLogOut } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export const Aside = (props) => {
  function handleLogOut() {
    window.scrollTo(0, 0);

    var Nav = document.getElementById("Nav");
    Nav.style.display = "block";
    var Footer = document.getElementById("Footer");
    Footer.style.display = "block";

    localStorage.removeItem("token");
    props.forceUpdate();
  }

  return (
    <aside className="fixed top-0 z-50 w-60  h-screen pt-[62px] pb-1 transition-transform -translate-x-full  md:translate-x-0">
      <div className="overflow-y-auto py-5 px-3 h-full bg-stone-800 ">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-gray-200 rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <SiCircle />
              <span className="mr-3">Overview</span>
            </Link>
          </li>
          <li>
            <Link
              to="/items"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-gray-200 rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <AiFillStar />
              Items
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex  items-center gap-2 p-2  w-full text-base font-medium text-gray-200 rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black"
            >
              <BsPerson />
              Users
            </Link>
          </li>

          <a href="/###" onClick={handleLogOut}>
            <span className="flex  items-center gap-2 p-2  w-full text-base font-medium text-gray-200 rounded-lg transition duration-75 group hover:bg-[#fff] hover:text-black">
              <FiLogOut />
              Logout
            </span>
          </a>
        </ul>
      </div>
    </aside>
  );
};
