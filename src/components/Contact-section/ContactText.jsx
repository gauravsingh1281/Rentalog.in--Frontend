import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const ContactText = () => {
  useEffect(() => {

    AOS.init({duration:1000});

  }, []);
  return (
    <section className="mt-0 bg-gray-100  rounded-lg shadow-lg flex flex-col gap-6 justify-center  p-1 lg:w-[35%] w-full">
      <div className="text-gray-800" data-aos = "fade-right">
        <h2 className="text-xl font-bold mb-4">Hey Rentalog Users,</h2>
        <p className="leading-relaxed">
          We are always looking forward to hearing from you. Please feel free to
          reach out to us for any queries, suggestions, or feedback. <br />
          We would love to hear from you.
        </p>

        <div className="mt-4">
          <p className="font-semibold">Contact us:</p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@rentalog.in"
              className="ml-1 font-bold text-primaryGreen underline"
            >
              {" "}
              support@rentalog.in{" "}
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+916201577047"
              className="ml-1 font-bold text-primaryGreen underline"
            >
              {" "}
              +91 62015 77047{" "}
            </a>
          </p>

          <p>
            Chat With Us:{" "}
            <a
              href="https://wa.me/+91 6201577047?"
              className="ml-1 font-bold text-primaryGreen underline"
            >
              {" "}
              Click for chat{" "}
            </a>
          </p>
          

          <p>Address: Shaktinagar, Sonebhadra, UP, 231222</p>
        </div>

        <p className="mt-4 leading-relaxed">
          We welcome your input to improve your Rentalog experience. <br />
          Thank you for choosing Rentalog!
        </p>
        <p className="mt-2">
          Best regards,
          <br />
          The Rentalog Team
        </p>
      </div>
    </section>
  );
};
