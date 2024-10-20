import React from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/Images/logo.png";
import { Link } from "react-router-dom";

const allowedDomains = [
    "gmail.com",
    "outlook.com",
    "yahoo.com",
    "protonmail.com",
    "icloud.com",
    "tutanota.com",
  ];
const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
       // Function to validate email domain
  const isValidEmailDomain = (email) => {
    const domain = email.substring(email.lastIndexOf("@") + 1);
    return allowedDomains.includes(domain);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset(); 
  };
  return (
    <div>
      <article className="flex flex-col justify-center h-[100vh] bg-primaryGreen/10 overflow-hidden">
        <Navbar />
        <br className="hidden xl:block"></br>
        <section className="flex flex-row justify-baseline items-center">
          <div className="hidden w-full lg:flex lg:mt-12 flex-col lg:justify-start xl:justify-center xl:h-full">
            <div className="mb-10 mx-10 mr-auto">
              <h2 className="text-3xl font-bold text-gray-dark/90">
                <span className="text-customRed italic">Best way</span> to
                manage your rent
              </h2>
              <p className="mt-2 text-gray-dark/70">
                Enter your credentials to access your account
              </p>
            </div>
            <img
              src="undraw_for_sale_re_egkk.svg"
              alt=""
              className="m-10 w-auto"
            />
          </div>

          <div className="flex mx-auto max-w-7xl w-full lg:w-[75vw] h-screen xl:h-fit justify-between lg:rounded-bl-3xl lg:rounded-tl-3xl bg-primaryGreen/10">
          <div className="w-full h-[100vh] flex flex-col justify-start mt-20 lg:mt-0 lg:justify-center items-center">
            <TitleCard />

            {/* Form using react-hook-form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5 w-[70%] md:w-[50%] lg:w-[60%]"
            >
              {/* Email Input */}
              <Input
                type="text"
                placeholder="Enter email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                  validate: {
                    domainCheck: (value) =>
                      isValidEmailDomain(value) ||
                      "Please use an email from a reputable provider (e.g., Gmail, Outlook, Yahoo, Protonmail, icloud, tutanota).",
                  },
                })}
                className="input-bar"
              />
              <span className="pl-4 text-[#ff0000] text-sm">
                {errors.email && errors.email.message}
              </span>

              <div>
                <button
                  type="submit"
                  className="border-2 border-green rounded-lg h-10 bg-primaryGreen w-full py-1 rounded-xl focus:shadow-md hover:bg-primaryGreen/80 text-textWhite font-semibold mt-1"
                >
                 Reset Password
                </button>
              </div>


              
            </form>
          </div>
        </div>
        </section>

      </article>
    </div>
  );
};

const Navbar = () => {
    return (
      <div className="absolute top-4 left-4">
        <Link to="/">
          <img src={logo} alt="Rentalog-logo" className="h-12 w-auto" />
        </Link>
      </div>
    );
  };

  const TitleCard = () => {
    return (
      <div className="flex flex-col justify-start items-start">
        <h2 className="mt-16 text-left text-4xl font-extrabold leading-9 tracking-tight text-customRed">
          Forgot
        </h2>
        <h2 className="mt-2 text-left text-4xl font-extrabold leading-9 tracking-tight text-gray-dark/90">
          Your Password?
        </h2>
        
      </div>
    );
  };
  const Input = React.forwardRef(({ ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <input
          {...rest}
          ref={ref}
          className="bg-[#FAFAFA] p-2 border border-[#dedede] outline-none rounded-xl focus:shadow-md"
        />
      </div>
    );
  });
export default ForgotPassword;
