import { Link } from "react-router-dom";


const WidgetSection = () => {
    return(
        <div className="w-full bg-light-blue md:px-20 md:py-10 p-2">
            <div className="flex flex-row justify-between items-center md:mt-10 md:px-10 py-8 px-4">
                <h1 className="font-bold md:text-4xl text-2xl">Widgets</h1>
                <Link to="/dashboard/createnewrenter">
                <div className="bg-textWhite p-4 font-semibold rounded-md hover:shadow-widget">Create new Rental</div>
                </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-around items-center my-10 md:my-8 mx-2">
            <Link to="/dashboard/renterdetails">
                <section className="md:w-80 md:h-60 w-40 h-40  bg-textWhite font-semibold flex justify-center items-center rounded-lg shadow-widget opacity-1 hover:shadow-widget-hover text-center">
                    Rental's Details
                </section>
                </Link>
                <Link to="/dashboard/paymentsrecord">
                <section className="md:w-80 md:h-60 w-40 h-40 bg-textWhite font-semibold flex justify-center items-center rounded-lg shadow-widget opacity-1 hover:shadow-widget-hover text-center">
                    Rent Payment Record
                </section>
                </Link>
                <Link to="/dashboard/searchrenter">
                <section className="md:w-80 md:h-60 w-40 h-40 bg-textWhite font-semibold flex justify-center items-center rounded-lg shadow-widget opacity-1 hover:shadow-widget-hover text-center">
                Search Renter
                </section>
                </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-10 justify-around items-center my-5 md:my-8 mx-2">
            <Link to="/dashboard/totalrentcollected">
                <section className="md:w-80 md:h-60 w-40 h-40 bg-textWhite font-semibold flex justify-center items-center rounded-lg shadow-widget opacity-1 hover:shadow-widget-hover text-center">
                Total Rent collected
                </section>
                </Link>
                <Link to="/dashboard/propertylisting">
                <section className="md:w-80 md:h-60 w-40 h-40 bg-textWhite font-semibold flex justify-center items-center rounded-lg shadow-widget opacity-1 hover:shadow-widget-hover text-center">
                Property Listing
                </section>
                </Link>
                <Link to="/dashboard/addnewrenter">
                <section className="md:w-80 md:h-60 w-40 h-40 bg-textWhite font-semibold flex justify-center items-center rounded-lg shadow-widget opacity-1 hover:shadow-widget-hover text-center">
                Add New Rental
                </section>
                </Link>
            </div>
        </div>
    )
}

export default WidgetSection;