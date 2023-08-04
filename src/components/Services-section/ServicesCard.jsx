import PropTypes from "prop-types";
const ServicesCard = (props) => {
    return (
        <div className={props.bgColor + " rounded-xl"} >
            <div className="flex gap-4 p-8">
                <img
                    className="w-10 h-10 mt-1.5"
                    src={props.icon}
                    alt={props.alt}
                ></img>
                <h1 className="text-[#312F2F] font-bold text-2xl">
                    {props.title}
                </h1>
            </div>
            <p className="px-8 pb-20">
                {props.description}
            </p>
        </div>
    )
}
ServicesCard.propTypes = {
    bgColor: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
export default ServicesCard;