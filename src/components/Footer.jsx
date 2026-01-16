import { FiGithub, FiLinkedin, FiYoutube, FiHeart } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Hanzla.
                    </span>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        © 2026 Hanzla Shahzad. All rights reserved.
                    </p>
                </div>

                <div className="flex items-center space-x-6">
                    <a href="https://github.com/hanzlashahzad01" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-xl">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/hanzla-shahzad-a7851b313" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-xl">
                        <FiLinkedin />
                    </a>
                    <a href="https://www.youtube.com/@CodeBuddy166" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors text-xl">
                        <FiYoutube />
                    </a>
                </div>
            </div>
            <div className="text-center mt-6 text-xs text-slate-400 dark:text-slate-600 flex items-center justify-center gap-1">
                Made with <FiHeart className="text-red-500" /> by Hanzla Shahzad
            </div>
        </footer>
    );
};

export default Footer;
