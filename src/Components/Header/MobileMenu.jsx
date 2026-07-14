import React, { useState } from 'react'
import { Link } from 'react-router'
import { IoChevronDown } from 'react-icons/io5'
import { FaTimes } from 'react-icons/fa'
import logo from '../../assets/images/logo/logo.svg'
import PrimaryBtn from '../Button/PrimaryBtn'

// Nav Items Array Here
const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    {
        name: "Services",
        submenu: [
            { name: "Single Service", path: "/service" },
            { name: "Service Details", path: "/service-details" },
        ]
    },
    {
        name: "Projects",
        submenu: [
            { name: "Single Project", path: "/project" },
            { name: "Project Details", path: "/project-details" },
        ]
    },
    {
        name: "Pages",
        submenu: [
            { name: "About us", path: "/about" },
            { name: "Service", path: "/service" },
            { name: "Service Details", path: "/service-details" },
            { name: "Projects", path: "/project" },
            { name: "Project Details", path: "/project-details" },
            { name: "Team", path: "/team" },
            { name: "Blogs", path: "/blog" },
            { name: "Blog Details", path: "/blog-details" },
            { name: "Price", path: "/price" },
            { name: "Faq", path: "/faq" },
            { name: "Contact", path: "/contact" },
            { name: "Error", path: "/error" },
        ]
    },
    { name: "Contact", path: "/contact" },
]

const MobileMenu = ({ isOpen, setIsOpen }) => {

    const [openMenu, setOpenMenu] = useState(null)

    const handleSubmenu = (index) => {
        setOpenMenu(openMenu === index ? null : index)
    }

    return (
        <>
            {/* Mobile Menu */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-full bg-white z-50
                    transition-all duration-500
                    ${isOpen ? "translate-y-0" : "-translate-y-full"}
                `}
            >

                {/* Top */}
                <div className={`flex items-center justify-between p-6 ${isOpen ? "px-12.5 pt-11" : ""} transition-all duration-500`}>
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className='text-2xl text-primary'
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Menu Items */}
                <ul className='px-12.5 flex flex-col gap-2 mt-10'>

                    {navItems.map((item, index) => (
                        <li key={index}>

                            {/* Main Menu */}
                            {item.path ? (
                                <Link
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className='block border-b border-b-[rgba(0,0,0,0.1)] py-3 text-lg font-medium text-primary hover:text-secondary transition-all duration-300 cursor-pointer'
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handleSubmenu(index)}
                                        className='w-full flex items-center justify-between text-lg font-medium border-b border-b-[rgba(0,0,0,0.1)] py-3'
                                    >
                                        <div
                                            className={`
                                                transition-all duration-300 
                                                ${openMenu === index
                                                    ? 'text-secondary'
                                                    : 'text-primary hover:text-secondary'
                                                }
                                            `}
                                        >
                                            {item.name}
                                        </div>

                                        <IoChevronDown
                                            className={`
                                                transition-all duration-300
                                                ${openMenu === index
                                                    ? "rotate-180 text-secondary"
                                                    : "text-primary"
                                                }
                                            `}
                                        />
                                    </button>

                                    {/* Submenu */}
                                    <ul
                                        className={`
                                            overflow-hidden transition-all duration-300 
                                            ${openMenu === index ? "max-h-60 mt-2" : "max-h-0"}
                                        `}
                                    >
                                        {item.submenu?.map((sub, i) => (
                                            <li key={i}>
                                                <Link
                                                    to={sub.path}
                                                    onClick={() => setIsOpen(false)}
                                                    className='block py-2 pl-4 text-paragraph hover:text-secondary transition-all duration-300'
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                        </li>
                    ))}

                </ul>

                <Link to={"/contact"} className='mt-10 block px-12.5 cursor-pointer'>
                    <PrimaryBtn
                        text={"Let’s Talk."}
                        backText={"Let’s Talk."}
                        frontText={"Let’s Talk."}
                    />
                </Link>

            </div>
        </>
    )
}

export default MobileMenu