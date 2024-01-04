import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="carousel rounded-box">
        <div className="ml-10 p-12 rounded-lg carousel-item bg-red text-white font-semibold text-xl/8">
          User
        </div>
        <div className="p-12 rounded-lg carousel-item bg-blue text-white font-semibold text-xl/8">
          Order
        </div>
        <div className="p-12 rounded-lg carousel-item bg-red text-white font-semibold text-xl/8">
          Price
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
