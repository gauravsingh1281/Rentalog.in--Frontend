import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Login, Registration, Dashboard } from "./pages";
import AddNewRental from "./components/dashboard-components/AddNewRental/AddNewRental";
import SearchRental from "./components/dashboard-components/SearchRental-section/SearchRental";
import RenterDetails from "./components/dashboard-components/RenterDetails/RenterDetails";
import PaymentsRecord from "./components/dashboard-components/PaymentsRecord/PaymentsRecord";
import TotalRentCollected from "./components/dashboard-components/TotalRentCollected/TotalRentCollected";
import PropertyListing from "./components/dashboard-components/PropertyListing/PropertyListing";
import ListedProperty from "./components/dashboard-components/ListedProperty/ListedProperty";
import CreateNewRental from "./components/dashboard-components/CreateNewRental/CreateNewRental";
import Contributors from "./components/Contributors-page/Contributors";
import ForgotPassword from "./pages/ForgotPassword";
import AdminDashboard from "./components/Admin-Dashboard/AdminDashboard";
import Loader from "./components/Loader/Loader"; // Import the Loader component
import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Set loading to true when the app starts or before fetching data
    setLoading(true);

    // Simulate loading for 1 second (for demo purposes)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/searchrenter" element={<SearchRental />} />
          <Route
            path="/dashboard/createnewrenter"
            element={<CreateNewRental />}
          />
          <Route path="/dashboard/addnewrenter" element={<AddNewRental />} />
          <Route path="/dashboard/renterdetails" element={<RenterDetails />} />
          <Route
            path="/dashboard/paymentsrecord"
            element={<PaymentsRecord />}
          />
          <Route path="/Contributors" element={<Contributors />} />
          <Route
            path="/dashboard/totalrentcollected"
            element={<TotalRentCollected />}
          />
          <Route
            path="/dashboard/propertylisting"
            element={<PropertyListing />}
          />
          <Route
            path="/dashboard/listedproperty"
            element={<ListedProperty />}
          />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      )}
    </>
  );
};

export default App;
