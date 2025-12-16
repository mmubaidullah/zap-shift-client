import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa6";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const hendleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${user.displayName} Marked as Admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const hendleRemoveAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `${user.displayName} will be removed from Admin`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove admin",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const roleInfo = { role: "user" };

        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top",
              icon: "success",
              title: `${user.displayName} removed form Admin`,
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h2 className="h2 text-4xl">Manage Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Others Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photoURL} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm opacity-50">{user.district}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => hendleRemoveAdmin(user)}
                      className="btn bg-red-400"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => hendleMakeAdmin(user)}
                      className="btn bg-green-400"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>Actions</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
