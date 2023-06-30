/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TableOfUsers = ({ refresh, setRefresh }) => {
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);

  const [users, setUsers] = useState([]);
  const [userUpdate, setUserUpdate] = useState({
    name: "",
    email: "",
    role: "",
  });
  // get all donors
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await axios.get("http://localhost:3000/api/users");
        setUsers(res.data.users);
        console.log(res.data.users);
      } catch (error) {
        console.log(error.message);
      }
    }

    getUsers();
  }, [refresh]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDelete = (email) => {
    const deleteUser = async (email) => {
      try {
        const res = await axios.put("http://localhost:3000/api/users", {
          email,
        });
        console.log(res, email);
      } catch (error) {
        console.log(error.message);
      }
    };
    Swal.fire({
      title: `Are yoy sure to delete this user ?`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      icon: "warning",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(` User was Deleted Successfully`, "", "success");

        deleteUser(email);
      } else Swal.fire("Cancel", "", "error");
    });
  };
  const handleSubmitUpdate = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:3000/api/users`,
        userUpdate
      );

      console.log(res);

      notifySuccess("user updated success");
      setRefresh(!refresh);

      // console.log("added success", data.data);
    } catch (err) {
      console.log(err);
      notifyError(err.message);
    }
  };

  const tableRows = users.map((user) => {
    return (
      <tr key={Math.random()} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {user.name}
        </th>
        <td className="px-4 py-3">{user.email}</td>
        <td className="px-4 py-3">{user.role}</td>
        <td className="px-4 py-3">{user.subscribed ? "✔" : "❌"}</td>
        <td className="px-4 py-3">
          {user.subscriptionExpirationDate
            ? user.subscriptionExpirationDate
            : "User is not subscribed."}
        </td>

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
                  setUserUpdate((prev) => ({
                    ...prev,
                    name: user.name,
                    email: user.email,
                    role: user.role,
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
                onClick={() => handleDelete(user.name)}
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
        <h1 className="text-[30px] font-bold py-3">Users</h1>
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 table-zebra ">
              <thead className="text-xs text-white uppercase bg-amber-500 ">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    USERNAME
                  </th>
                  <th scope="col" className="px-4 py-3">
                    email
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Subscribed
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Subscription end date
                  </th>

                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">There are no Users</div>
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
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-sm  border-amber-500 w-full max-w-xs"
                value={userUpdate.name}
                onChange={handleChange}
              />
            </div>
            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="role"
                placeholder="Type here"
                className="input input-sm  border-amber-500 w-full max-w-xs"
                value={userUpdate.email}
                onChange={handleChange}
              />
            </div>
            {/*  */}

            {/*  */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <input
                type="text"
                name="role"
                placeholder="Type here"
                className="input input-sm  border-amber-500 w-full max-w-xs"
                value={userUpdate.role}
                onChange={handleChange}
              />
            </div>

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
