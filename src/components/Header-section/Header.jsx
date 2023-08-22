import '../Header-section/Header-section.css'
import Navbar from './Navbar';
const Header = () => {
    return (
        <>
            <div className="header-section mb-[80px]">
            
                <div className="header-text">
                    <h1>Welcome to <span>Rentalog</span></h1>
                    <p>Rentalog is the ultimate solution for landlords looking to simplify their rent management process. Keep track of your renters personal details, their payment history, and much more with ease.</p>
                    <button className='btn'>Get Started</button>
                </div>
            </div>
        </>
    )
}
export default Header;
