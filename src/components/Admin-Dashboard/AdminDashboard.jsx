import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import clickSound from "../../assets/mixkit-mouse-click-close-1113.wav"; // Import the sound effect
import AdminDashboardImage from "../../assets/Images/AdminDashboardImage.png";
import Navbar from "../Header-section/Navbar";
import Footer from "../Footer-section/Footer";

const AdminDashboard = () => {
  const widgets = [
    {
      id: 1,
      name: "Rental's Details",
    },
    {
      id: 2,
      name: "Rent Payment Record",
    },
    {
      id: 3,
      name: "Property Listing",
    },
    {
      id: 4,
      name: "Tenant Management",
    },
    {
      id: 5,
      name: "Tenant Feedback",
    },
    {
      id: 6,
      name: "Tenant Complains",
    },
  ];

  const navigate = useNavigate();

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const handleLogout = () => {
    playSound(); // Play sound effect on logout
    // Clear session data (e.g., token from localStorage)
    localStorage.removeItem("userToken");
    // Redirect to login page
    navigate("/");
  };

  return (
    <>
      <Navbar />
      {/* welcome section + responseive*/}
      <section className='admin-dashboard min-h-screen flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-32'>
        <div className='textColor pt-52 md:pt-36 md:py-40 lg:py-52'>
          <h1 className='text-4xl lg:text-6xl font-bold'>Dashboard</h1>
          <p className='text-xl lg:text-2xl mt-3 lg:mt-8'>
            Hello{" "}
            <span className='adminName'>
              {"< "}Admin{" >"}
            </span>
            , Welcome to your Dashboard
          </p>
        </div>
        {/* image section */}
        <div>
          <img
            src={AdminDashboardImage}
            alt='admin-dashboard-img'
            className='md:w-[200px] lg:w-[400px]'
          />
        </div>
      </section>

      {/* actions section */}
      <section className='min-h-screen widgetSection'>
        <div className=' py-16 px-4 md:px-12 lg:px-32 textColor'>
          <div className='flex justify-between'>
            <h1 className='text-4xl lg:text-5xl font-bold lg:font-semibold'>
              widgets
            </h1>
            <button className='px-3 py-3 lg:px-5 lg:py-4 font-semibold bg-textWhite  rounded-md text-xs'>
              create new Rental
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20 mb-8'>
            {widgets.map((widget, id) => (
              <div className='flex items-center justify-center bg-textWhite rounded-md py-16 shadow-widget hover:shadow-widget-hover transition-all duration-300 cursor-pointer'>
                {widget.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer  */}
      <Footer />
    </>
  );
};

export default AdminDashboard;
