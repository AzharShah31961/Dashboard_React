import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Roleread = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roleData, setRoleData] = useState({
    name: "",
    status: "active",
    limit: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  // Fetch roles from the backend
  const fetchRoles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/role/");
      setRoles(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching roles:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoleData({ ...roleData, [name]: value });
  };

  // Add new role
  const addRole = async (e) => {
    e.preventDefault();
    console.log("Adding role:", roleData); // Debug the roleData object

    try {
      const response = await axios.post("http://localhost:5000/api/role/create", roleData);
      console.log("Create response:", response); // Log the response
      toast.success("Role created successfully!");
      fetchRoles(); // Refresh the roles list
      setRoleData({ name: "", status: "active", limit: "" }); // Reset form
      setIsModalOpen(false); // Close modal
    } catch (error) {
      console.error("Error creating role:", error);
      toast.error("An error occurred while creating the role.");
    }
  };

  // Update existing role
  const updateRole = async (e) => {
    e.preventDefault();
  
    // Exclude `_id` and `__v` from roleData
    const { _id, __v, ...roleUpdateData } = roleData;
  
    try {
      const response = await axios.put(
        `http://localhost:5000/api/role/update/${_id}`,
        roleUpdateData // Send only the fields needed for update
      );
  
      console.log("Update response:", response.data);
      toast.success("Role updated successfully!");
  
      fetchRoles(); // Refresh the roles list
      setRoleData({ name: "", status: "active", limit: 0 }); // Reset form
      setIsModalOpen(false); // Close the modal
    } catch (error) {
      console.error("Error updating role:", error.response || error);
      toast.error(
        error.response?.data?.message || "An error occurred while updating the role."
      );
    }
  };
  
  
  
  

  // Delete role
  const handleDelete = async (roleId) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      try {
        await axios.delete(`http://localhost:5000/api/role/delete/${roleId}`);
        toast.success("Role deleted successfully!");
        setRoles(roles.filter((role) => role._id !== roleId));
      } catch (error) {
        console.error("Error deleting role:", error);
        toast.error("An error occurred while deleting the role.");
      }
    }
  };

  // Open modal for adding or updating a role
  const openModal = (role = null) => {
    if (role) {
      setIsUpdate(true);
      setRoleData(role); // Set data for update
    } else {
      setIsUpdate(false);
      setRoleData({ name: "", status: "active", limit: "" }); // Reset form for new role
    }
    setIsModalOpen(true); // Show modal
  };

  return (
    <>
      <div className="card mb-3" id="rolesTable">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-4 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-9 mb-0 text-nowrap py-2 py-xl-0">Roles</h5>
            </div>
            <div className="col-8 col-sm-auto ms-auto text-end ps-0">
              <button
                className="btn btn-falcon-default btn-sm"
                type="button"
                onClick={() => openModal()} // Open the modal to add new role
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
                  <th>Name</th>
                  <th>Status</th>
                  <th>Limit</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : roles.length > 0 ? (
                  roles.map((role, index) => (
                    <tr key={role._id}>
                      <td>{index + 1}</td>
                      <td>{role.name}</td>
                      <td>{role.status}</td>
                      <td>{role.limit}</td>
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
                                onClick={() => openModal(role)} // Open update modal
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
                                onClick={() => handleDelete(role._id)} // Delete user on click
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
                      No roles found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for adding or updating a role */}
      {isModalOpen && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isUpdate ? "Update Role" : "Add New Role"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={isUpdate ? updateRole : addRole}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={roleData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">
                      Status
                    </label>
                    <select
                      className="form-control"
                      id="status"
                      name="status"
                      value={roleData.status}
                      onChange={handleChange}
                      required
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="limit" className="form-label">
                      Limit
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="limit"
                      name="limit"
                      value={roleData.limit}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {isUpdate ? "Update Role" : "Add Role"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default Roleread;
