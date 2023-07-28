import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <header className="flex justify-center align-middle my-20">
        <h1 className="text-5xl font-bold tracking-wider text-text-black font-monsterrat">
          Contact Us
        </h1>
      </header>
      <main>
        <p className={"px-5 lg:px-20 text-xl lg:text-2xl font-medium tracking-wider leading-10"}>
          <div className="mb-10">
            Hey there ! We love to hear from our Rentalog users ! Whether
            you&apos;re looking for answers to your burning questions, or simply
            want to chat about the app, we&apos;re all ears. We believe that
            staying connected with our users is key to delivering an exceptional
            experience. That&apos;s why we offer a variety of ways for you to
            reach out and get in touch with us. Here&apos;s how : <br />
          </div>
          <div className="mb-10">
            Email : Send us an email at{" "}
            <span className=" text-primaryGreen font-bold underline">
              support@rentalog.in
            </span>
            , and we&apos;ll get back to you as soon as we can. Our support team
            is always happy to help. <br />
          </div>
          <div className="mb-10">
            Phone : Prefer to chat over the phone? No problem! Give us a call at{" "}
            <span className=" text-primaryGreen font-bold underline">
              +916201577047
            </span>
            , and we&apos;ll be more than happy to assist you. <br />
          </div>
          <div className="mb-10">
            Address : If you&apos;re in the area, we&apos;d love to see you !
            You can find us at{" "}
            <b>Shaktinagar, Sonebhadra, Uttar Pradesh, 231222.</b> Swing by and
            say hello !<br />
          </div>
          <div className="mb-10">
            We&apos;re always looking for ways to improve and enhance your
            experience with Rentalog, so we welcome your feedback and
            suggestions. Don&apos;t be shy - drop us a line, and let us know
            what&apos;s on your mind. <br />
          </div>
          <div>
            Thanks for choosing Rentalog ! <br />
            Best regards,
            <br />
            The Rentalog Team
          </div>
        </p>
      </main>

      <ContactForm />
    </>
  );
};

export default Contact;
