import { Link } from 'react-router'
import header_logo from '../../assets/images/logo/logo.svg'
import { IoChevronDown, IoSearch } from 'react-icons/io5'
import PrimaryBtn from '../Button/PrimaryBtn'
import { FaBars } from 'react-icons/fa'
import MobileMenu from './MobileMenu'
import { useEffect, useState } from 'react'

// Nav Items Array Here
const navItems = [
    {name: "Home", path: "/"},
    {name: "About us", path: "/about"},
    {
        name: "Services",
        submenu: [
            {name: "Single Service", path: "/ServicePage"},
            {name: "Service Details", path: "/service-details"},
        ]
    },
    {
        name: "Projects",
        submenu: [
            {name: "Single Project", path: "/ProjectPage"},
            {name: "Project Details", path: "/project-details"},
        ]
    },
    {
        name: "Pages",
        submenu: [
            {name: "About us", path: "/about"},
            {name: "Service", path: "/ServicePage"},
            {name: "Service Details", path: "/service-details"},
            {name: "Projects", path: "/ProjectPage"},
            {name: "Project Details", path: "/project-details"},
            {name: "Team", path: "/team"},
            {name: "Blogs", path: "/blog"},
            {name: "Blog Details", path: "/blog-details"},
            {name: "Price", path: "/price"},
            {name: "Faq", path: "/faqPage"},
            {name: "Contact", path: "/contact"},
            {name: "Error", path: "/error"},
        ]
    },
    {name: "Contact", path: "/contact"},
]
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() =>{
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return() => window.removeEventListener('scroll', handleScroll)
    })
    return (
        <>
            <header className={`fixed top-0 w-full flex items-center justify-between rounded-md mx-5 px-7.5 lg:px-3 xl:px-7.5 z-60 transition-all duration-300 ${isSticky ? 'shadow-lg bg-white' : 'bg-white mt-5'}`}>

                        {/*Header Logo Here */}
                        <div>
                            <Link to="/">
                                <img src={header_logo} alt="Header_Logo" />
                            </Link>
                        </div>
                        {/* Menu */}
                        <div className='hidden lg:flex items-center lg:gap-5 xl:gap-12.5'>
                            {navItems.map((item, index) => (
                                <div key={index} className="relative group">

                                    {/* Main Menu */}
                                    {item.path ? (
                                        <Link
                                            to={item.path}
                                            className="flex items-center gap-2 text-lg font-medium py-6 text-primary 
                                            hover:text-secondary transition-all duration-300"
                                        >
                                            {item.name}
                                            {item.submenu && (
                                                <IoChevronDown 
                                                    className="
                                                    transition-transform duration-300 group-hover:rotate-180
                                                " />
                                            )}
                                        </Link>
                                    ) : (
                                        <span
                                            className="
                                                text-primary flex items-center gap-2 text-lg font-medium py-6
                                                cursor-pointer group-hover:text-secondary
                                                transition-all duration-300
                                            "
                                        >
                                            {item.name}
                                            <IoChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                                        </span>
                                    )}

                                    {/* Submenu Here */}
                                    {item.submenu && (
                                        <ul className="
                                            absolute left-0 top-full w-56
                                            text-primary bg-white border-t-2 border-t-secondary shadow-lg
                                            opacity-0 invisible translate-y-5
                                            transition-all duration-300 ease-out
                                            group-hover:opacity-100
                                            group-hover:visible
                                            group-hover:translate-y-0
                                        ">
                                            {item.submenu.map((sub, i) => (
                                                <li key={i}>
                                                    <Link
                                                        to={sub.path}
                                                        className="
                                                            block px-5 py-2  
                                                            hover:bg-[rgba(255,81,1,0.05)] hover:text-secondary
                                                            transitionall duration-300 ease-in-out
                                                        "
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                </div>
                            ))}
                        </div>
                    {/* Right Part Here */}
                    <div className='flex items-center gap-2.5 py-2.5'>
                            {/* Search Icon Here */}
                            <div className='relative w-15 h-15'>
                                <input className='w-15 h-15 border border-[rgba(0,0,0,0.1)] rounded-md outline-0'/>
                                <IoSearch className='text-2xl text-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'/>
                            </div>
                        {/* Primary Button Component Here */}
                        <Link to="/contact" className='hidden lg:inline-block'>
                            <PrimaryBtn customClass="bg-primary text-white" text={"Let’s Talk."} backText={"Let’s Talk."} frontText={"Let’s Talk."}/>
                        </Link>
                        {/* Mobile BTN Here */}
                        <div>
                            <FaBars
                                onClick={() => setIsOpen(true)}
                                className='text-2xl text-primary lg:hidden cursor-pointer'
                            />
                        </div>
                        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems}/>
                    </div>
            </header>
        </>
    )
}

export default Header