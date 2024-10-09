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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/searchrenter" element={<SearchRental />} />
      <Route path="/dashboard/createnewrenter" element={<CreateNewRental />} />
      <Route path="/dashboard/addnewrenter" element={<AddNewRental />} />
      <Route path="/dashboard/renterdetails" element={<RenterDetails />} />
      <Route path="/dashboard/paymentsrecord" element={<PaymentsRecord />} />
      <Route
        path="/dashboard/totalrentcollected"
        element={<TotalRentCollected />}
      />
      <Route path="/dashboard/propertylisting" element={<PropertyListing />} />
      <Route path="/dashboard/listedproperty" element={<ListedProperty />} />
    </Routes>
  );
};

export default App;
