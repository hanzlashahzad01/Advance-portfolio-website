import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiReact, SiTailwindcss, SiFlutter, SiNodedotjs,
    SiMongodb, SiFirebase, SiGit, SiPostman, SiFigma,
    SiJavascript, SiTypescript, SiDart, SiExpress
} from 'react-icons/si';

const SkillCircle = ({ name, percentage, icon: Icon }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700/50 group w-full sm:w-[150px] md:w-[180px]">
            <div className="relative w-28 h-28 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-slate-200 dark:text-slate-700"
                    />
                    <motion.circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={isInView ? { strokeDashoffset } : {}}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        strokeLinecap="round"
                        className="text-primary drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-4xl text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">
                    <Icon />
                </div>
            </div>
            <h3 className="mt-4 font-bold text-slate-800 dark:text-white">{name}</h3>
            <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{percentage}%</span>
        </div>
    );
};

const SkillBar = ({ name, percentage, icon: Icon }) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <Icon className="text-xl text-primary" />
                    <span className="font-semibold text-slate-700 dark:text-slate-200">{name}</span>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400">{percentage}%</span>
            </div>
            <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
            </div>
        </div>
    );
};

const Skills = () => {
    const topSkills = [
        { name: 'React.js', percentage: 98, icon: SiReact },
        { name: 'Node.js', percentage: 90, icon: SiNodedotjs },
        { name: 'MongoDB', percentage: 90, icon: SiMongodb },
        { name: 'Express', percentage: 90, icon: SiExpress },
    ];

    const moreSkills = [
        { name: 'JavaScript (ES6+)', percentage: 95, icon: SiJavascript },
        { name: 'TypeScript', percentage: 80, icon: SiTypescript },
        { name: 'Flutter', percentage: 70, icon: SiFlutter },
        { name: 'Dart', percentage: 70, icon: SiDart },
        { name: 'Firebase', percentage: 60, icon: SiFirebase },
        { name: 'Git & GitHub', percentage: 90, icon: SiGit },
        { name: 'Postman', percentage: 85, icon: SiPostman },
        { name: 'Figma', percentage: 75, icon: SiFigma },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary font-medium uppercase tracking-wider">My Arsenal</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">Technical Skills</h2>
                    <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Top Skills - Circles */}
                <div className="flex flex-wrap justify-center gap-8 mb-20">
                    {topSkills.map((skill) => (
                        <SkillCircle key={skill.name} {...skill} />
                    ))}
                </div>

                {/* Other Skills - Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto bg-white/50 dark:bg-slate-800/50 p-8 rounded-3xl border border-white/20 shadow-sm backdrop-blur-sm">
                    {moreSkills.map((skill) => (
                        <SkillBar key={skill.name} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
