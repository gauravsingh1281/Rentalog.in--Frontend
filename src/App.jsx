import "./App.css";
import Footer from "./components/Footer-section/Footer";
import Header from "./components/Header-section/Header";
import Connect from "./components/connectUs-section/Connect";
import AboutUs from "./components/AboutUs-section/AboutUs";
import Services from "./components/Services-section/Services-section";
import Dashboard from "./components/Admin-Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Header />
      <Services />
      
      <AboutUs />
      <Connect />
      <Footer />
      <section id="dashboard">
        <Dashboard />
      </section>
    </>
  );
};

export default App;
