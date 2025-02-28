import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhone, FaComments, FaMapMarkerAlt } from "react-icons/fa";

export const ContactText = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="mt-0 bg-gray-50 rounded-lg shadow-lg p-6 lg:w-[35%] w-full"
      data-aos="fade-right"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Hey Rentalog Users,
      </h2>
      <p className="text-base text-gray-800 leading-relaxed mb-6">
        We are always excited to hear from you! Whether it's a query, suggestion,
        or feedback, your thoughts matter to us. Reach out and let's create something
        amazing together.
      </p>
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-primaryGreen" />
          <span className="text-gray-900 font-medium">
            Email:{" "}
            <a
              href="mailto:support@rentalog.in"
              className="underline text-blue-600"
            >
              support@rentalog.in
            </a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone className="text-customRed" />
          <span className="text-gray-900 font-medium">
            Phone:{" "}
            <a
              href="tel:+916201577047"
              className="underline text-blue-600"
            >
              +91 62015 77047
            </a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaComments className="text-black" />
          <span className="text-gray-900 font-medium">
            Chat With Us:{" "}
            <a
              href="https://wa.me/+916201577047"
              className="underline text-blue-600"
            >
              Click for chat
            </a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-customRed" />
          <span className="text-gray-900 font-medium">
            Address: Shaktinagar, Sonebhadra, UP, 231222
          </span>
        </div>
      </div>
      <p className="text-base text-gray-800 leading-relaxed">
        We welcome your input to improve your Rentalog experience. Thank you for choosing Rentalog!
      </p>
      <p className="mt-4 text-base text-gray-900 font-medium">
        Best regards,
        <br />
        The Rentalog Team
      </p>
    </section>
  );
};
