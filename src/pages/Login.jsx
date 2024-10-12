import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!form.email.trim()) {
      validationErrors.email = "email is required";
    }

    if (!form.password.trim()) {
      validationErrors.password = "password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // alert("Login Succesful");
      navigate("/home");
      setForm({
        email: "",
        password: "",
      });
    }
  };

  return (
    <article className="flex flex-col justify-center h-[100vh]  bg-primaryGreen/10 overflow-hidden">
      <Navbar />
      <br className=" hidden xl:block"></br>
      <section className="flex flex-row justify-baseline items-center ">
        <div className="hidden w-full lg:flex lg:mt-12 flex-col lg:justify-start xl:justify-center  xl:h-full  ">
          <div className="mb-10 mx-10 mr-auto">
            <h2 className=" text-3xl font-bold text-gray-dark/90 ">
              <span className="text-customRed italic"> Best way</span> to manage
              you rent
            </h2>

            <p className="mt-2 text-gray-dark/70 ">
              Enter your credentials to access your account
            </p>
          </div>
          <img
            src="undraw_for_sale_re_egkk.svg"
            alt=""
            className="m-10 w-auto"
          />
        </div>

        <div className="flex mx-auto max-w-7xl w-full lg:w-[75vw] h-screen xl:h-fit justify-between  lg:rounded-bl-3xl lg:rounded-tl-3xl  bg-primaryGreen/10 ">
          <div className="w-full h-[100vh] flex flex-col justify-start mt-20  lg:mt-0 lg:justify-center items-center">
            <TitleCard />

            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-5 w-[70%] md:w-[50%] lg:w-[60%]"
            >
              <Input
                title="Email"
                name="email"
                value={form.email}
                type="email"
                placeholder="E-mail Address"
                onChange={handleChange}
                className="input-bar"
              />
              <span className="pl-4 text-[#ff0000] text-sm">
                {errors.email}
              </span>
              <Input
                title="Password"
                name="password"
                value={form.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
                className="input-bar"
              />
              <span className="pl-4 text-[#ff0000] text-sm">
                {errors.password}
              </span>
              <Link
                to="#"
                className="float-right relative bottom-3 text-green hover:underline"
              >
                Forgot Password?
              </Link>

              <div className="">
                <button
                  type="submit"
                  className="border-2 border-green rounded-lg h-10 bg-primaryGreen w-full py-1.5 rounded-xl focus:shadow-md hover:bg-primaryGreen/80 text-textWhite font-semibold mt-2"
                >
                  Log In
                </button>
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex flex-row justify-center items-center">
                  <hr className="w-1/4  text-gray/60"></hr>
                  <p className=" text-gray text-sm text-center">
                    &nbsp;Or Login Using&nbsp;
                  </p>
                  <hr className="w-1/4 text-gray/60"></hr>
                </div>

                <div className=" flex flex-row md:flex-row items-center space-x-2 justify-center mt-5 lg:mt-2 ">
                  <button
                    type="button"
                    className="border bg-textWhite focus:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-2 flex items-center justify-center px-2 h-10"
                  >
                    <img
                      // src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google logo"
                      className="h-5"
                    />
                  </button>

                  <button
                    type="button"
                    className="border bg-textWhite focus:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-2 flex items-center justify-center px-2 h-10"
                  >
                    <img
                      
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"

                      alt="X logo"
                      className="h-5"
                    />
                  </button>

                  <button
                    type="button"
                    className="border bg-textWhite focus:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-2 flex items-center justify-center  px-2 h-10"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                      alt="Facebook logo"
                      className="h-5"
                    />
                  </button>

                  <button
                    type="button"
                    className="border bg-textWhite focus:shadow-md border-[#c7c5c5] w-[30%] py-1.5 rounded-xl text-black mt-2 flex items-center justify-center  px-2 h-10"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png "
                      alt="Facebook logo"
                      className="h-5"
                    />
                  </button>

               
                </div>
              </div>

              <p className="text-center text-sm text-gray font-semibold">
                Don&rsquo;t have any account?{" "}
                <Link
                  to="/register"
                  className=" text-primaryGreen font-semibold hover:text-primaryGreen/60"
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
      <h2 className="mt-16 text-left text-3xl font-extrabold leading-9 tracking-tight  text-gray-dark/90 ">
        <span className=" text-customRed text-4xl">Welcome</span>
        <span> </span>back!!
      </h2>

      <p className="text-center text-gray text-sm mt-1">
        Please enter your details
      </p>
    </div>
  );
};

const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { ...rest } = props;
  return (
    <div className="flex flex-col">
      <input
        {...rest}
        className="bg-[#FAFAFA] p-2 border border-[#dedede] outline-none rounded-xl focus:shadow-md"
      />
    </div>
  );
};
