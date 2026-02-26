import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import logo from '../assets/logo.jpeg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Connect With Us', path: '/connect' },
    ];

    return (
        <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
            {/* Top decorative line */}
            <div className="gov-gradient w-full" />

            <nav className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
                {/* Logo & Brand Name */}
                <NavLink to="/" className="flex items-center gap-3 group">
                    <motion.img
                        src={logo}
                        alt="Yuva Nyay Dal"
                        className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    />
                    <div className="flex flex-col">
                        <span className="text-navy-flag font-bold text-lg md:text-xl leading-none">युवा न्याय दल</span>
                        <span className="text-saffron text-xs font-medium tracking-widest">(अराजनैतिक)</span>
                    </div>
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `nav-link transition-colors relative py-1 ${isActive ? 'text-saffron after:w-full' : ''}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink to="/connect" className="bg-navy-flag hover:bg-saffron text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-saffron/20 group">
                        Connect Now
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl text-navy-flag outline-none focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </button>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 border-b border-gray-100 overflow-hidden shadow-xl"
                    >
                        <ul className="container mx-auto px-6 py-8 flex flex-col gap-6 font-medium">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block text-xl transition-all ${isActive ? 'text-saffron pl-4 border-l-4 border-saffron' : 'text-navy-flag hover:text-saffron hover:pl-2'}`
                                        }
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
