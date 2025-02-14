import github from "../../assets/Icons/github.png";
import instagram from "../../assets/Icons/Instagram.png";
import twitter from "../../assets/Icons/twitter.png";
import Form from "./Form";
import clickSound from "../../assets/mixkit-mouse-click-close-1113.wav"; // Import the sound effect

const Connect = () => {
    const playSound = () => {
        const audio = new Audio(clickSound);
        audio.play();
    };

    return (
        <div className="px-[75px] mb-[80px] md:flex md:flex-row gap-5">
            <div className="flex-1">
                <h1 className="text-4xl font-bold">Connect with <span className="text-primary-green">Us</span></h1>
                <button 
                    className="bg-primary-green rounded-2xl w-[100px] p-3 font-semibold text-text-white mb-4"
                    onClick={playSound}
                >
                    Click Me
                </button>
                <div className="flex my-4">
                    <a href="https://github.com/gauravsingh1281">
                        <img src={github} alt="" className="w-8 h-8 mr-2" />
                    </a>
                    <a href="https://www.instagram.com/gauravsingh1281">
                        <img src={instagram} alt="" className="w-10 h-10 mr-2" />
                    </a>
                    <a href="https://twitter.com/gauravsingh1281">
                        <img src={twitter} alt="" className="w-8 h-8" />
                    </a>
                </div>
            </div>
            <div className="flex-1 md:mt-5">
                <Form />
            </div>
        </div>
    );
}

export default Connect;
