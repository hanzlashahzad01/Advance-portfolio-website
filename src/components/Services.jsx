import { motion } from 'framer-motion';
import { FiSmartphone, FiLayout, FiServer, FiCheckCircle } from 'react-icons/fi';

const ServiceCard = ({ title, description, icon: Icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2 cursor-pointer"
        >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {description}
            </p>
            <ul className="space-y-2">
                {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <FiCheckCircle className="text-secondary mr-2" />
                        <span>Feature or Benefit {i}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            title: 'Flutter App Development',
            description: 'Building high-performance, cross-platform mobile applications for iOS and Android using a single codebase.',
            icon: FiSmartphone,
            delay: 0.2
        },
        {
            title: 'Full-Stack Web Development',
            description: 'Creating robust and scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).',
            icon: FiServer,
            delay: 0.4
        },
        {
            title: 'UI/UX Implementation',
            description: 'Translating designs into pixel-perfect, responsive, and interactive user interfaces with modern animations.',
            icon: FiLayout,
            delay: 0.6
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium uppercase tracking-wider">What I Offer</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">My Services</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
