import React from 'react'
import Github from "../../assets/Social-Icons/Github.png";
import Insta from "../../assets/Social-Icons/instagram.png";
import Twitter from "../../assets/Social-Icons/Twitter.png";

export const ContactText = () => {
    return (
        <section className='flex flex-col gap-[20px] items-center lg:w-[45%] w-full'>
            <div className="">
                Hey Rentalog Users, <br />
                We are always looking forward to hearing from you.
                Please feel free to reach out to us for any queries, suggestions, or
                feedback. <br />
                We would love to hear from you. <br />
                <br />
                Contact us: <br />
                Email: <a href="mailto:support@rentalog.in" className='font-bold text-primaryGreen underline'> support@rentalog.in </a> <br />
                Phone: <a href="tel:+916201577047" className='font-bold text-primaryGreen underline'>  +91 62015 77047 </a> <br />
                Address: Shaktinagar, Sonebhadra, UP, 231222 <br />
                <br />
                We welcome your input to improve your Rentalog experience. <br />
                Thank you for choosing Rentalog! <br />
                Best regards, <br />
                The Rentalog Team
            </div>
            <div
                className="flex gap-x-12 justify-center md:justify-start"
            >
                <a href="https://twitter.com/gauravsingh1281">
                    <img src={Twitter} alt="Twitter-logo" className="h-8" />
                </a>
                <a href="https://github.com/gauravsingh1281">
                    <img src={Github} alt="Github-logo" className="h-8" />
                </a>
                <a href="https://www.instagram.com/gauravsingh1281">
                    <img src={Insta} alt="Insta-logo" className="h-8" />
                </a>
            </div>
        </section>
    )
}
