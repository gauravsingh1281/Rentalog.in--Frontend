import banner from "../../../assets/Images/dashboardbanner.png";
const Header = () => {
  return (
    <>
      <div className="w-full mt-20">
        <section className="min-h-[80vh] flex justify-around items-start md:items-center p-6 flex-col md:flex-row max-w-[1000px] mx-auto">
          <div className="mt-10 flex flex-col justify-center items-start">
            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
              Dashboard
            </h1>
            <p className="mb-8 text-lg font-medium text-gray-500 lg:text-xl">
              Hello <span className="text-customRed">name</span>, Welcome to
              your Dashboard
            </p>
          </div>
          <div className="w-full flex justify-center">
            <img
              src={banner}
              className="aspect-square max-w-[500px] justify-self-start max-h-[500px] w-full"
            ></img>
          </div>
        </section>
      </div>
    </>
  );
};
export default Header;
