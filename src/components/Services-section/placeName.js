import delhi from "../../assets/Images/delhi-1.png";
import agra from "../../assets/Images/agra-1.jpg";
import bangalore from "../../assets/Images/banglore-1.jpg";
import chennai from "../../assets/Images/chennai-1.jpg";
import goa from "../../assets/Images/goa-1.jpg";
import mumbai from "../../assets/Images/mumbai-1.jpg";
// i have included the blurred images in assets/images
import BlurDelhi from "../../assets/Images/BlurDelhi2.jpg";
import BlurAgra from "../../assets/Images/BlurAgra2.jpg";
import BlurBangalore from "../../assets/Images/BlurBangalore2.jpg";
import BlurChennai from "../../assets/Images/BlurChennai2.jpg";
import BlurGoa from "../../assets/Images/BlurGoa2.jpg";
import BlurMumbai from "../../assets/Images/BlurMumbai2.jpg";

// added a newField which passes the blurred image's url.
const placeName = [
  {
    id: 1,
    name: "New Delhi",
    image: delhi,
    blurImage : BlurDelhi,
    mt:"135px"
  },
  {
    id: 2,
    name: "Agra",
    image: agra,
    blurImage : BlurAgra,
    mt:"0px"
  },
  {
    id: 3,
    name: "Banglore",
    image: bangalore,
    blurImage : BlurBangalore,
    mt:"118px"
  },
  {
    id: 4,
    name: "Goa",
    image: goa,
    blurImage : BlurGoa,
    mt:"55px"
  },
  {
    id: 5,
    name: "Mumbai",
    image: mumbai,
    blurImage : BlurMumbai,
    mt:"164px"
  },
  {
    id: 6,
    name: "Chennai",
    image: chennai,
    blurImage : BlurChennai,
    mt:"0px"
  },
];

export default placeName;
