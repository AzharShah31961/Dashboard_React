import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Staffread = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [staffData, setStaffData] = useState({
    username: "",
    email: "",
    phone: "",
    cnic: "",
    password: "",
    role: "",
  });
  const [roles, setRoles] = useState([]); // For roles dropdown
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  // Fetch staff and roles
  const fetchStaff = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/staff/");

      // Assuming each staff member has a `role` field with an ID
      const staffWithRoles = await Promise.all(
        response.data.map(async (staffMember) => {
          // Fetch the role details for each staff member
          const roleResponse = await axios.get(
            `http://localhost:5000/api/role/${staffMember.role}`
          );
          return {
            ...staffMember,
            role: roleResponse.data, // Attach the full role object
          };
        })
      );

      setStaff(staffWithRoles); // Update the staff list with role data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching staff:", error);
      setLoading(false);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/role/");
      setRoles(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  useEffect(() => {
    fetchStaff();
    fetchRoles();
  }, []);

  // Handle input changes

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the CNIC field, allow only 13 characters
    if (name === "cnic" && value.length > 13) {
      return; // Prevent further input if length exceeds 13
    }
    if (name === "phone" && value.length > 11) {
      return; // Prevent further input if length exceeds 13
    }
    setStaffData({ ...staffData, [name]: value });
  };

  // Add new staff
  // Add new staff
  // Add Staff with Field-Specific Error Handling
  // Add Staff with Validation
  const addStaff = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (staffData.phone.length !== 11) {
      toast.error("Phone number must be 11 digits");
      return;
    }
    if (staffData.cnic.length !== 13) {
      toast.error("CNIC must be 13 digits");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/staff/create", staffData);
      toast.success("Staff created successfully!");
      fetchStaff();
      setStaffData({
        username: "",
        email: "",
        phone: "",
        cnic: "",
        password: "",
        role: "",
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating staff:", error);

      // Handle server-side errors
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors).forEach((field) => {
          toast.error(errors[field]); // Show each field error
        });
      } else {
        toast.error(
          error.response?.data?.message ||
            "An unexpected error occurred while creating the staff."
        );
      }
    }
  };

  // Update Staff with Validation
  const updateStaff = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (staffData.phone.length !== 11) {
      toast.error("Phone number must be 11 digits");
      return;
    }
    if (staffData.cnic.length !== 13) {
      toast.error("CNIC must be 13 digits");
      return;
    }

    const { _id, __v, ...staffUpdateData } = staffData;

    try {
      await axios.put(
        `http://localhost:5000/api/staff/update/${_id}`,
        staffUpdateData
      );
      toast.success("Staff updated successfully!");
      fetchStaff();
      setStaffData({
        username: "",
        email: "",
        phone: "",
        cnic: "",
        password: "",
        role: "",
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating staff:", error);

      // Handle server-side errors
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors).forEach((field) => {
          toast.error(errors[field]); // Show each field error
        });
      } else {
        toast.error(
          error.response?.data?.message ||
            "An unexpected error occurred while updating the staff."
        );
      }
    }
  };

  // Delete staff
  const handleDelete = async (staffId) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      try {
        await axios.delete(`http://localhost:5000/api/staff/delete/${staffId}`);
        toast.success("Staff deleted successfully!");
        setStaff(staff.filter((member) => member._id !== staffId));
      } catch (error) {
        console.error("Error deleting staff:", error);
        toast.error(
          error.response?.data?.message ||
            "An error occurred while deleting the staff."
        );
      }
    }
  };

  // Open modal for adding or updating staff
  const openModal = (member = null) => {
    if (member) {
      setIsUpdate(true);
      setStaffData({
        ...member, // Spread the member data
        role: member.role?._id || "", // Ensure the role is correctly set from the member data
      });
    } else {
      setIsUpdate(false);
      setStaffData({
        username: "",
        email: "",
        phone: "",
        cnic: "",
        password: "",
        role: "",
      });
    }
    setIsModalOpen(true); // Show modal
  };

  // Open view modal
  // Open View Modal Function
  const openViewModal = (member = null) => {
    if (member) {
      setStaffData({
        ...member, // Spread the member data
        role: member.role || { name: "N/A" }, // Ensure the role object is properly set
      });
    } else {
      setStaffData({
        username: "",
        email: "",
        phone: "",
        cnic: "",
        password: "",
        role: { name: "N/A" },
      });
    }
    setIsViewModalOpen(true); // Show view modal
  };

  return (
    <>
      <div className="card mb-3" id="staffTable">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-4 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-9 mb-0 text-nowrap py-2 py-xl-0">Staff</h5>
            </div>
            <div className="col-8 col-sm-auto ms-auto text-end ps-0">
              <button
                className="btn btn-falcon-default btn-sm"
                type="button"
                onClick={() => openModal()} // Open the modal to add new staff
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
                  <th>CNIC</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : staff.length > 0 ? (
                  staff.map((member, index) => (
                    <tr key={member._id}>
                      <td>{index + 1}</td>
                      <td>{member.username}</td>
                      <td>{member.email}</td>
                      <td>{member.phone}</td>
                      <td>{member.cnic}</td>
                      <td>{member.role?.name}</td>
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
                              <Link
                                className="dropdown-item"
                                onClick={() => openModal(member)} // Open update modal
                              >
                                Update
                              </Link>
                              <Link
                                className="dropdown-item"
                                onClick={() => openViewModal(member)} // Open view modal
                              >
                                View
                              </Link>
                              <div className="dropdown-divider"></div>
                              <Link
                                className="dropdown-item text-danger"
                                href="#!"
                                onClick={() => handleDelete(member._id)} // Delete user on click
                              >
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No staff available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for Add/Update Staff */}
      {isModalOpen && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          aria-hidden="false"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isUpdate ? "Update Staff" : "Add Staff"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={isUpdate ? updateStaff : addStaff}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={staffData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={staffData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={staffData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="cnic">
                      CNIC
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cnic"
                      name="cnic"
                      value={staffData.cnic}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {!isUpdate && (
                    <div className="mb-3">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={staffData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="role">
                      Role
                    </label>
                    <select
                      className="form-control"
                      id="role"
                      name="role"
                      value={staffData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="" selected disabled>
                        Select Role
                      </option>
                      {roles.map((role) => (
                        <option key={role._id} value={role._id}>
                          {role.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-end">
                    <button type="submit" className="btn btn-primary">
                      {isUpdate ? "Update" : "Add"} Staff
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for View Staff */}
      {isViewModalOpen && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          aria-hidden="false"
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">View Staff</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsViewModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <strong>Username:</strong>
                  <p>{staffData.username}</p>
                </div>
                <div className="mb-3">
                  <strong>Email:</strong>
                  <p>{staffData.email}</p>
                </div>
                <div className="mb-3">
                  <strong>Phone:</strong>
                  <p>{staffData.phone}</p>
                </div>
                <div className="mb-3">
                  <strong>CNIC:</strong>
                  <p>{staffData.cnic}</p>
                </div>
                <div className="mb-3">
                  <strong>Role:</strong>
                  <p>{staffData.role?.name || "N/A"}</p>{" "}
                  {/* Access role.name or show "N/A" */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Staffread;
