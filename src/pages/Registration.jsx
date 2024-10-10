import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import logo from "../assets/Images/logo.png";

export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log form data to the console
    alert("Form Submitted successfully");
    reset(); // Resets the form after submission
  };

  const password = watch("password", ""); // Watch password to match confirm password

  return (
    <article className="flex flex-col justify-center h-screen bg-primaryGreen/10 overflow-hidden">
      <Navbar />
      <section className="flex flex-row justify-center items-center">
        <div className="hidden w-full lg:flex lg:mt-12 flex-col justify-center xl:justify-center  xl:h-full ">
          <div className="mb-10 mx-10 mr-auto">
            <h2 className="text-3xl font-bold text-gray-dark/90">
              <span className="text-customRed italic">Best way</span> to manage
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

              <Input
                title="Password"
                name="password"
                type="password"
                placeholder="Password"
                register={register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.password.message}
                </span>
              )}

              <Input
                title="Confirm password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                register={register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.confirmPassword.message}
                </span>
              )}

              <button
                type="submit"
                className="border-2 border-green rounded-lg h-10 bg-primaryGreen w-full py-1.5 rounded-xl focus:shadow-md hover:bg-primaryGreen/80 text-textWhite font-semibold mt-2"
              >
                Register
              </button>
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
