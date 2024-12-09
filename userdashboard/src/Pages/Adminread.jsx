import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"; // Import the required CSS for toast notifications
import "react-toastify/dist/ReactToastify.css";

const Adminread = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [isUpdate, setIsUpdate] = useState(false); // Whether the modal is for adding or updating

  // Fetch users data from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []); // Initial load

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Submit the form to add new admin
  const handleAddAdmin = async (e) => {
    e.preventDefault();
    console.log("Sending Data:", userData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/create",
        userData
      );

      // Show success toast (Android-like appearance)
      toast.success("Admin added successfully!", {
        className: "toast-success",
        position: "bottom-center",
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: true, // Hide progress bar
        closeOnClick: true, // Close on click
        draggable: true, // Draggable toast
      });

      // Reset the form fields after successful submission
      setUserData({ username: "", email: "", phone: "", password: "" });

      // Refresh the user list after adding the admin
      fetchUsers();

      // Close the modal by setting modal visibility state to false
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error:", error);

      // Show error toast (Android-like appearance)
      let errorMessage = "An error occurred!";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      toast.error(errorMessage, {
        className: "toast-error",
        position: "bottom-center",
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: true, // Hide progress bar
        closeOnClick: true, // Close on click
        draggable: true, // Draggable toast
      });
    }
  };

 const handleUpdateAdmin = async (e) => {
   e.preventDefault();

   try {
     // Convert all fields to lowercase
     const { _id, ...dataToUpdate } = userData;
     const secureData = {
       username: dataToUpdate.username.toLowerCase(),
       email: dataToUpdate.email.toLowerCase(),
       phone: dataToUpdate.phone.toLowerCase(),
       password: dataToUpdate.password, // Password shouldn't be modified here
     };

     // Check if the data already exists (fetch existing users)
     const response = await axios.get("http://localhost:5000/api/admin");
     const existingUser = response.data.find(
       (user) =>
         user._id !== _id && // Exclude the current user
         (user.username === secureData.username ||
           user.email === secureData.email ||
           user.phone === secureData.phone)
     );

     if (existingUser) {
       // Show error toast if data already exists
       toast.error("User with the same data already exists!", {
         className: "toast-error",
         position: "bottom-center",
         autoClose: 3000,
         hideProgressBar: true,
         closeOnClick: true,
         draggable: true,
       });
       return;
     }

     // Perform the update operation
     const updateResponse = await axios.put(
       `http://localhost:5000/api/admin/update/${_id}`,
       secureData
     );

     // Show success toast
     toast.success("Admin updated successfully!", {
       className: "toast-success",
       position: "bottom-center",
       autoClose: 3000,
       hideProgressBar: true,
       closeOnClick: true,
       draggable: true,
     });

     // Reset the form fields after successful submission
     setUserData({ username: "", email: "", phone: "", password: "" });

     // Refresh the user list after updating the admin
     fetchUsers();

     // Close the modal by setting modal visibility state to false
     setIsModalOpen(false);
   } catch (error) {
     console.error("Error:", error);

     // Show error toast
     let errorMessage = "An error occurred!";
     if (error.response && error.response.data && error.response.data.message) {
       errorMessage = error.response.data.message;
     }

     toast.error(errorMessage, {
       className: "toast-error",
       position: "bottom-center",
       autoClose: 3000,
       hideProgressBar: true,
       closeOnClick: true,
       draggable: true,
     });
   }
 };


  // Handle the delete functionality
  const handleDelete = async (userId) => {
    // Confirmation before deleting
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/admin/delete/${userId}`);

        // Show success toast
        toast.success("User deleted successfully!", {
          className: "toast-success",
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
        });

        // Remove the user from the list
        setUsers(users.filter((user) => user._id !== userId));
      } catch (error) {
        console.error("Error deleting user:", error);

        // Show error toast
        let errorMessage = "An error occurred while deleting the user!";
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage = error.response.data.message;
        }

        toast.error(errorMessage, {
          className: "toast-error",
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          draggable: true,
        });
      }
    }
  };

  // Open modal for adding a new admin
  const openAddModal = () => {
    setIsUpdate(false);
    setUserData({ username: "", email: "", phone: "", password: "" }); // Reset form fields
    setIsModalOpen(true);
  };

  // Open modal for updating an existing admin
  const openUpdateModal = (user) => {
    setIsUpdate(true);
    setUserData({
      _id: user._id, // Fetch the _id here from the user data
      username: user.username,
      email: user.email,
      phone: user.phone,
      password: "", // Password should remain empty during update, unless it's to be changed
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="card mb-3" id="ordersTable">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-4 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-9 mb-0 text-nowrap py-2 py-xl-0">Users</h5>
            </div>
            <div className="col-8 col-sm-auto ms-auto text-end ps-0">
              <button
                className="btn btn-falcon-default btn-sm"
                type="button"
                onClick={openAddModal} // Open the modal to add new admin
              >
                <span className="fas fa-plus" />
                <span className="d-none d-sm-inline-block ms-1">New</span>
              </button>
            </div>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive scrollbar">
            <table className="table table-sm table-striped fs-10 mb-0 overflow-hidden">
              <thead className="bg-200">
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <span className="badge badge-subtle-success">
                          Active
                        </span>
                      </td>
                      <td className="py-2 align-middle white-space-nowrap text-end">
                        <div className="dropdown font-sans-serif position-static">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal"
                            type="button"
                            id="order-dropdown-0"
                            data-bs-toggle="dropdown"
                            data-boundary="viewport"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="fas fa-ellipsis-h fs-10"></span>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-0"
                            aria-labelledby="order-dropdown-0"
                          >
                            <div className="py-2">
                              <a
                                className="dropdown-item"
                                href="#!"
                                onClick={() => openUpdateModal(user)} // Open update modal
                              >
                                Update
                              </a>
                              <a
                                className="dropdown-item"
                                href="#!"
                                
                              >
                                View
                              </a>
                              <div className="dropdown-divider"></div>
                              <a
                                className="dropdown-item text-danger"
                                href="#!"
                                onClick={() => handleDelete(user._id)} // Delete user on click
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal for adding or updating admin */}
      {isModalOpen && (
        <div
          className="modal fade show"
          id="addAdminModal"
          tabIndex="-1"
          aria-labelledby="addAdminModalLabel"
          aria-hidden="true"
          style={{ display: "block" }} // Manually control visibility
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addAdminModalLabel">
                  {isUpdate ? "Update Admin" : "Add New Admin"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)} // Close modal manually
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={isUpdate ? handleUpdateAdmin : handleAddAdmin}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={userData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                      required={isUpdate ? false : true} // Password required only on adding
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {isUpdate ? "Update Admin" : "Add Admin"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ToastContainer for displaying toasts */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />
    </>
  );
};

export default Adminread;
