import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun, FiGithub, FiLinkedin } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/#about' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Services', path: '/#services' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Hanzla.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex items-center space-x-4 border-l border-slate-300 dark:border-slate-700 pl-4">
                        <a href="https://github.com/hanzlashahzad01" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors">
                            <FiGithub />
                        </a>
                        <a href="https://linkedin.com/in/hanzla-shahzad-a7851b313" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors">
                            <FiLinkedin />
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-slate-600" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                    >
                        {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-slate-600" />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-slate-900 dark:text-white">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-slate-200 dark:border-slate-800"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-600 dark:text-slate-300 hover:text-primary font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                <a href="https://github.com/hanzlashahzad01" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                                    <FiGithub />
                                </a>
                                <a href="https://linkedin.com/in/hanzla-shahzad-a7851b313" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                                    <FiLinkedin />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
