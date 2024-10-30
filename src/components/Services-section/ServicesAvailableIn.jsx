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
            <img src={props.placeImage} alt="image" className="w-52 h-64 rounded-xl group-hover:scale-110 hover:shadow-2xl  transition duration-300 cursor-pointer object-cover" />
            {/* <h1 className="bg-[#EBB4B6] w-28 h-28   rounded-full"></h1> */}
            <div className="absolute bottom-0 w-full h-1/5 flex items-end justify-center rounded-b-xl group-hover:scale-110 group-hover:translate-y-[20%] transition duration-300" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(0, 0, 0, 0.70) 63%)'
            }} >
                <h1 className="text-xl text-textWhite font-semibold" style={{ textShadow: '0 0 5px #ffffff' }}>{props.placeName}</h1>
            </div>

        </div>
    )
}


ServicesAvailableIn.propTypes = {
    placeName: PropTypes.string.isRequired,
    placeImage: PropTypes.string.isRequired
};
export default ServicesAvailableIn;