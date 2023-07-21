import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.contactText}>Contact Us</h1>
      </header>

      <main>
        <p className={style.contactPara}>
          <div className={style.paraText}>
            Hey there ! We love to hear from our Rentalog users ! Whether you're
            looking for answers to your burning questions, or simply want to
            chat about the app, we're all ears. We believe that staying
            connected with our users is key to delivering an exceptional
            experience. That's why we offer a variety of ways for you to reach
            out and get in touch with us. Here's how : <br />
          </div>
          <div className={style.paraText}>
            Email : Send us an email at{" "}
            <span className={style.greenText}>support@rentalog.in</span>, and
            we'll get back to you as soon as we can. Our support team is always
            happy to help. <br />
          </div>
          <div className={style.paraText}>
            Phone : Prefer to chat over the phone? No problem! Give us a call at{" "}
            <span className={style.greenText}>+916201577047</span>, and we'll be
            more than happy to assist you. <br />
          </div>
          <div className={style.paraText}>
            Address : If you're in the area, we'd love to see you ! You can find
            us at <b>Shaktinagar, Sonebhadra, Uttar Pradesh, 231222.</b> Swing
            by and say hello !<br />
          </div>
          <div className={style.paraText}>
            We're always looking for ways to improve and enhance your experience
            with Rentalog, so we welcome your feedback and suggestions. Don't be
            shy - drop us a line, and let us know what's on your mind. <br />
          </div>
          <div className={style.Initials}>
            Thanks for choosing Rentalog ! <br />
            Best regards,
            <br />
            The Rentalog Team
          </div>
        </p>
      </main>
    </>
  );
};

export default Contact;
