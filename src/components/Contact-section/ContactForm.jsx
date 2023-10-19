import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";

const ContactForm = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row  gap-y-10 my-20">
        {/* left hand side of the form */}
        <article className="flex-1 text-center md:text-left md:ml-24">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-wider mb-10 font-monsterrat text-textBlack">
            Connect with <span className="text-customRed">Us</span>
          </h2>
          <div
            className="flex gap-x-12 justify-center md:justify-start"
            style={{ height: "min-content", alignItems: "baseline" }}
          >
            <a href="https://twitter.com/gauravsingh1281">
              <img src={Twitter} alt="Twitter-logo" className="h-14" />
            </a>
            <a href="https://github.com/gauravsingh1281">
              <img src={Github} alt="Github-logo" className="h-14" />
            </a>
            <a href="https://www.instagram.com/gauravsingh1281">
              <img src={Insta} alt="Insta-logo" className="h-14" />
            </a>
          </div>
        </article>
        {/* Right hand side of the form */}
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
