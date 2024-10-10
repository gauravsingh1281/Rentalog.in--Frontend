import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'rgba(30, 144, 255, 0.1)',
    overflow: 'hidden'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    marginTop: '20px'
  },
  form: {
    marginTop: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    maxWidth: '500px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)', // Lift the form slightly when hovering
    }
  },
  input: {
    backgroundColor: '#FAFAFA',
    padding: '10px',
    border: '1px solid #dedede',
    borderRadius: '12px',
    outline: 'none',
    transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
    width: '100%',
    marginBottom: '10px',
    '&:hover': {
      backgroundColor: '#F0F8FF' // Light blue background on hover
    },
    '&:focus': {
      boxShadow: '0 0 0 3px rgba(30, 144, 255, 0.3)' // Box shadow on focus
    }
  },
  button: {
    border: '2px solid #1e90ff',
    borderRadius: '8px',
    height: '40px',
    backgroundColor: '#1e90ff',
    width: '100%',
    padding: '1.5px',
    color: '#ffffff',
    fontWeight: 'semibold',
    marginTop: '10px',
    transition: 'background-color 0.3s ease, transform 0.1s ease, box-shadow 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(30, 144, 255, 0.8)',
      transform: 'translateY(-2px)', // Slightly lift the button on hover
      boxShadow: '0px 4px 15px rgba(30, 144, 255, 0.5)' // Add a shadow effect on hover
    },
    '&:focus': {
      boxShadow: '0 0 0 3px rgba(30, 144, 255, 0.3)'
    }
  },
  error: {
    color: '#ff0000',
    fontSize: '0.875rem',
    paddingLeft: '4px'
  }
};
export default function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!form.name.trim()) {
      validationErrors.username = "username is required";
    }

    if (!form.email.trim()) {
      validationErrors.email = "email is required";
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      validationErrors.email = "email is not valid";
    }
    if (!form.password.trim()) {
      validationErrors.password = "password is required";
    } else if (form.password.length < 6) {
      validationErrors.password = "password should be at least 6 characters";
    }

    if (!form.confirmPassword.trim()) {
      validationErrors.confirmPassword = "password confirmation is required";
    } else if (form.confirmPassword !== form.password) {
      validationErrors.confirmPassword = "password not matched";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted successfully");
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
     <div style = {styles.root}>
     <article className="flex flex-col justify-center h-screen bg-primaryBlue/10 overflow-hidden">
      <Navbar />
      <section className="flex flex-row justify-center items-center h-full">
        <div className="hidden w-full lg:flex lg:mt-12 flex-col justify-center xl:justify-center  xl:h-full ">
          <div className="mb-10 mx-10 mr-auto">
            <h2 className=" text-3xl font-bold text-gray-dark/90 ">
              <span className="text-customBlue italic"> Best way</span> to manage
              your rent
            </h2>
           

            <p className="mt-2  text-gray-dark/70 ">
              Create a new account to access all the features of our website
            </p>
          
          <img src="undraw_for_sale_re_egkk.svg" alt="" className="m-10" />
          
        </div>
        </div>

        <div className="flex mx-auto max-w-7xl w-full lg:w-[75vw] h-[100vh]   xl:h-fit justify-between  lg:rounded-bl-3xl lg:rounded-tl-3xl  bg-primaryBlue/10 ">
          <div className="w-full h-[100vh] flex flex-col justify-start mt-20 lg:mt-0 lg:justify-center items-center">
            <TitleCard />
            <form onSubmit={handleSubmit} style ={styles.form}>
             
              <Input
                title="Name"
                name="name"
                value={form.name}
                type="text"
                placeholder="Name"
                onChange={handlechange}
                className="input-bar"
                style = {styles.input}

              />
               {errors.username && <span style={styles.error}>{errors.username}</span>}
             

              <Input
                title="Email address"
                name="email"
                value={form.email}
                type="email"
                placeholder="E-mail Address"
                onChange={handlechange}
                className="input-bar"
                style = {styles.input}

              />
              {errors.email && <span style={styles.error}>{errors.email}</span>}
              
              <Input
                title="Password"
                name="password"
                value={form.password}
                type="password"
                placeholder="Password"
                onChange={handlechange}
                className="input-bar"
                style = {styles.input}
              />
               {errors.password && <span style={styles.error}>{errors.password}</span>}
            
              <Input
                title="Confirm password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handlechange}
                className="input-bar"
                style = {styles.input}
              />
               {errors.confirmPassword && <span style={styles.error}>{errors.confirmPassword}</span>}
              
              
               <div style={{ width: '100%' }}>
               <button type="submit" style={styles.button}>
                 Register
               </button>
             </div>
           </form>
         </div>
       </div>
     </section>
   </article>
 </div>
);
}

          

const Navbar = () => {
  return (
    <div className="absolute  top-4 left-4">
      <Link to="/">
        <img src={logo} alt="Rentalog-logo" className="h-12 w-auto" />
      </Link>
    </div>
  );
};
const TitleCard = () => {
  return (
    <div className="">
      <h2 className=" lg:mt-10 text-left text-3xl font-extrabold leading-9 tracking-tight  text-gray-dark/90 ">
        Welcome to <span className=" text-customBlue text-4xl">Rentlog</span>
      </h2>

      <p className="text-left  text-gray text-sm mt-1">
        Create a new account to access all the features <br></br>of our website
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