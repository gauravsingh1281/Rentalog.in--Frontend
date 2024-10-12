import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import zxcvbn from "zxcvbn";
import logo from "../assets/Images/logo.png";

export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

    // Show password
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const [errors, setErrors] = useState({});

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Password strength meter logic (using zxcvbn)
  const getPasswordStrength = (password) => {
    const strength = zxcvbn(password);
    const score = strength.score;
    const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    return {
      score,
      label: labels[score],
      color:
        score === 0
          ? "#d73f40"
          : score === 1
          ? "#dc6551"
          : score === 2
          ? "#f2b84f"
          : score === 3
          ? "#bde952"
          : "#3ba62f",
    };
  };

  const passwordStrength = getPasswordStrength(password); // Compute password strength

  return (
    <article className="flex flex-col justify-center h-screen bg-primaryGreen/10 overflow-hidden">
      <Navbar />
      <section className="flex flex-row justify-center items-center">
        <div className="hidden w-full lg:flex lg:mt-12 flex-col justify-center xl:justify-center xl:h-full ">
          <div className="mb-10 mx-10 mr-auto">
            <h2 className=" text-3xl font-bold text-gray-dark/90 ">
              <span className="text-customRed italic"> Best way</span> to manage
              your rent
            </h2>
            <p className="mt-2 text-gray-dark/70">
              Create a new account to access all the features of our website
            </p>
          </div>
          <img src="undraw_for_sale_re_egkk.svg" alt="" className="m-10" />
        </div>

        <div className="flex mx-auto max-w-7xl w-full lg:w-[75vw] h-[100vh] xl:h-fit justify-between lg:rounded-bl-3xl lg:rounded-tl-3xl bg-primaryGreen/10">
          <div className="w-full h-[100vh] flex flex-col justify-start mt-20 lg:mt-0 lg:justify-center items-center">
            <TitleCard />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-5 space-y-4 w-[70%] md:w-[50%] lg:w-[60%]"
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

            <div className="relative mb-6">
                <Input
                  title="Password"
                  name="password"
                  value={form.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handlechange}
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
              {errors.password && (
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.password.message}
                </span>
              )}

              {/* Password Strength Meter */}
              {password && (
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
                  title="Password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={handlechange}
                  className="input-bar pr-10"
                />
                <button
                  type="button"
                  onClick={handleShowConfirmPassword}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
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
                className="border-2 border-green rounded-lg h-10 bg-primaryGreen w-full py-1.5 rounded-xl focus:shadow-md hover:bg-primaryGreen/80 text-textWhite font-semibold mt-2"
              >
                Register
              </button>

              {/* Social Buttons */}
              <div className="flex flex-row md:flex-row items-center space-x-2 justify-center">
                <button
                  type="button"
                  className="border bg-textWhite focus:shadow-md lg:hover:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-1 flex items-center justify-center px-2 h-10"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google logo"
                    className="h-5"
                  />
                </button>

                <button
                  type="button"
                  className="border bg-textWhite focus:shadow-md lg:hover:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-1 flex items-center justify-center px-2 h-10"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                    alt="Facebook logo"
                    className="h-5"
                  />
                </button>
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
    <div className="">
      <h2 className="lg:mt-10 text-left text-3xl font-extrabold leading-9 tracking-tight text-gray-dark/90">
        Welcome to <span className="text-customRed text-4xl">Rentlog</span>
      </h2>
      <p className="text-left text-gray text-sm mt-1">
        Create a new account to access all the features
        <br />
        of our website
      </p>
    </div>
  );
};

const Input = ({ register, ...rest }) => {
  return (
    <div className="flex flex-col">
      <input
        {...rest}
        {...register}
        className="bg-[#FAFAFA] p-2 border border-[#dedede] outline-none rounded-xl focus:shadow-md"
      />
    </div>
  );
};
