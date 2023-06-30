/* eslint-disable react/prop-types */

import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

// import 'dotenv/config'
export const ItemForm = ({ setRefresh, refresh }) => {
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const [show, setShow] = useState(false);

  const [itemInfo, setItemInfo] = useState({
    name: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItemInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/items", itemInfo);
      notifySuccess("book added success");
      setRefresh(!refresh);

      console.log("added success", res.data);

      setItemInfo({ name: "", category: "", description: "", image: "" });
      setShow(false);
    } catch (err) {
      console.log(err);
      notifyError(err.message);
    }
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <>
      <div className="flex items-center gap-5">
        <h1 className="text-[30px] font-bold py-2">Add a New Item</h1>
        {!show ? (
          <div className="tooltip tooltip-primary" data-tip=" add new book">
            <button
              onClick={handleShow}
              className="btn btn-primary btn-sm btn-circle "
            >
              <IoAddCircleOutline className="text-[20px] font-bold" />
            </button>
          </div>
        ) : (
          <div className="tooltip tooltip-error" data-tip="cancel">
            <button
              onClick={handleShow}
              className="btn btn-error btn-sm btn-circle "
            >
              <MdOutlineCancel className="text-[20px] text-amber-500 font-bold" />
            </button>
          </div>
        )}
        <ToastContainer />
      </div>
      {show && (
        <form className="border p-[10px] rounded-lg" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-sm  border-amber-500 w-full max-w-xs"
                required
                value={itemInfo.name}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Type here"
                required
                className="input input-sm  border-amber-500 w-full max-w-xs"
                value={itemInfo.category}
                onChange={handleChange}
              />
            </div>
            {/*  */}

            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Type here"
                required
                className="input input-sm  border-amber-500 w-full max-w-xs"
                value={itemInfo.description}
                onChange={handleChange}
              />
            </div>
            {/*  */}

            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Item Image</span>
              </label>

              <input
                name="image"
                onChange={handleChange}
                type="text"
                required
                placeholder="Insert image link here"
                className="input input-sm  border-amber-500 w-full max-w-xs"
              />
            </div>
            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label invisible">
                <span className="label-text">button</span>
              </label>
              <button type="submit" className="btn btn-sm btn-primary">
                Add
              </button>
            </div>
            {/*  */}
          </div>
        </form>
      )}
    </>
  );
};
