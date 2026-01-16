import { motion } from 'framer-motion';

const GitHubStats = ({ theme }) => {
    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-primary font-medium uppercase tracking-wider">Code Activity</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900 dark:text-white">GitHub Stats</h2>
                    <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <div className="flex flex-col items-center gap-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                        <motion.img
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=hanzlashahzad01&theme=${theme === 'dark' ? 'solarized_dark' : 'default'}`}
                            alt="Hanzla's GitHub Stats"
                            className="w-full h-auto glass rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
                        />
                        <motion.img
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            src={`https://github-readme-streak-stats.herokuapp.com/?user=hanzlashahzad01&theme=${theme === 'dark' ? 'tokyonight' : 'default'}&hide_border=true&background=${theme === 'dark' ? '0f172a00' : 'ffffff00'}`}
                            alt="Hanzla's GitHub Streak"
                            className="w-full h-auto glass rounded-xl shadow-lg border border-slate-200 dark:border-slate-800"
                        />
                    </div>

                    {/* Contribution Graph */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="w-full max-w-4xl glass p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex justify-center overflow-auto"
                    >
                        <img
                            src={`https://ghchart.rshah.org/${theme === 'dark' ? 'a855f7' : '6366f1'}/hanzlashahzad01`}
                            alt="Contribution Graph"
                            className="w-full min-w-[600px]"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
