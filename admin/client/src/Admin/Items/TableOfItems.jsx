/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TableOfItems = ({ refresh, setRefresh }) => {
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const [items, setItems] = useState([]);
  const [itemUpdate, setItemUpdate] = useState({
    name: "",
    description: "",
    category: "",
    usersRating: "",
    expertRating: "",
    image: "",
  });

  // get all donors
  useEffect(() => {
    async function getItems() {
      try {
        const res = await axios.get("http://localhost:3000/api/items");
        setItems(res.data.items);
        console.log(res.data.items);
      } catch (error) {
        console.log(error.message);
      }
    }

    getItems();
  }, [refresh]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setItemUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = (name) => {
    const deleteItem = async (itemName) => {
      try {
        const res = await axios.put("http://localhost:3000/api/items", {
          name: itemName,
        });
        console.log(res, itemName);
      } catch (error) {
        console.log(error.message);
      }
    };
    Swal.fire({
      title: `Are yoy sure to delete this item ?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` Item was Deleted Successfully`, "", "success");

        deleteItem(name);

        // axios
        //   .patch("http://localhost:8800/deleteproduct/" + id)
        //   .then((response) => {
        //     console.log(response.data);
        //     setRefresh(!refresh);
        //   })

        //   .catch((error) => console.log(error.message));
      } else Swal.fire("Cancel", "", "error");
    });
  };
  const handleSubmitUpdate = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:3000/api/items`,
        itemUpdate
      );

      console.log(res);

      notifySuccess("item updated success");
      setRefresh(!refresh);

      // console.log("added success", data.data);
    } catch (err) {
      console.log(err);
      notifyError(err.message);
    }
  };

  const tableRows = items.map((item) => {
    return (
      <tr key={Math.random()} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {item.name}
        </th>
        <td className="px-4 py-3">{item.category}</td>
        <td className="px-4 py-3">{item.expertRating}</td>
        <td className="px-4 py-3">{item.usersRating}</td>
        <td className="px-4 py-3">{item.description}</td>

        <td className="px-4 py-3 flex items-center justify-start gap-2 flex-row-reverse">
          <div
            id=""
            className="bg-white  rounded divide-y divide-gray-100 shadow "
          >
            <div className="tooltip tooltip-info text-white" data-tip="Edit">
              <button
                // onClick={() => handleUpdate(book._id)
                // }
                onClick={() => {
                  window.my_modal_1.showModal();
                  setItemUpdate((prev) => ({
                    ...prev,
                    name: item.name,
                    category: item.category,
                    expertRating: item.expertRating,
                    usersRating: item.usersRating,
                    description: item.description,
                    image: item.image,
                  }));
                }}
                className="btn bg-white hover:bg-info shadow-lg hover:shadow-xl border-none "
              >
                <BiSolidMessageSquareEdit className="text-neutral text-[18px]" />
              </button>
            </div>
          </div>
          <div
            id=""
            className="bg-white  rounded divide-y divide-gray-100 shadow "
          >
            <div className="tooltip tooltip-error text-white" data-tip="Delete">
              <button
                onClick={() => handleDelete(item.name)}
                className="btn bg-white hover:bg-red-200 shadow-lg hover:shadow-xl border-none "
              >
                <AiOutlineDelete className="text-amber-500 text-[18px]" />
              </button>
            </div>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <section className="w-full  mt-5 ">
      <div className="">
        {/* Start coding here */}
        <h1 className="text-[30px] font-bold py-3">Items</h1>
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 table-zebra ">
              <thead className="text-xs text-white uppercase bg-amber-500 ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Item Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Expert Rating
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Users Rating
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Description
                  </th>

                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">There are no Items</div>
                ) : (
                  tableRows
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <form
          onSubmit={handleSubmitUpdate}
          method="dialog"
          className="modal-box"
        >
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
                value={itemUpdate.name}
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
                className="input input-sm  border-amber-500 w-full max-w-xs"
                value={itemUpdate.category}
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
                className="input input-sm  border-amber-500 w-full max-w-xs"
                value={itemUpdate.description}
                onChange={handleChange}
              />
            </div>
            {/*  */}

            {/*  */}

            {/*  */}

            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Expert Rating</span>
              </label>
              <input
                type="number"
                min="0"
                name="expertRating"
                placeholder="0"
                className="input input-sm  border-amber-500 w-full max-w-xs"
                value={itemUpdate.expertRating}
                onChange={handleChange}
              />
            </div>
            {/*  */}

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Item Image</span>
              </label>

              <input
                name="image"
                onChange={handleChange}
                value={itemUpdate.image}
                type="text"
                className="input input-sm  border-amber-500 w-full max-w-xs"
              />
            </div>
            {/*  */}

            {/*  */}
            <div className="form-control w-full max-w-xs col-start-3">
              <label className="label invisible">
                <span className="label-text">button</span>
              </label>
              <button type="submit" className="btn btn-sm btn-primary">
                update
              </button>
            </div>
          </div>
          {/* <div className="btn " onClick={ handleKeyPress }>x</div> */}
        </form>
      </dialog>
    </section>
  );
};
