import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaCheck, FaTimes } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageBookings = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch bookings data
  const { refetch, data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });

  const handleConfirmBooking = (bookingId) => {
    axiosSecure.patch(`/bookings/confirm/${bookingId}`).then((res) => {
      alert(`Booking confirmed successfully`);
      refetch();
    });
  };

  const handleRejectBooking = (bookingId) => {
    axiosSecure.patch(`/bookings/reject/${bookingId}`).then((res) => {
      alert(`Booking rejected successfully`);
      refetch();
    });
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-28 flex flex-col items-center justify-center">
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Manage Bookings
            </h2>
          </div>
        </div>
      </div>

      {/* Table */}
      {bookings.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* Head */}
              <thead className="bg-blue text-white rounded-sm">
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{booking.user.name}</td>
                    <td>{booking.item.name}</td>
                    <td>Rs {booking.price}</td>
                    <td>{booking.status}</td>
                    <td>
                      {booking.status === "pending" && (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleConfirmBooking(booking._id)}
                            className="btn btn-sm bg-green-500 text-white"
                          >
                            <FaCheck />
                          </button>
                          <button
                            onClick={() => handleRejectBooking(booking._id)}
                            className="btn btn-sm bg-red-500 text-white"
                          >
                            <FaTimes />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr />
        </div>
      ) : (
        <div className="text-center mt-20">
          <p>No bookings available.</p>
        </div>
      )}
    </div>
  );
};

export default ManageBookings;
