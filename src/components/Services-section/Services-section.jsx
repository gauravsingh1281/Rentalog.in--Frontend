import React from "react";
import iconPerson from "../../assets/Icons/icon-person.png";
import iconCalendar from "../../assets/Icons/icon-calendar.png";
import iconHome from "../../assets/Icons/icon-home.png";
import iconPencil from "../../assets/Icons/icon-pencil.png";

const Services = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-[#312F2F] text-center pt-10">
        Our Services Includes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-36">
        <div className="bg-[#EBB4B6]  rounded-xl">
          <div className="flex gap-4 p-8">
            <img
              className="w-10 h-10 mt-1.5"
              src={iconPerson}
              alt="iconPerson"
            ></img>
            <h1 className="text-[#312F2F] font-bold text-2xl">
              Tenant Management
            </h1>
          </div>
          <p className="px-8 pb-20">
            Store and access your renters' personal information like name,
            address, and phone number with ease.
          </p>
        </div>
        <div className="bg-[#D1F2EB]  rounded-xl">
          <div className="flex gap-4 p-8">
            <img
              className="w-10 h-11 mt-2"
              src={iconCalendar}
              alt="iconCalendar"
            ></img>
            <h1 className="text-[#312F2F] font-bold text-2xl">
              Track Payment Records
            </h1>
          </div>
          <p className="px-8 pb-20">
            {" "}
            Keep a record of all your renters' monthly rent payments and have a
            complete overview of your rental income.
          </p>
        </div>
        <div className="bg-[#D1F2EB]  rounded-xl">
          <div className="flex gap-4 p-8">
            <img
              className="w-10 h-11 mt-1"
              src={iconPencil}
              alt="iconPencil"
            ></img>
            <h1 className="text-[#312F2F] font-bold text-2xl">
              Rent Calculation
            </h1>
          </div>
          <p className="px-8 pb-20">
            Automatically calculate the total rent received each month and see a
            breakdown of payments. Get Started
          </p>
        </div>
        <div className="bg-[#EBB4B6]  rounded-xl">
          <div className="flex gap-4 p-8">
            <img className="w-10 h-10 " src={iconHome} alt="iconHome"></img>
            <h1 className="text-[#312F2F] font-bold text-2xl">
              Property Listing
            </h1>
          </div>
          <p className="px-8 pb-20">
            Store and access your renters' personal information like name,
            address, and phone number with ease.
          </p>
        </div>
      </div>
      <div className="bg-[#D1F2EB] my-20 ">
        <h1 className="text-5xl font-semibold text-[#312F2F] text-center py-10">
          Our Services are available in
        </h1>
        <div className="flex justify-center items-center flex-row pb-14 gap-16 px-10">
          <div className="flex items-center gap-8 flex-col">
            <h1 className="bg-[#EBB4B6] w-28 h-28   rounded-full"></h1>
            <h1 className="text-xl font-medium">Delhi</h1>
          </div>
          <div className="flex items-center gap-8 flex-col">
            <h1 className="bg-[#EBB4B6] w-28 h-28 rounded-full"></h1>
            <h1 className="text-xl font-medium">Goa</h1>
          </div>
          <div className="flex items-center gap-8 flex-col">
            <h1 className="bg-[#EBB4B6] w-28 h-28   rounded-full"></h1>
            <h1 className="text-xl font-medium">Mumbai</h1>
          </div>
          <div className="flex items-center gap-8 flex-col">
            <h1 className="bg-[#EBB4B6] w-28 h-28 rounded-full"></h1>
            <h1 className="text-xl font-medium">Amritsar</h1>
          </div>
          <div className="flex items-center gap-8 flex-col">
            <h1 className="bg-[#EBB4B6] w-28 h-28   rounded-full"></h1>
            <h1 className="text-xl font-medium">Delhi</h1>
          </div>
          <div className="flex items-center gap-8 flex-col">
            <h1 className="bg-[#EBB4B6] w-28 h-28 rounded-full"></h1>
            <h1 className="text-xl font-medium">Goa</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
