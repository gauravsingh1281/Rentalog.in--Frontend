import { Link } from "react-router-dom";
import WidgetCard from "./WidgetCard";

const WidgetSection = () => {
  return (
    <div className="w-full bg-light-blue m-auto p-2">
      <div className="flex flex-row justify-between gap-2 items-center md:mt-10 md:px-10 py-8 px-4">
        <h1 className="font-bold md:text-4xl text-2xl">Widgets</h1>

        <Link to="/dashboard/createnewrenter">
          <div className="bg-textWhite p-4 font-semibold rounded-md hover:shadow-widget">
            Create new Rental
          </div>
        </Link>
      </div>

      <div className="w-9/12 sm:w-10/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center max-w-[1000px] my-5 mx-auto">
        <WidgetCard
          route={"/dashboard/renterdetails"}
          widgetName={"Rental's Details"}
        />
        <WidgetCard
          route={"/dashboard/paymentsrecord"}
          widgetName={"Rent Payment Record"}
        />
        <WidgetCard
          route={"/dashboard/searchrenter"}
          widgetName={"Total Rent collected"}
        />
        <WidgetCard
          route={"/dashboard/totalrentcollected"}
          widgetName={"Property Listing"}
        />
        <WidgetCard
          route={"/dashboard/propertylisting"}
          widgetName={"Rental's Details"}
        />
        <WidgetCard
          route={"/dashboard/addnewrenter"}
          widgetName={"Rental's Details"}
        />
      </div>
    </div>
  );
};

export default WidgetSection;
