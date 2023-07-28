import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";

const ContactForm = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row gap-y-10 my-20">
        {/* left hand side of the form */}
        <article className="flex-1 ml-24">
          <h2 className="text-6xl font-bold tracking-wider mb-10 font-monsterrat text-textBlack">
            Connect with <span className="text-customRed">Us</span>
          </h2>
          <div
            className="flex gap-x-12"
            style={{ height: "min-content", alignItems: "baseline" }}
          >
            <img src={Github} alt="" style={{ height: "6vh" }} />
            <img src={Insta} alt="" style={{ height: "6vh" }} />
            <img src={Twitter} alt="" style={{ height: "6vh" }} />
          </div>
        </article>
        {/* Right hand side of the form */}
        <article className="flex flex-1 justify-center mr-24">
          <form className="gap-x-5 w-full">
            <div className="flex flex-col md:flex-row mb-6 justify-between">
              <input
                className="bg-green rounded-lg text-black h-16 w-5/12  placeholder-textBlack p-2"
                placeholder="First name"
              />
              <input
                className="bg-green rounded-lg h-16 w-5/12  text-black  placeholder-textBlack p-2"
                placeholder="Last name"
              />
            </div>
            <div className="flex flex-col md:flex-row mb-6 justify-between">
              <input
                className="bg-green rounded-lg h-16 w-full  text-black placeholder-textBlack p-2"
                placeholder="Email"
              />
            </div>

            <textarea
              className="bg-green rounded-lg w-full h-40  text-black  placeholder-textBlack mb-6 p-2"
              placeholder="Your message here"
            />
            <button
              className="bg-green rounded-lg   w-60 p-3 text-textWhite text-xl font-bold font-monsterrat"
              type="submit"
            >
              Submit
            </button>
          </form>
        </article>
      </section>
    </>
  );
};

export default ContactForm;
