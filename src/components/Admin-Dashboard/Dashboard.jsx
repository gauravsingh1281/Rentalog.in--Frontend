import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ReactDom from "react-dom";

const dashboardItems = [
  { id: 1, title: "Add New Renter", link: "/add-renter" },
  { id: 2, title: "Renter's Details", link: "/renter-details" },
  { id: 3, title: "Renter's Payment Records", link: "/renter-payment-records" },
  { id: 4, title: "Search Renter", link: "/search-renter" },
  { id: 5, title: "Total Rent Collected", link: "/total-rent-collected" },
  { id: 6, title: "Property Listing", link: "/property-listing" },
];

const DASBOARD_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  zIndex: 1000,
  backgroundColor: "white",
  padding: "2rem",
  width: "95%",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  backgroundColor: "rgba(0,0,0,0.7)",
  overflow: "hidden",
};

const Dashboard = ({ open, onClose }) => {
  const navigate = useNavigate();

  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <article style={OVERLAY_STYLES}>
        <section style={DASBOARD_STYLES}>
          <div
            className="flex justify-end text-2xl cursor-pointer"
            onClick={onClose}
          >
            X
          </div>
          <div className="flex-col my-10 md:flex md:flex-row md:flex-wrap md:justify-between gap-5 mx-5 md:mx-10 gap-y-5">
            {dashboardItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex justify-center items-center border border-gray-light h-[15rem] shadow-xl rounded text-center text-[1.5em]  md:flex   md:w-[25%] mb-5 md:mb-0"
                >
                  <h3
                    onClick={() => {
                      navigate(item.link);
                      onClose();
                    }}
                    className="text-blue cursor-pointer"
                  >
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>
      </article>
    </>,
    document.getElementById("portal")
  );
};

export default Dashboard;

Dashboard.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
