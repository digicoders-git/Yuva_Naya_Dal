import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { logo } from '../utils/images';

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
        { name: 'Our Vision', path: '/vision' },
        { name: 'Our Mission', path: '/mission' },
        { name: 'Contact Us', path: '/contact' },
        // { name: 'Terms', path: '/terms' },
        // { name: 'Privacy', path: '/privacy' },
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
                <div className="hidden xl:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `nav-link transition-all relative py-1 font-bold text-md ${isActive ? 'text-saffron active-nav' : 'text-navy-flag'}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <NavLink
                        to="/connect"
                        className={({ isActive }) =>
                            `px-5 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-saffron/20 group border-2 text-sm ${isActive
                                ? 'bg-saffron text-white border-saffron'
                                : 'bg-navy-flag text-white border-navy-flag hover:bg-saffron hover:border-saffron'
                            }`
                        }
                    >
                        Connect Now
                    </NavLink>
                </div>

                {/* Mobile Menu Button (Switch at XL) */}
                <button
                    className="xl:hidden text-3xl text-navy-flag outline-none focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                </button>
            </nav>

            {/* Mobile Menu Drawer (Switch at XL) */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white/95 border-b border-gray-100 overflow-hidden shadow-xl"
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
