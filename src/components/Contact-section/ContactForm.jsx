import { useForm } from "react-hook-form";
import clickSound from "../../assets/mixkit-mouse-click-close-1113.wav";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const onSubmit = (data) => {
    playSound();
    alert("Message sent successfully");
    console.log(data);
    reset();
  };

  return (
    <section className="bg-light-blue shadow-lg rounded-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <input
              {...register("firstName", { required: "First name is required" })}
              className="w-full h-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen transition duration-200 ease-in-out"
              placeholder="First Name"
            />
            <div className="min-h-[1.5rem]">
            {errors.firstName && (
              <span className="text-customRed text-sm">{errors.firstName.message}</span>
            )}
            </div>
          </div>
          <div className="flex-1">
            <input
              {...register("lastName", { required: "Last name is required" })}
              className="w-full h-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen transition duration-200 ease-in-out"
              placeholder="Last Name"
            />
            <div className="min-h-[1.5rem]">
            {errors.lastName && (
              <span className="text-customRed text-sm">{errors.lastName.message}</span>
            )}
            </div>
          </div>
        </div>
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is not valid",
              },
            })}
            className="w-full h-12 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen transition duration-200 ease-in-out"
            placeholder="Email"
          />
          <div className="min-h-[1.5rem]">
          {errors.email && (
            <span className="text-customRed text-sm">{errors.email.message}</span>
          )}
          </div>
        </div>
        <div>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryGreen transition duration-200 ease-in-out"
            placeholder="Your Message"
          />
          <div className="min-h-[1.5rem]">
          {errors.message && (
            <span className="text-customRed text-sm">{errors.message.message}</span>
          )}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-40 py-3 bg-primaryGreen text-textWhite rounded-full transition-all duration-300 hover:bg-customRed focus:outline-none focus:ring-2 focus:ring-black"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
