import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Roomtype = () => {
  const [roomtypes, setRoomtypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roomtypeData, setRoomtypeData] = useState({
    type: "",
    halfdayprice: "",
    fulldayprice: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [viewRoomtype, setViewRoomtype] = useState(null); // State for viewing roomtype details

  // Fetch roomtypes from the backend
  const fetchRoomtypes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/roomtype/");
      setRoomtypes(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching roomtypes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoomtypes();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomtypeData({ ...roomtypeData, [name]: value });
  };

  // Add new roomtype
  const addRoomtype = async (e) => {
    e.preventDefault();

    const preparedRoomtypeData = {
      ...roomtypeData,
      type: roomtypeData.type.trim(),
    };

    try {
      const existingRoomtypesResponse = await axios.get(
        "http://localhost:5000/api/roomtype/"
      );
      const existingRoomtypes = existingRoomtypesResponse.data;

      const duplicateRoomtype = existingRoomtypes.find(
        (roomtype) => roomtype.type === preparedRoomtypeData.type
      );

      if (duplicateRoomtype) {
        toast.error("A roomtype with the same name already exists.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/roomtype/create",
        preparedRoomtypeData
      );
      toast.success("Roomtype created successfully!");

      fetchRoomtypes();
      setRoomtypeData({ type: "", halfdayprice: "", fulldayprice: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error creating roomtype:", error);
      toast.error("An error occurred while creating the roomtype.");
    }
  };

  // Update existing roomtype
  const updateRoomtype = async (e) => {
    e.preventDefault();

    const { _id, __v, ...roomtypeUpdateData } = roomtypeData;

    // Validate that the roomtype type contains no special characters
    roomtypeUpdateData.type = roomtypeUpdateData.type.trim();

    try {
      const existingRoomtypesResponse = await axios.get(
        "http://localhost:5000/api/roomtype/"
      );
      const existingRoomtypes = existingRoomtypesResponse.data;

      const duplicateRoomtype = existingRoomtypes.find(
        (roomtype) =>
          roomtype.type === roomtypeUpdateData.type && roomtype._id !== _id
      );

      if (duplicateRoomtype) {
        toast.error("A roomtype with the same name already exists.");
        return;
      }

      const response = await axios.put(
        `http://localhost:5000/api/roomtype/update/${_id}`,
        roomtypeUpdateData
      );

      toast.success("Roomtype updated successfully!");
      fetchRoomtypes(); // Refresh roomtypes
      setRoomtypeData({ type: "", halfdayprice: "", fulldayprice: "" }); // Reset form
      setIsModalOpen(false); // Close modal
    } catch (error) {
      console.error("Error updating roomtype:", error);
      toast.error("An error occurred while updating the roomtype.");
    }
  };

  // Delete roomtype
  const handleDelete = async (roomtypeId) => {
    if (window.confirm("Are you sure you want to delete this roomtype?")) {
      try {
        await axios.delete(
          `http://localhost:5000/api/roomtype/delete/${roomtypeId}`
        );
        toast.success("Roomtype deleted successfully!");
        setRoomtypes(
          roomtypes.filter((roomtype) => roomtype._id !== roomtypeId)
        );
      } catch (error) {
        console.error("Error deleting roomtype:", error);
        toast.error("An error occurred while deleting the roomtype.");
      }
    }
  };

  // Open modal for adding or updating a roomtype
  const openModal = (roomtype = null) => {
    if (roomtype) {
      setIsUpdate(true);
      setRoomtypeData(roomtype);
    } else {
      setIsUpdate(false);
      setRoomtypeData({ type: "", halfdayprice: "", fulldayprice: "" });
    }
    setIsModalOpen(true);
  };

  // Open modal for viewing roomtype details
  const openViewModal = (roomtype) => {
    setViewRoomtype(roomtype);
  };

  // Close the view modal
  const closeViewModal = () => {
    setViewRoomtype(null);
  };

  return (
    <>
      <div className="card mb-3" id="roomtypesTable">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-4 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-9 mb-0 text-nowrap py-2 py-xl-0">Roomtypes</h5>
            </div>
            <div className="col-8 col-sm-auto ms-auto text-end ps-0">
              <button
                className="btn btn-falcon-default btn-sm"
                type="button"
                onClick={() => openModal()}
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
                  <th>Type</th>
                  <th>Halfday Price</th>
                  <th>Fullday Price</th>
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
                ) : roomtypes.length > 0 ? (
                  roomtypes.map((roomtype, index) => (
                    <tr key={roomtype._id}>
                      <td>{index + 1}</td>
                      <td>{roomtype.type}</td>
                      <td>{roomtype.halfdayprice}</td>
                      <td>{roomtype.fulldayprice}</td>
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
                                href="#!"
                                onClick={() => openModal(roomtype)}
                              >
                                Update
                              </Link>
                              <Link
                                className="dropdown-item"
                                href="#!"
                                onClick={() => openViewModal(roomtype)} // Open view modal
                              >
                                View
                              </Link>
                              <div className="dropdown-divider"></div>
                              <Link
                                className="dropdown-item text-danger"
                                href="#!"
                                onClick={() => handleDelete(roomtype._id)}
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
                    <td colSpan="5" className="text-center">
                      No roomtypes found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for adding or updating a roomtype */}
      {isModalOpen && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isUpdate ? "Update Roomtype" : "Add New Roomtype"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={isUpdate ? updateRoomtype : addRoomtype}>
                  <div className="mb-3">
                    <label htmlFor="type" className="form-label">
                      Type
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      name="type"
                      value={roomtypeData.type}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="halfdayprice" className="form-label">
                      Halfday Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="halfdayprice"
                      name="halfdayprice"
                      value={roomtypeData.halfdayprice}
                      onChange={handleChange}
                      required
                      min={1}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="fulldayprice" className="form-label">
                      Fullday Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="fulldayprice"
                      name="fulldayprice"
                      value={roomtypeData.fulldayprice}
                      onChange={handleChange}
                      required
                      min={1}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {isUpdate ? "Update Roomtype" : "Add Roomtype"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for viewing roomtype details */}
      {viewRoomtype && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">View Roomtype Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeViewModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Type:</strong> {viewRoomtype.type}
                </p>
                <p>
                  <strong>Halfday Price:</strong> {viewRoomtype.halfdayprice}
                </p>
                <p>
                  <strong>Fullday Price:</strong> {viewRoomtype.fulldayprice}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
};

export default Roomtype;
