import Navbar from '../components/Header-section/Navbar';
import Header from "../components/dashboard-components/Header-section/Header";
import WidgetSection from "../components/dashboard-components/Widget-section/Widget-section";
import Footer from "../components/Footer-section/Footer";
import ScrollToTop from "react-scroll-to-top";
import FeedbackPage from './FeedbackPage';



const Dashboard = () => {
    return(
        <>
        <Navbar/>
        <Header/>
        <WidgetSection/>
        <Footer/>
        <ScrollToTop
        smooth
        color="darkgreen"
        className="flex justify-center hover:scale-125 duration-200 transition items-center p-1"
      />
      <FeedbackPage/>
        </>
    )
}

export default Dashboard