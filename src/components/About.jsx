import { motion } from 'framer-motion';
import { FiBook, FiCode, FiUser } from 'react-icons/fi';
import photo2 from '../assets/photo2.jpeg';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium uppercase tracking-wider">Introduction</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">About Me</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                            <div className="relative bg-white dark:bg-slate-900 p-2 rounded-2xl md:w-[400px]">
                                <img
                                    src={photo2}
                                    alt="Working on code"
                                    className="rounded-xl w-full h-full object-cover shadow-lg transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                            Professional Software Engineer & Full-Stack Developer
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            I am a passionate developer with a strong foundation in both mobile and web technologies.
                            My journey began at <strong className="text-primary">COMSATS University Islamabad</strong> (Vehari Campus),
                            where I earned my BS in Software Engineering. I strive to create efficient,
                            scalable, and visually appealing applications.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary mt-1">
                                    <FiCode className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-white">Full-Stack Expertise</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Mastery in MERN Stack and cross-platform Flutter development.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/10 rounded-lg text-secondary mt-1">
                                    <FiBook className="text-xl" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 dark:text-white">Continuous Learner</h4>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Always up-to-date with the latest tech trends and best practices.</p>
                                </div>
                            </div>
                        </div>

                        <a href="#contact" className="text-primary font-medium hover:underline decoration-2 underline-offset-4">
                            Let's work together &rarr;
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
