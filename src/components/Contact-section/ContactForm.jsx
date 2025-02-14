import { useForm } from "react-hook-form";
import clickSound from "../../assets/mixkit-mouse-click-close-1113.wav"; // Importing the sound file

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play(); // Play the sound
  };

  const onSubmit = (data) => {
    playSound(); // Play sound on submit
    alert("Message sent successfully");
    console.log(data);
    reset(); // reset form fields after submission
  };

  return (
    <>
      <section className="flex flex-col my-20 md:flex-row gap-y-10">
        <article className="flex justify-center flex-1 p-5 md:p-0 md:mr-24">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full gap-x-5">
            <div className="flex flex-col justify-between mb-6 md:flex-row">
              <div className="flex flex-col md:w-6/12">
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="h-16 p-2 mb-6 border-2 rounded-lg border-green text-green-dark md:mb-0 placeholder-textBlack"
                  placeholder="First name"
                  style={{ marginRight: "5px" }}
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.firstName && errors.firstName.message}
                </span>
              </div>
              <div className="flex flex-col md:w-6/12">
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="h-16 p-2 border-2 rounded-lg border-green text-green-dark placeholder-textBlack"
                  placeholder="Last name"
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.lastName && errors.lastName.message}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between mb-6 md:flex-row">
              <div className="flex flex-col w-full">
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Email is not valid",
                    },
                  })}
                  className="h-16 p-2 border-2 rounded-lg border-green text-green-dark placeholder-textBlack"
                  placeholder="Email"
                />
                <span className="pl-4 text-[#ff0000] text-sm">
                  {errors.email && errors.email.message}
                </span>
              </div>
            </div>

            <textarea
              {...register("message", {
                required: "Message is required",
              })}
              className="w-full h-40 p-2 border-2 rounded-lg border-green text-green-dark placeholder-textBlack"
              placeholder="Your message here"
            />
            <span className="pl-4 text-[#ff0000] text-sm">
              {errors.message && errors.message.message}
            </span>
            <div className="flex justify-center md:justify-start">
              <button
                className="relative flex cursor-pointer items-center justify-center mt-5 bg-green rounded-lg w-40 lg:w-60 p-3 text-textWhite text-2xl md:text-xl font-bold font-monsterrat ease-in-out duration-300 hover:bg-[transparent] hover:text-green hover:border-green hover:border-[2px]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default ContactForm;
