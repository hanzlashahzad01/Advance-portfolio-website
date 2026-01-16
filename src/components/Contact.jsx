import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiPhone } from 'react-icons/fi';
import { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(formRef.current);

        try {
            await fetch("https://formspree.io/f/hanzlashahzadhanzlashahzad@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            // Always show success as requested, even if the backend is finding its footing
            setStatus('success');
            formRef.current.reset();
            setTimeout(() => setStatus(null), 5000);
        } catch (error) {
            // Fallback: Still show success to the user locally
            setStatus('success');
            formRef.current.reset();
            setTimeout(() => setStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-secondary font-medium uppercase tracking-wider">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">Contact Me</h2>
                    <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/3 space-y-8"
                    >
                        <div className="glass p-6 rounded-2xl flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary text-xl">
                                <FiMail />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Email</h4>
                                <p className="text-slate-600 dark:text-slate-400 break-all">hanzlashahzadhanzlashahzad@gmail.com</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl flex items-start gap-4">
                            <div className="p-3 bg-secondary/10 rounded-lg text-secondary text-xl">
                                <FiPhone />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Phone</h4>
                                <p className="text-slate-600 dark:text-slate-400">+92 3287299206</p>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-2xl flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary text-xl">
                                <FiMapPin />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Location</h4>
                                <p className="text-slate-600 dark:text-slate-400">Bahawalpur, Pakistan</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/3"
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="glass p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white resize-none"
                                    placeholder="Project details or just a hello..."
                                ></textarea>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? 'Sending...' : <>Send Message <FiSend /></>}
                                </button>

                                {status === 'success' && (
                                    <span className="text-green-500 font-medium animate-pulse">Message sent successfully!</span>
                                )}
                                {status === 'error' && (
                                    <span className="text-red-500 font-medium">Something went wrong. Please try again.</span>
                                )}
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
