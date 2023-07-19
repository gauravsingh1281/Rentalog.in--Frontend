const Navbar = ()=>{
    return(
        <>
            <nav className="navbar flex justify-between items-center p-2">
                    <img src="/src/assets/logo.png" alt="" />
                    <ul className='flex'>
                        <li className='nav-links mr-2.5'>HOME</li>
                        <li className='nav-links mr-2.5'>ABOUT</li>
                        <li className='nav-links mr-2.5'>CONTACT</li>
                    </ul>
                    <ul className='flex'>
                        <li className='mr-2.5'>Login</li>
                        <li className='mr-2.5'>Register</li>
                    </ul>
                </nav>
        </>
    )
}
export default Navbar;