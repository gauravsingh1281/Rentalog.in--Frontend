import React, { useState } from "react"; // Import useState
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.png";

// List of allowed email domains
const allowedDomains = [
  "gmail.com",
  "outlook.com",
  "yahoo.com",
  "protonmail.com",
  "icloud.com",
  "tutanota.com",
];

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleShowPassword = () => setShowPassword(!showPassword);

  // Function to validate email domain
  const isValidEmailDomain = (email) => {
    const domain = email.substring(email.lastIndexOf("@") + 1);
    return allowedDomains.includes(domain);
  };

  const onSubmit = (data) => {
    console.log(data);
    // Perform login logic here
    // If successful, navigate to admin dashboard
    navigate("/admin-dashboard");
    reset(); // Reset form after successful submission
  };

  return (
    <article className="flex flex-col justify-center h-[100vh] bg-primaryGreen/10 overflow-hidden">
      <Navbar />
      <br className="hidden xl:block"></br>
      <section className="flex flex-row justify-baseline items-center">
        <div className="hidden w-full lg:flex lg:mt-12 flex-col lg:justify-start xl:justify-center xl:h-full">
          <div className="mb-10 mx-10 mr-auto">
            <h2 className="text-3xl font-bold text-gray-dark/90">
              <span className="text-customRed italic">Best way</span> to manage
              your rent
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
              className="mt-5 space-y-5 w-[70%] md:w-[50%] lg:w-[60%]"
            >
              {/* Email Input */}
              <Input
                type="text"
                placeholder="E-mail Address"
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

              <div className="relative mb-6">
                <Input
                  title="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="input-bar pr-10"
                />
                <button
                  type="button"
                  onClick={handleShowPassword}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </button>
              </div>
              <span className="pl-4 text-[#ff0000] text-sm">
                {errors.password && errors.password.message}
              </span>

              <Link
                to="/forgot"
                className="float-right relative bottom-3 text-green hover:underline"
              >
                Forgot Password?
              </Link>

              <div>
                <button
                  type="submit"
                  className="border-2 border-green rounded-lg h-10 bg-primaryGreen w-full py-1.5 rounded-xl focus:shadow-md hover:bg-primaryGreen/80 text-textWhite font-semibold mt-2"
                >
                  Log In
                </button>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-center items-center">
                  <hr className="w-1/4 text-gray/60" />
                  <p className="text-gray text-sm text-center">
                    &nbsp;Or Login Using&nbsp;
                  </p>
                  <hr className="w-1/4 text-gray/60" />
                </div>

                <div className="flex flex-row md:flex-row items-center space-x-2 justify-center mt-5 lg:mt-2">
                  <Link
                    to="https://www.google.com/"
                    className="border bg-textWhite focus:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-2 flex items-center justify-center px-2 h-10"
                  >
                    <button type="button">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                        alt="Google logo"
                        className="h-5 mb-0"
                      />
                    </button>
                  </Link>

                  <Link
                    to="https://www.twitter.com/"
                    className="border bg-textWhite focus:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-2 flex items-center justify-center px-2 h-10"
                  >
                    <button type="button">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                        alt="X logo"
                        className="h-5 mb-0"
                      />
                    </button>
                  </Link>
                  <Link
                    to="https://www.facebook.com/"
                    className="border bg-textWhite focus:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-2 flex items-center justify-center px-2 h-10"
                  >
                    <button type="button">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                        alt="Facebook logo"
                        className="h-5 mb-0"
                      />
                    </button>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/uas/login"
                    className="border bg-textWhite focus:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-2 flex items-center justify-center px-2 h-10"
                  >
                    <button type="button">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        alt="LinkedIn logo"
                        className="h-5 mb-0"
                      />
                    </button>
                  </Link>
                </div>
              </div>

              <p className="text-center text-sm text-gray font-semibold">
                Don’t have any account?{" "}
                <Link
                  to="/register"
                  className="text-primaryGreen font-semibold hover:text-primaryGreen/60"
                >
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </article>
  );
}

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
    <div className="flex flex-col">
      <h2 className="mt-16 text-left text-3xl font-extrabold leading-9 tracking-tight text-gray-dark/90">
        <span className="text-customRed text-4xl">Welcome</span>
        <span> </span>back!!
      </h2>
      <p className="text-center text-gray text-sm mt-1">
        Please login to your account
      </p>
    </div>
  );
};

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className={`border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primaryGreen ${props.className}`}
      {...props}
    />
  );
});

Input.displayName = "Input"; // This is necessary for forwardRef to work correctly