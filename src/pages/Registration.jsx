
import { useState } from "react";


import { Link, useNavigate } from "react-router-dom";


import logo from "../assets/Images/logo.png";


import { useForm } from "react-hook-form";
import zxcvbn from "zxcvbn";

export default function Registration() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const allowedDomains = ["gmail.com", "outlook.com", "yahoo.com", "protonmail.com", "icloud.com", "tutanota.com"];

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBackToHome = () => {
    navigate("/"); // Replace "/home" with the correct path to your home page
  };

  // Password strength meter logic (using zxcvbn)
  const getPasswordStrength = (password) => {
    const strength = zxcvbn(password);
    const score = strength.score;
    const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    return {
      score,
      label: labels[score],
      color:
        score === 0 ? "#d73f40" :
          score === 1 ? "#dc6551" :
            score === 2 ? "#f2b84f" :
              score === 3 ? "#bde952" :
                "#3ba62f",
    };
  };

  const passwordStrength = getPasswordStrength(form.password); // Compute password strength

  // Function to check if the email is from a valid domain
  const isValidEmailDomain = (email) => {
    const emailDomain = email.split("@")[1];
    return allowedDomains.includes(emailDomain);
  };


  const onSubmit = (data) => {
    // Validate email domain
    if (!isValidEmailDomain(data.email)) {
      setError("email", {
        type: "manual",
        message: "Please use an email from a reputable provider (e.g., Gmail, Outlook, Yahoo, Protonmail, icloud, tutanota)."

      });
      return;
    }

    // Handle form submission logic here
    console.log("Form Data:", data);

    navigate("/home");

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  };

  return (
    <article className="flex relative flex-col justify-center h-[100vh] bg-primaryGreen/10 overflow-hidden">
      <div className="lg:hidden"><Navbar/></div>
      <section className="mt-2 flex flex-col lg:flex-row w-full lg:w-4/5 items-center justify-center mx-auto p-6 border border-gray-300 bg-primaryGreen/10 lg:rounded-bl-3xl lg:rounded-tl-3xl py-4 lg:py-0 mt-4 lg:mt-0" style={{ padding: "0.8rem" }}>
  {/* Section content */}
        
        {/* Left Side - Text and Image */}
        <div className="hidden lg:flex w-full lg:w-[50%] flex-col items-start lg:items-center justify-center p-4">
          <Navbar />
          <div className="mb-6">
            <h2 className="text-3xl font-bold">
              <span className="text-customRed italic">Best way</span> to manage your rent
            </h2>
            <p className="mt-2">
              Create a new account to access all the features of our website
            </p>
          </div>
          <img
            src="https://cdn.dribbble.com/users/130603/screenshots/7849095/house_5.gif"
            alt=""
            className="w-[90%] lg:w-[80%]"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-[50%] flex justify-center items-center ">
          <div className="w-full max-w-lg lg:max-w-md flex flex-col items-center">
            <TitleCard />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full px-4 md:w-[80%] lg:w-[90%] mt-5 space-y-3 bg-white rounded-lg"
            >
              {/* Name Field */}
              <Input
                title="Name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                register={register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.name.message}
                </span>
              )}

              {/* Email Field */}
              <Input
                title="Email address"
                name="email"
                type="email"
                placeholder="example@domain.com"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors.email && (
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.email.message}
                </span>
              )}

              {/* Password Field */}
              <div className="relative mb-6">
                <Input
                  title="Password"
                  name="password"
                  value={form.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Choose a strong password"
                  onChange={handleChange}
                  className="input-bar pr-10"
                  register={register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={handleShowPassword}
                  className="absolute right-4 top-3/4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.password.message}
                </span>
              )}

              {/* Password Strength Meter */}
              {form.password && (
                <div className="w-full mt-2">
                  <label>Password Strength: {passwordStrength.label}</label>
                  <div className="w-full h-2 bg-gray-300 rounded">
                    <div
                      className="h-full rounded"
                      style={{
                        width: `${(passwordStrength.score + 1) * 20}%`,
                        backgroundColor: passwordStrength.color,
                      }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Confirm Password Field */}
              <div className="relative mb-6">
                <Input
                  title="Confirm Password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  onChange={handleChange}
                  className="input-bar pr-10"
                  register={register("confirmPassword", {
                    validate: (value) =>
                      value === form.password || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  onClick={handleShowConfirmPassword}
                  className="absolute right-4 top-3/4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {showConfirmPassword ? (
                    <i className="fa-regular fa-eye-slash"></i>
                  ) : (
                    <i className="fa-regular fa-eye"></i>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}

              {/* Submit Button */}
              <button type="submit" className="btn2 px-4 py-2 w-full rounded-lg bg-blue-500 text-white">
                Register
              </button>
   

              {/* Social Buttons */}
              <div className="flex items-center justify-center space-x-4 mt-4">
                <Link to="https://www.google.com/" className="flex items-center border bg-white border-[#c7c5c5] w-1/3 h-10 justify-center rounded-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google logo"
                    className="h-5" style={{ margin: "0px" }}
                  />
                </Link>
                <Link to="https://www.facebook.com/" className="flex items-center border bg-white border-[#c7c5c5] w-1/3 h-10 justify-center rounded-lg">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                    alt="Facebook logo"
                    className="h-5" style={{ margin: "0px" }}
                  />
                </Link>
              </div>

              {/* Login Link */}
              <p className="text-center text-sm text-gray font-semibold mt-4">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primaryGreen font-semibold hover:text-primaryGreen/60"
                >
                  Login
                </Link>
              </p>
              <div className="flex justify-center">
      <button
        type="button"
        onClick={handleBackToHome} // Navigate to home on click
        className="btn2 px-4 py-2 rounded-lg bg-blue-500 text-white flex items-center justify-center shadow hover:bg-blue-600 transition duration-200 ease-in-out" style={{width:"200px", fontWeight:'500', fontSize:"16px", marginTop:"0.4rem"}}
      >
        &larr; Back to Home
      </button>
      </div>
            </form>
          </div>
        </div>
      </section>
      {/* Submit Button */}
     




    </article>
  );
}

const Navbar = () => {
  return (
    <div className="relative top-[-7px] flex items-center justify-center lg:left-[-171px] lg:top-0 ">
      <Link to="/">
        <img src={logo} alt="Rentalog-logo" className="h-12 w-auto lg:mt-[-1rem]" />
      </Link>
      </div>
  );
};

const TitleCard = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-2">
        Create Account
      </h2>
      <p className="text-center">
        Join us for seamless rental management
      </p>
    </div>
  );
};

const Input = ({ title, register, ...props }) => {
  return (
    <div>
      <label className="font-semibold">{title}</label>
      <input
        {...register}
        {...props}
        className="input-bar w-full p-2 border border-gray-300 rounded mt-2 text-black"
      />
    </div>
  );
};
