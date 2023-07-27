const Form = () => {
    return (
        <div>
            <form action="">
                <div className="flex flex-col gap-4 md:px-4">
                    <div className="flex justify-between gap-2">
                        <input type="text" name="fname" id="" placeholder="First Name" className="placeholder-text" />
                        <input type="text" name="lname" placeholder="Last Name" className="placeholder-text" />
                    </div>
                    <input type="email" placeholder="Write yout Email here" className="placeholder-text" />
                    <textarea name="message" id="" cols="30" rows="10" className="placeholder-text" placeholder="Your Massege"></textarea>
                    <button className="bg-primary-green rounded-2xl w-[100px] p-3 font-semibold text-text-white" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;