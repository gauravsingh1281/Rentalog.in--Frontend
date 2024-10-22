import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert("Message sent successfully");
    console.log(data);
    reset(); // reset form fields after successful submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:px-4">
          <div className="flex justify-between gap-2">
            {/* First Name Input */}
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
              className="placeholder-text"
            />
            <span className="pl-4 text-[#ff0000] text-sm">
              {errors.firstName && errors.firstName.message}
            </span>

            {/* Last Name Input */}
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
              className="placeholder-text"
            />
            <span className="pl-4 text-[#ff0000] text-sm">
              {errors.lastName && errors.lastName.message}
            </span>
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Write your Email here"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is not valid",
              },
            })}
            className="placeholder-text"
          />
          <span className="pl-4 text-[#ff0000] text-sm">
            {errors.email && errors.email.message}
          </span>

          {/* Message Input */}
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            {...register("message", { required: "Message is required" })}
            className="placeholder-text"
          ></textarea>
          <span className="pl-4 text-[#ff0000] text-sm">
            {errors.message && errors.message.message}
          </span>

          {/* Submit Button */}
          <button
            className="bg-primary-green rounded-2xl w-[100px] p-3 font-semibold text-text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
