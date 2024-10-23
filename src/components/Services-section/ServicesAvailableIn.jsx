import PropTypes from "prop-types";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServicesAvailableIn = (props) => {
    useEffect(() => {

        AOS.init();
    
      }, []);
    return (
        <div
            className="flex items-center gap-8 flex-col relative group"
            style={{ marginTop: props.mt }}
            onMouseEnter={() => { 
                props.setBgImage('')
                props.setImageUrl(props.placeBlurImage) //sets blurred image's url as bg image.
                props.setCurrPlace(props.placeName)
            }}
            
            onMouseLeave={() => {
                props.setBgImage('')
                // props.setImageUrl('')
            }}

            data-aos="fade-up"
        >
            <div className="relative w-52 h-64 rounded-xl overflow-hidden">
                <img
                    src={props.placeImage}
                    alt="image"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 hover:shadow-2xl cursor-pointer"
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-1/5 flex items-end justify-center transition-transform duration-300"
                    style={{
                    background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.70) 63%)",
                    }}
                >
                    <h1
                        className="text-xl text-textWhite font-semibold mb-2"
                        style={{ textShadow: "0 0 5px #ffffff" }}
                        >
                        {props.placeName}
                    </h1>
                </div>
            </div>

        </div>
    )
}


ServicesAvailableIn.propTypes = {
    placeName: PropTypes.string.isRequired,
    placeImage: PropTypes.string.isRequired
};
export default ServicesAvailableIn;