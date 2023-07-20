import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar flex justify-between items-center p-4">
                <img src={logo} alt="Rentalog-logo" />
                <ul className='flex'>
                    <li className='nav-links mr-9 p-3 '>HOME</li>
                    <li className='nav-links mr-9 p-3'>ABOUT</li>
                    <li className='nav-links mr-9 p-3'>CONTACT</li>
                </ul>
                <ul className='user-cta flex'>
                    <li className='mr-9 p-3'>Login</li>
                    <li className='mr-9 p-3'>Register</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;