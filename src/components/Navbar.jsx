import React, { useEffect, useState } from 'react'
import logo2 from "../assets/logo2.png"
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    //set Toggle value
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            }
            else {
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    })

    /* const navItems = [
       { link: "Home", path: "home" },
       { link: "Service", path: "service" },
       { link: "About", path: "about" },
       { link: "Product", path: "product" },
       { link: "Testimonial", path: "testimonial" },
       { link: "FAQ", path: "faq" } 
   ] */
    return (
        <header className=' w-full fixed top-0 left-0 right-0 border-b-2'>
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="" className='text-2xl font-normal flex items-center'>
                        <img src={logo2} alt="" className='w-10' />
                        <span>
                            NEXCENT
                        </span>
                    </a>
                    {/* <ul className='md:flex space-x-12 hidden'>
                        {   
                            navItems.map(({ link, path }) => <Link key={path} to={path}>{link}</Link>)
                        }
                    </ul> */}
                    <ul className='hidden md:flex space-x-12 text-gray-900 hover:text-brandPrimary first:font-medium'>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/testimonial">Testimonial</Link>
                        </li>
                        <li>
                            <Link to="faq">FAQ</Link>
                        </li>
                    </ul>

                    <div className='hidden lg:flex items-center space-x-12 '>
                        <a className='hidden lg:flex items-center text-brandPrimary hover:text-neutralDGrey  '>
                            Login
                        </a>
                        <button className="py-2 px-4 bg-brandPrimary hover:bg-neutralDGrey text-white font-bold rounded transition-all duration-300">
                            Sign Up
                        </button>
                    </div>
                    {/* menu button for only mobiles*/}
                    <div className='md:hidden '>
                        <button
                            onClick={toggleMenu}
                            className=' text-neutralDGrey focus:outline-none focus:text-gray-500'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>
                {/* nav items for mobile devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0 " : "hidden"}`}>
                    <Link to="/home" spy={true} smooth={true} offset={-100} key="home" className="block text-base text-white hover:text-brandPrimary first:font-medium">
                        Home
                    </Link>
                    <Link to="/about" spy={true} smooth={true} offset={-100} key="about" className="block text-base text-white hover:text-brandPrimary first:font-medium">
                        About
                    </Link>
                    <Link to="/services" spy={true} smooth={true} offset={-100} key="services" className="block text-base text-white hover:text-brandPrimary first:font-medium">
                        Services
                    </Link>
                    <Link to="/contact" spy={true} smooth={true} offset={-100} key="contact" className="block text-base text-white hover:text-brandPrimary first:font-medium">
                        Contact
                    </Link>
                    <Link to="/testimonials" spy={true} smooth={true} offset={-100} key="testimonials" className="block text-base text-white hover:text-brandPrimary first:font-medium">
                        Testimonials
                    </Link>
                    <Link to="/faq" spy={true} smooth={true} offset={-100} key="faq" className="block text-base text-white hover:text-brandPrimary first:font-medium">
                        FAQ
                    </Link>
                </div>

            </nav>
        </header>
    )
}

export default Navbar