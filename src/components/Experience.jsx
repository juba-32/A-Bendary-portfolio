import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const journey = [
    {
        role: 'Freelance Frontend Developer',
        company: 'Self-Employed',
        period: '2023 - Present',
        description:
            'Delivering high-performance web applications, e-commerce platforms, dashboards, and portfolio websites with a strong focus on UI/UX, responsiveness, and modern frontend architecture.',
    },
    {
        role: 'Junior Frontend Developer',
        company: 'Vanta Web',
        period: '2022 - 2023',
        description:
            'Worked on real-world client projects, transforming UI/UX designs into responsive and accessible web applications using React.js, JavaScript, and modern CSS frameworks.',
    },
];

    return (
        <section id="experience" className="py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center dark:text-white">Professional Journey</h2>

                <div className="space-y-12">
                    {journey.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-primary/30"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                            <div className="mb-2">
                                <span className="text-sm font-bold text-primary uppercase tracking-wider">{item.period}</span>
                                <h3 className="text-2xl font-bold mt-1 dark:text-white">{item.role}</h3>
                                <p className="text-primary font-medium">{item.company}</p>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
