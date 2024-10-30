
import { useState } from "react";


import { Link, useNavigate } from "react-router-dom";


import logo from "../assets/Images/logo.png";


import { useForm } from "react-hook-form";
import zxcvbn from "zxcvbn";

export default function Registration() {
  const navigate=useNavigate();

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
      <Navbar />

      <section className="flex flex-row justify-baseline items-center mt-28">
        <div className="hidden w-[50vw] lg:flex lg:mt-12 flex-col justify-center xl:justify-center xl:h-full ">
          <div className="mb-6 mx-10 mr-auto">
            <h2 className=" text-3xl font-bold text-gray-dark/90 ">
              <span className="text-customRed italic"> Best way</span> to manage
              your rent
            </h2>
            <p className="mt-2 text-gray-dark/70">
              Create a new account to access all the features of our website
            </p>
          </div>
          <img src="https://cdn.dribbble.com/users/130603/screenshots/7849095/house_5.gif" alt="" className="mx-10 w-50 h-70" />
        </div>

        <div className="absolute py-4 top-0 right-0 flex mx-auto max-w-7xl w-full lg:w-[50vw] h-fit xl:h-fit justify-between lg:rounded-bl-3xl lg:rounded-tl-3xl bg-primaryGreen/10">
          <div className="w-full  h-fit flex flex-col justify-start mt-20 lg:mt-0 lg:justify-center items-center">
            <TitleCard />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-5 space-y-3 w-[70%] md:w-[50%] lg:w-[60%]"
            >
              {/* Name Field */}
              <Input
                title="Name"
                name="name"
                type="text"
                placeholder="Name"
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
                placeholder="E-mail Address"
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
                  placeholder="Password"
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
                  placeholder="Confirm Password"
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
              <button
                type="submit"
                className="btn2 px-4 py-2"
              >
                Register
              </button>
            
              {/* Social Buttons */}
              <div className="flex flex-row md:flex-row items-center space-x-2 justify-center">
                <Link to="https://www.google.com/" className="border bg-textWhite focus:shadow-md lg:hover:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-1 flex items-center justify-center px-2 h-10">
                <button
                  type="button"
                 
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google logo"
                    className="h-5 mb-0"
                  />
                </button>
                </Link>
                <Link to="https://www.facebook.com/" className="border bg-textWhite focus:shadow-md lg:hover:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-1 flex items-center justify-center px-2 h-10">
                <button
                  type="button"
                  
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                    alt="Facebook logo"
                    className="h-5 mb-0"
                  />
                </button>
                </Link>
              </div>

              {/* Login Link */}
              <p className="text-center text-sm text-gray font-semibold">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className=" text-primaryGreen font-semibold hover:text-primaryGreen/60"
                >
                  Login
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
    <div>
      <h2 className="text-2xl text-center font-bold mb-2 text-gray-dark">
        Create Account
      </h2>
      <p className="text-center text-gray-dark/70">
        Join us for seamless rental management
      </p>
    </div>
  );
};

const Input = ({ title, register, ...props }) => {
  return (
    <div>
      <label className="text-gray-dark font-semibold">{title}</label>
      <input
        {...register}
        {...props}
        className="input-bar w-full p-2 border border-gray-300 rounded mt-2"
      />
    </div>
  );
};
