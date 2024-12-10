import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // Fetch staff and roles
  const fetchStaff = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/staff/");
      
      // Assuming each staff member has a `role` field with an ID
      const staffWithRoles = await Promise.all(
        response.data.map(async (staffMember) => {
          // Fetch the role details for each staff member
          const roleResponse = await axios.get(`http://localhost:5000/api/role/${staffMember.role}`);
          return {
            ...staffMember,
            role: roleResponse.data,  // Attach the full role object
          };
        })
      );
  
      setStaff(staffWithRoles);  // Update the staff list with role data
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
    setStaffData({ ...staffData, [name]: value });
  };

  // Add new staff
  const addStaff = async (e) => {
    e.preventDefault();
  
    console.log("Staff Data:", staffData);  // Log to ensure role is included
  
    try {
      const response = await axios.post("http://localhost:5000/api/staff/create", staffData);
      console.log("Create response:", response);
      toast.success("Staff created successfully!");
      fetchStaff(); // Refresh the staff list
      setStaffData({
        username: "",
        email: "",
        phone: "",
        cnic: "",
        password: "",
        role: "",  // Reset the role field after submission
      });
      setIsModalOpen(false); // Close modal
    } catch (error) {
      console.error("Error creating staff:", error);
      toast.error("An error occurred while creating the staff.");
    }
  };
  

  // Update existing staff
  const updateStaff = async (e) => {
    e.preventDefault();

    const { _id, __v, ...staffUpdateData } = staffData; // Exclude `_id` and `__v`

    try {
      const response = await axios.put(
        `http://localhost:5000/api/staff/update/${_id}`,
        staffUpdateData
      );
      console.log("Update response:", response.data);
      toast.success("Staff updated successfully!");
      fetchStaff(); // Refresh the staff list
      setStaffData({
        username: "",
        email: "",
        phone: "",
        cnic: "",
        password: "",
        role: "",
      }); // Reset form
      setIsModalOpen(false); // Close modal
    } catch (error) {
      console.error("Error updating staff:", error.response || error);
      toast.error(
        error.response?.data?.message || "An error occurred while updating the staff."
      );
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
        toast.error("An error occurred while deleting the staff.");
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
  
  const opendetailModal = (member = null) => {
    if (member) {
      setIsUpdate(false); // Set to false for view mode
      setStaffData({
        ...member,  // Spread the member data
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
                      <td>{member.role?.name }</td>
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
                                onClick={() => openModal(member)}
                                // Open update modal
                              >
                                Update
                              </a>
                              <a
                                className="dropdown-item"
                                onClick={() => opendetailModal(member)}
                                
                              >
                                View
                              </a>
                              <div className="dropdown-divider"></div>
                              <a
                                className="dropdown-item text-danger"
                                href="#!"
                                onClick={() => handleDelete(member._id)} // Delete user on click
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
                    <td colSpan="7" className="text-center">
                      No staff found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for adding or updating staff */}
    {/* Modal for adding or updating staff */}
    {isModalOpen && (
  <div className="modal show" style={{ display: "block" }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            {isUpdate ? "Update Staff" : "View Staff"} {/* Update title dynamically */}
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setIsModalOpen(false)} // Close modal
          ></button>
        </div>
        <div className="modal-body">
          <form onSubmit={isUpdate ? updateStaff : null}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={staffData.username}
                onChange={handleChange}
                readOnly={!isUpdate} // Read-only in View mode
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
                value={staffData.email}
                onChange={handleChange}
                readOnly={!isUpdate} // Read-only in View mode
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
                value={staffData.phone}
                onChange={handleChange}
                readOnly={!isUpdate} // Read-only in View mode
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cnic" className="form-label">
                CNIC
              </label>
              <input
                type="text"
                className="form-control"
                id="cnic"
                name="cnic"
                value={staffData.cnic}
                onChange={handleChange}
                readOnly={!isUpdate} // Read-only in View mode
              />
            </div>

            <div className="mb-3">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                className="form-control"
                id="role"
                name="role"
                value={staffData.role}
                onChange={handleChange}
                disabled={!isUpdate} // Disabled in View mode
                required
              >
                <option value="">Select Role</option>
                {roles.map((role) => (
                  <option key={role._id} value={role._id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            {isUpdate && (
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Update Staff
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  </div>
)}

  </>
);
};

export default Staffread;
