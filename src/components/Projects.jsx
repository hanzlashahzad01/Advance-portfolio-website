import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
    {
        id: 1,
        title: 'SmartFix',
        category: 'MERN',
        image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/hanzlashahzad01/smartfix',
        demo: 'https://github.com/hanzlashahzad01/smartfix',
    },
    {
        id: 2,
        title: 'Task Management App',
        category: 'Flutter',
        image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tech: ['Flutter', 'Dart', 'Firebase'],
        github: 'https://github.com/hanzlashahzad01/App-Development',
        demo: 'https://github.com/hanzlashahzad01/App-Development',
    },
    {
        id: 3,
        title: 'Student Smart Complaint System',
        category: 'Flutter',
        image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tech: ['Flutter', 'Dart', 'Firebase'],
        github: 'https://github.com/hanzlashahzad01/App-Development',
        demo: 'https://github.com/hanzlashahzad01/App-Development',
    },
    {
        id: 4,
        title: 'QuickShop',
        category: 'Web',
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80',
        tech: ['PHP', 'MySQL', 'HTML/CSS'],
        github: 'https://github.com/hanzlashahzad01/QuickShop',
        demo: 'https://github.com/hanzlashahzad01/QuickShop',
    },
    {
        id: 5,
        title: 'FoodieHub Website',
        category: 'Web',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/hanzlashahzad01/FoodieHub-Website',
        demo: 'https://github.com/hanzlashahzad01/FoodieHub-Website',
    },
    {
        id: 6,
        title: 'Comsats Portal',
        category: 'Web',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
        tech: ['PHP', 'MySQL'],
        github: 'https://github.com/hanzlashahzad01/comsats-portal',
        demo: 'https://github.com/hanzlashahzad01/comsats-portal',
    },
    {
        id: 7,
        title: 'Portfolio Website',
        category: 'Web',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80',
        tech: ['React', 'CSS'],
        github: 'https://github.com/hanzlashahzad01/Portfolio-Website',
        demo: 'https://github.com/hanzlashahzad01/Portfolio-Website',
    }
];

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 group"
        >
            <div className="relative overflow-hidden h-48 md:h-60">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors border border-white/20"
                        title="View Code"
                    >
                        <FiGithub className="text-xl" />
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors border border-white/20"
                        title="Live Demo"
                    >
                        <FiExternalLink className="text-xl" />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">{project.category}</span>
                <h3 className="text-xl font-bold mt-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 line-clamp-2">
                    A high-performance application built with modern technologies. Check out the live demo to see it in action.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-xs font-medium text-slate-500 dark:text-slate-400">#{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Web', 'MERN', 'Flutter'];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-secondary font-medium uppercase tracking-wider">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">Featured Projects</h2>
                    <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap gap-y-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === category
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="text-center mt-12">
                    <a href="https://github.com/hanzlashahzad01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors font-medium">
                        View more on GitHub <FiExternalLink />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
