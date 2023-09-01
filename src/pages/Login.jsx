import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex mx-auto max-w-7xl w-full h-screen xl:h-fit justify-between">
        <div className="w-full lg:w-1/2 h-full">
          <Navbar />
          <TitleCard />

          <form onSubmit={handleSubmit} className="mx-8 mt-5 space-y-6">
            <Input title="Email" value={form.email} onChnage={handleChange} />
            <Input
              title="Password"
              value={form.password}
              onChnage={handleChange}
            />
            <Link to="#" className="float-right text-green hover:underline">
              Forget Password?
            </Link>

            <div className="">
              <button
                type="submit"
                className="bg-primaryGreen w-full py-1.5 rounded-md text-textWhite mt-2"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col md:flex-row items-center space-x-2">
              <button
                type="button"
                className="border border-[#dedede] w-full py-1.5 rounded-md text-black mt-2 flex items-center justify-center px-2 h-10"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google logo"
                  className="h-5"
                />
                <span className="ml-2 text-sm font-medium whitespace-nowrap">
                  Continue with Google
                </span>
              </button>

              <div className="flex md:hidden gap-2 pt-[6px] px-4">
                <p className="text-[#8a8a8a]">OR</p>
              </div>

              <button
                type="button"
                className="border border-[#dedede] w-full py-1.5 rounded-md text-black mt-2 flex items-center justify-center  px-2 h-10"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                  alt="Facebook logo"
                  className="h-5"
                />
                <span className="ml-2 text-sm font-medium whitespace-nowrap">
                  Continue with Facebook
                </span>
              </button>
            </div>

            <p className="text-center text-sm">
              Don&rsquo;t have any account?{" "}
              <Link to="#" className="font-medium text-primaryGreen">
                Sign up
              </Link>
            </p>
          </form>
        </div>

        <div className="hidden lg:flex flex-col justify-center bg-primaryGreen/20 w-[50%] xl:justify-start xl:h-full py-[80px]">
          <div className="mb-10 mx-10 mr-auto ">
            <h2 className=" text-3xl font-bold ">
              Best way to manage you rent{" "}
            </h2>

            <p className="mt-2">
              Enter your credentials to access your account
            </p>
          </div>
          <img src="undraw_for_sale_re_egkk.svg" alt="" className="m-10" />
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <div className="border-b border-[#dedede] p-2 px-5">
      <Link to="/">
        <img src={logo} alt="Rentalog-logo" className="h-12 w-auto" />
      </Link>
    </div>
  );
};

const TitleCard = () => {
  return (
    <div className="">
      <h2 className="mt-16 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
        Welcome back
      </h2>

      <p className="text-center text-sm mt-1">
        Welcome back!Please enter your details
      </p>
    </div>
  );
};

const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, ...rest } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="mb-1 text-base font-medium">
        {title}
      </label>
      <input
        {...rest}
        className="bg-[#FAFAFA] p-2 border border-[#dedede] outline-none"
      />
    </div>
  );
};
