import delhi from "../../assets/Images/delhi-1.png";
import agra from "../../assets/Images/agra-1.jpg";
import bangalore from "../../assets/Images/banglore-1.jpg";
import chennai from "../../assets/Images/chennai-1.jpg";
import goa from "../../assets/Images/goa-1.jpg";
import mumbai from "../../assets/Images/mumbai-1.jpg";
// added blurred images 
import blurAgra from "../../assets/Images/BlurAgra.jpg";
import blurBangalore from "../../assets/Images/BlurBangalore.jpg";
import blurChennai from "../../assets/Images/BlurChennai.jpg";
import blurDelhi from "../../assets/Images/BlurDelhi.jpg";
import blurGoa from "../../assets/Images/BlurGoa.jpg";
import blurMumbai from "../../assets/Images/BlurMumbai.jpg";
const placeName = [
  {
    id: 1,
    name: "New Delhi",
    image: delhi,
    blurImage: blurDelhi, // new field for passing blurred images
    mt:"135px"
  },
  {
    id: 2,
    name: "Agra",
    image: agra,
    blurImage: blurAgra,
    mt:"0px"
  },
  {
    id: 3,
    name: "Banglore",
    image: bangalore,
    blurImage: blurBangalore,
    mt:"118px"
  },
  {
    id: 4,
    name: "Goa",
    image: goa,
    blurImage: blurGoa,
    mt:"55px"
  },
  {
    id: 5,
    name: "Mumbai",
    image: mumbai,
    blurImage: blurMumbai,
    mt:"164px"
  },
  {
    id: 6,
    name: "Chennai",
    image: chennai,
    blurImage: blurChennai,
    mt:"0px"
  },
];

export default placeName;
