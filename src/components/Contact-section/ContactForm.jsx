import React from "react";
import style from "./ContactForm.module.css";
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/Insta.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";
const ContactForm = () => {
  return (
    <>
      <section className={style.ContactForm}>
        <article>
          <h2>Connect with Us</h2>
          <div
            className="flex gap-x-5 j h-4 container justify-center align-baseline"
            style={{ height: "min-content" }}
          >
            <img src={Github} alt="" style={{ height: "5vh" }} />
            <img src={Insta} alt="" style={{ height: "8vh" }} />
            <img src={Twitter} alt="" style={{ height: "5vh" }} />
          </div>
        </article>

        <article>
          <form>
            <div></div>
          </form>
        </article>
      </section>
    </>
  );
};

export default ContactForm;
