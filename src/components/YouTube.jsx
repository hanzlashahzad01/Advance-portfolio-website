import { motion } from 'framer-motion';
import { FiYoutube, FiExternalLink, FiPlayCircle } from 'react-icons/fi';

const YouTube = () => {
    return (
        <section className="py-20 bg-slate-100 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-red-500 font-medium uppercase tracking-wider">Content Creation</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">My YouTube Channel</h2>
                    <div className="w-16 h-1 bg-red-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="glass p-8 md:p-12 rounded-3xl border border-red-500/20 shadow-xl relative overflow-hidden group"
                    >
                        {/* Channel Card */}
                        <div className="flex flex-col md:flex-row items-center gap-8 z-10 relative">
                            {/* Icon/Logo */}
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 border border-red-500/20 group-hover:scale-110 transition-transform duration-500">
                                <FiYoutube className="text-5xl md:text-6xl text-red-500" />
                            </div>

                            {/* Content */}
                            <div className="text-center md:text-left flex-grow">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-2">
                                    CodeBuddy
                                </h3>
                                <p className="text-red-500 font-medium text-lg mb-4">@CodeBuddy166</p>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    I share my passion for coding through tutorials on Web Development, Flutter, MERN Stack, and more.
                                    Join me on my journey to simplify complex programming concepts!
                                </p>

                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                    <a
                                        href="https://www.youtube.com/@CodeBuddy166"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-red-500/30 flex items-center gap-2 transform hover:-translate-y-1"
                                    >
                                        <FiPlayCircle className="text-xl" />
                                        Visit Channel
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@CodeBuddy166?sub_confirmation=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
                                    >
                                        Subscribe
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -right-20 -bottom-20 opacity-5 dark:opacity-5 transform rotate-12 pointer-events-none">
                            <FiYoutube className="text-[300px]" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default YouTube;
