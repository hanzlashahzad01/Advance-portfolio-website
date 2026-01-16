import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import HeroBackground from './HeroBackground';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import photo1 from '../assets/photo1.jpeg';
import resume from '../assets/Resume (1).pdf';

const Hero = ({ theme }) => {
    return (
        <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <HeroBackground theme={theme} />

            <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-2">
                        Hi, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
                        Hanzla <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Shahzad</span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-8 h-[50px]">
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                2000,
                                'Flutter Developer',
                                2000,
                                'Full-Stack Web Dev',
                                2000,
                                'MERN Stack Expert',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-lg text-slate-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        I build pixel-perfect, engaging, and accessible digital experiences.
                        Specializing in high-performance web and mobile applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary hover:bg-indigo-600 text-white font-medium transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center gap-2 group"
                        >
                            View Projects
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={resume}
                            download="Hanzla_Shahzad_Resume.pdf"
                            className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary font-medium transition-all flex items-center gap-2"
                        >
                            Download CV
                            <FiDownload />
                        </a>
                    </div>
                </motion.div>

                {/* Hero Image / Avatar (Optional or Placeholder) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
                >
                    {/* Glowing circle behind image */}
                    <div className="absolute w-[300px] h-[300px] bg-secondary/30 rounded-full blur-[80px] -z-10 animate-pulse" />

                    {/* Placeholder for Profile Image */}
                    {/* You can replace this with an actual <img> tag later */}
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative z-10 glass">
                        <img
                            src={photo1}
                            alt="Hanzla Shahzad"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
            >
                <span className="text-sm">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
