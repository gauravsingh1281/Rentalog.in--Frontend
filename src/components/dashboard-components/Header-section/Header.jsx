import { Link } from "react-router-dom";
import banner from '../../../assets/Images/dashboardbanner.png'
const Header = () => {
  return (
    <>
      <div className="w-full mt-20">
        <section className="h-[90vh] flex justify-around p-6 flex-col lg:flex-row">
          <div className="mt-10 flex flex-col justify-center items-start">
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
              Dashboard
            </h1>
            <p className="mb-8 text-lg font-medium text-gray-500 lg:text-xl">
                Hello <span className="text-customRed">name</span>, Welcome to your Dashboard
            </p>
          </div>
          <img src={banner}></img>
        </section>
      </div>
    </>
  );
};
export default Header;
