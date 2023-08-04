import ServicesCard from "./ServicesCard";
import ourServices from "./services";
import ServicesAvailableIn from "./ServicesAvailableIn";
import placeName from "./placeName";
const Services = () => {
  return (
    <>
      <h1 className="text-5xl font-semibold text-[#312F2F] text-center pt-10">
        Our Services Includes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-36">
        {
          ourServices.map(({ id, bgColor, title, description, icon, alt }) => {
            return <ServicesCard title={title} key={id} bgColor={bgColor} icon={icon} alt={alt} description={description} />
          })
        }
      </div>
      <div className="bg-[#D1F2EB] my-20 ">
        <h1 className="text-5xl font-semibold text-[#312F2F] text-center py-10">
          Our Services are available in
        </h1>
        <div className="flex justify-center items-center flex-row pb-14 gap-16 px-10">
          {
            placeName.map(({ id, name }) => {
              return <ServicesAvailableIn placeName={name} key={id} />
            })
          }

        </div>
      </div>
    </>
  );
};

export default Services;
