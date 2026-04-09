import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import MobileSocialIcons from './MobileSocialIcons';




const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    //check scroll and change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    // Smooth Scroll Function 
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false)
    }


    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "work", label: "Work" },
        { id: "education", label: "Education" },

    ]

    return (

        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-blur-md shadow-md" : "bg-transparent"}`}>
            <div className='text-lg font-semibold py-5 flex justify-between items-center'>
               
                {/*My Name Logo */}
                <Logo />

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
                                }`}
                        >
                            <button onClick={() => handleMenuItemClick(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Social Media Icons */}
                <SocialMedia />

                {/* Mobile Menu Icons */}
                <div className='md:hidden'>
                    {
                        isOpen ? (
                            <FiX className='text-3xl text-[#8245ec] cursor-pointer' size={24} onClick={() => setIsOpen(false)} />) : (
                            <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)} />
                        )


                    }
                </div>


            </div>

            {/* Mobile Menu Items */}
            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""
                                    }`}
                            >
                                <button onClick={() => handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}

                        {/* Social Media icons for mobile */}
                        <MobileSocialIcons />
                    </ul>


                </div>


            )}


        </nav>
    )
}

export default Navbar


