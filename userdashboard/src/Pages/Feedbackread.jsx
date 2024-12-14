import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Feedbackread = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedbackData, setFeedbackData] = useState({
    _id: "",
    guest: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false); // Add/Update modal
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // View modal
  const [isUpdate, setIsUpdate] = useState(false); // Track if the modal is for update

  // Fetch feedback items data
  const fetchFeedbackItems = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/feedback");
      setFeedbackItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching feedback items:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  // Submit to add new feedback item
  const handleAddFeedback = async (e) => {
    e.preventDefault();

    try {
      // Validate guest ID before sending the request
      const response = await axios.get("http://localhost:5000/api/guest/");

      // Check if the guest ID is in the list of valid guests
      const validGuests = response.data.map((guest) => guest._id); // Extract guest IDs
      if (!validGuests.includes(feedbackData.guest)) {
        toast.error("Invalid Guest ID!");
        return;
      }

      // Add laundry ID if required
      if (!feedbackData.laundryid) {
        toast.error("Laundry ID is required!");
        return;
      }

      // Send request to the server to add the new feedback item
      const feedbackResponse = await axios.post(
        "http://localhost:5000/api/feedback/create",
        feedbackData
      );

      toast.success("Feedback added successfully!");

      // Reset the form fields
      setFeedbackData({ guest: "", message: "", laundryid: "" });

      // Refresh the feedback items list
      fetchFeedbackItems();

      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        toast.error(
          `Error: ${
            error.response.data.message || "Failed to add feedback item."
          }`
        );
      } else {
        console.error("Error adding feedback item:", error);
        toast.error("Failed to add feedback item.");
      }
    }
  };

  const handleUpdateFeedback = async (e) => {
    e.preventDefault();

    try {
      const { _id, __v, ...updatedData } = feedbackData;

      // Send request to the server to update the feedback item
      await axios.put(
        `http://localhost:5000/api/feedback/update/${_id}`,
        updatedData
      );
      toast.success("Feedback updated successfully!");

      // Reset the form fields
      setFeedbackData({ guest: "", message: "" });

      // Refresh the feedback items list
      fetchFeedbackItems();

      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating feedback item:", error);
      toast.error("Failed to update feedback item.");
    }
  };

  // Handle delete
  const handleDelete = async (feedbackId) => {
    if (window.confirm("Are you sure you want to delete this feedback item?")) {
      try {
        await axios.delete(
          `http://localhost:5000/api/feedback/delete/${feedbackId}`
        );
        toast.success("Feedback item deleted successfully!");
        setFeedbackItems(
          feedbackItems.filter((item) => item._id !== feedbackId)
        );
      } catch (error) {
        console.error("Error deleting feedback item:", error);
        toast.error("Failed to delete feedback item.");
      }
    }
  };

  // Open modal to add new feedback item
  const openAddModal = () => {
    setIsUpdate(false);
    setFeedbackData({ guest: "", message: "" });
    setIsModalOpen(true);
  };

  // Open modal to update feedback item
  const openUpdateModal = (item) => {
    setIsUpdate(true);
    setFeedbackData({ ...item });
    setIsModalOpen(true);
  };

  // Open modal to view feedback item details
  const openViewModal = (item) => {
    setFeedbackData(item);
    setIsViewModalOpen(true);
  };

  return (
    <>
      <div className="card mb-3" id="feedbackTable">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-4 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-9 mb-0 text-nowrap py-2 py-xl-0">Feedback</h5>
            </div>
            <div className="col-8 col-sm-auto ms-auto text-end ps-0">
              <button
                className="btn btn-falcon-default btn-sm"
                type="button"
                onClick={openAddModal}
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
                  <th>Guest</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : feedbackItems.length > 0 ? (
                  feedbackItems.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.guest}</td>
                      <td>{item.message}</td>
                      <td className="py-2 align-middle white-space-nowrap text-end">
                        <div className="dropdown font-sans-serif position-static">
                          <button
                            className="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal"
                            type="button"
                            id="feedback-dropdown-0"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="fas fa-ellipsis-h fs-10"></span>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-end border py-0"
                            aria-labelledby="feedback-dropdown-0"
                          >
                            <div className="py-2">
                              <Link
                                className="dropdown-item"
                                onClick={() => openUpdateModal(item)} // Open update modal
                              >
                                Update
                              </Link>
                              <Link
                                className="dropdown-item"
                                onClick={() => openViewModal(item)} // Open view modal
                              >
                                View
                              </Link>
                              <div className="dropdown-divider"></div>
                              <Link
                                className="dropdown-item text-danger"
                                onClick={() => handleDelete(item._id)} // Delete feedback item
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
                    <td colSpan="4" className="text-center">
                      No feedback items found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Update Modal */}
      {isModalOpen && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isUpdate ? "Update Feedback" : "Add New Feedback"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={isUpdate ? handleUpdateFeedback : handleAddFeedback}
                >
                  <div className="mb-3">
                    <label htmlFor="guest" className="form-label">
                      Guest ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="guest"
                      name="guest"
                      value={feedbackData.guest}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={feedbackData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      {isUpdate ? "Update" : "Add"} Feedback
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {isViewModalOpen && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Feedback Details</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsViewModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Guest ID:</strong> {feedbackData.guest}
                </p>
                <p>
                  <strong>Message:</strong> {feedbackData.message}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsViewModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast notifications */}
      <ToastContainer />
    </>
  );
};

export default Feedbackread;
