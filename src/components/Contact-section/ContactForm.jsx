import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";

const ContactForm = () => {
  return (
    <>
      <section className="lg:w-[45%] w-full">
        <article className="flex flex-1 justify-center p-5 md:p-0 md:mr-24">
          <form className="gap-x-5 w-full">
            <div className="flex flex-col md:flex-row mb-6 justify-between">
              <input
                className="border-2 border-green rounded-lg text-green-dark h-16 md:w-6/12 mb-6 md:mb-0 placeholder-textBlack p-2"
                placeholder="First name"
                style={{ marginRight: "5px" }}
              />
              <input
                className="border-2 border-green rounded-lg h-16 md:w-6/12 text-green-dark  placeholder-textBlack p-2"
                placeholder="Last name"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-6 justify-between">
              <input
                className="border-2 border-green rounded-lg h-16 w-full text-green-dark placeholder-textBlack p-2"
                placeholder="Email"
              />
            </div>

            <textarea
              className="border-2 border-green rounded-lg w-full h-40 text-green-dark placeholder-textBlack mb-6 p-2"
              placeholder="Your message here"
            />
            <div className="flex justify-center md:justify-start ">
              <div
                className="relative flex cursor-pointer items-center justify-center bg-green rounded-lg w-40 lg:w-60 p-3 text-textWhite text-2xl md:text-xl font-bold font-monsterrat ease-in-out duration-300 hover:bg-[transparent] hover:text-green hover:border-green hover:border-[2px]"
                type="submit"
              >
                Submit
              </div>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default ContactForm;
