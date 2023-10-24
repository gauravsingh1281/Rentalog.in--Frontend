import ContactForm from "./ContactForm";
import GoogleMap from './GoogleMap';
import { ContactText } from "./ContactText";

const Contact = () => {
  return (
    <section className="flex flex-col w-full  px-[5%] gap-10 justify-center">
      <header id="ContactUs" className="flex justify-center align-middle mt-20">
        <h1 className="text-5xl font-bold tracking-wider text-text-black font-monsterrat">
          Contact Us
        </h1>
      </header>
      <main className=" flex flex-wrap gap-[5%] justify-center items-center">
        <ContactText />
        <ContactForm />
      </main>


      <GoogleMap />

    </section>
  );
};

export default Contact;
