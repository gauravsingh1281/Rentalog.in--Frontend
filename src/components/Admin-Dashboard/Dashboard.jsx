import React from "react";

const dashboardItems = [
  { id: 1, title: "Add New Renter" },
  { id: 2, title: "Renter's Details" },
  { id: 3, title: "Renter's Payment Records" },
  { id: 4, title: "Search Renter" },
  { id: 5, title: "Total Rent Collected" },
  { id: 6, title: "Property Listing" },
];

const Dashboard = () => {
  return (
    <div className="flex-col mt-10 md:flex md:flex-row md:flex-wrap md:justify-between gap-5 mx-5 md:mx-10 gap-y-5">
      {dashboardItems.map((item, index) => {
        return (
          <div
            className="flex justify-center items-center border border-gray-light h-[15rem] shadow-xl rounded text-center text-[1.5em]  md:flex   md:w-[25%] mb-5 md:mb-0"
            key={item.id}
          >
            <h3 key={index}>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
