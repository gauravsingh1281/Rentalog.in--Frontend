import PropTypes from "prop-types";
const ServicesAvailableIn = (props) => {
    return (
        <div className="flex items-center gap-8 flex-col">
            <img src={props.placeImage} alt="image" className="w-28 h-28 rounded-full" />
            {/* <h1 className="bg-[#EBB4B6] w-28 h-28   rounded-full"></h1> */}
            <h1 className="text-xl font-medium">{props.placeName}</h1>
        </div>
    )
}

ServicesAvailableIn.propTypes = {
    placeName: PropTypes.string.isRequired,
    placeImage: PropTypes.string.isRequired
};
export default ServicesAvailableIn;