import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Guestread = () => {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [guestData, setGuestData] = useState({
    name: "",
    email: "",
    phone: "",
    documenttype: "",
    documentno: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  // Fetch guests
  const fetchGuests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/guest/");
      setGuests(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching guests:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setGuestData({ ...guestData, [name]: value });
  };

  // Add new guest
  const addGuest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/guest/create", guestData);
      toast.success("Guest created successfully!");
      fetchGuests(); // Refresh the guest list
      setGuestData({
        name: "",
        email: "",
        phone: "",
        documenttype: "",
        documentno: "",
      });
      setIsModalOpen(false); // Close modal
    } catch (error) {
      toast.error("An error occurred while creating the guest.");
    }
  };

  // Update existing guest
  const updateGuest = async (e) => {
    e.preventDefault();
    const { _id, __v, ...guestUpdateData } = guestData; // Exclude `_id`
    try {
      const response = await axios.put(`http://localhost:5000/api/guest/update/${_id}`, guestUpdateData);
      toast.success("Guest updated successfully!");
      fetchGuests(); // Refresh the guest list
      setGuestData({
        name: "",
        email: "",
        phone: "",
        documenttype: "",
        documentno: "",
      });
      setIsModalOpen(false); // Close modal
    } catch (error) {
      toast.error("An error occurred while updating the guest.");
    }
  };

  // Delete guest
  const handleDelete = async (guestId) => {
    if (window.confirm("Are you sure you want to delete this guest?")) {
      try {
        await axios.delete(`http://localhost:5000/api/guest/delete/${guestId}`);
        toast.success("Guest deleted successfully!");
        setGuests(guests.filter((guest) => guest._id !== guestId));
      } catch (error) {
        toast.error("An error occurred while deleting the guest.");
      }
    }
  };

  // Open modal for adding or updating guest
  const openModal = (guest = null) => {
    if (guest) {
      setIsUpdate(true);
      setGuestData({
        ...guest,  // Spread the guest data
        documenttype: guest.documenttype || "", // Ensure document type is set correctly
      });
    } else {
      setIsUpdate(false);
      setGuestData({
        name: "",
        email: "",
        phone: "",
        documenttype: "",
        documentno: "",
      });
    }
    setIsModalOpen(true); // Show modal
  };

  return (
    <>
      <div className="card mb-3" id="guestTable">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-4 col-sm-auto d-flex align-items-center pe-0">
              <h5 className="fs-9 mb-0 text-nowrap py-2 py-xl-0">Guests</h5>
            </div>
            <div className="col-8 col-sm-auto ms-auto text-end ps-0">
              <button
                className="btn btn-falcon-default btn-sm"
                type="button"
                onClick={() => openModal()} // Open the modal to add new guest
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
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Document Type</th>
                  <th>Document No</th>
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
                ) : guests.length > 0 ? (
                  guests.map((guest, index) => (
                    <tr key={guest._id}>
                      <td>{index + 1}</td>
                      <td>{guest.name}</td>
                      <td>{guest.email}</td>
                      <td>{guest.phone}</td>
                      <td>{guest.documenttype}</td>
                      <td>{guest.documentno}</td>
                      <td className="py-2 align-middle white-space-nowrap text-end">
                        <button
                          className="btn btn-primary me-2"
                          onClick={() => openModal(guest)} // Open update modal
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(guest._id)} // Delete guest
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No guests found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal for adding or updating guest */}
      {isModalOpen && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {isUpdate ? "Update Guest" : "Add New Guest"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setIsModalOpen(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={isUpdate ? updateGuest : addGuest}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={guestData.name}
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
                      value={guestData.email}
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
                      value={guestData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="documenttype" className="form-label">
                      Document Type
                    </label>
                    <select
                      className="form-control"
                      id="documenttype"
                      name="documenttype"
                      value={guestData.documenttype}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Document Type</option>
                      <option value="passport">Passport</option>
                      <option value="cnic">CNIC</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="documentno" className="form-label">
                      Document No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="documentno"
                      name="documentno"
                      value={guestData.documentno}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {isUpdate ? "Update" : "Add"} Guest
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </>
  );
};

export default Guestread;
