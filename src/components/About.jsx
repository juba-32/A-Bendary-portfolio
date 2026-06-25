import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '2+' },
        { label: 'Projects Delivered', value: '20+' },
    ];

    return (
        <section id="about" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className=" p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
                    >
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                            About<span className="text-primary">Me</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            I'm a passionate Frontend Developer based in Egypt, dedicated to crafting seamless user interfaces and high-performance web applications. My journey in tech is driven by a fascination with the intersection of design and code.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            Specializing in the Modern Web Stack, I leverage React and Next.js to build scalable products. I believe in writing clean, maintainable code and providing accessible experiences for all users.
                        </p>
                        <div className="flex gap-8">
                            {stats.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-extrabold mb-10 dark:text-white">Technical Expertise</h2>
                        <div className="space-y-6">
                            {[
                                { name: 'HTML5 / CSS3', level: '95%' },
                                { name: 'JavaScript (ES6+)', level: '90%' },
                                { name: 'TypeScript', level: '90%' },
                                { name: 'React.js', level: '90%' },
                                { name: 'Next.js', level: '90%' },
                                { name: 'Material UI', level: '95%' },
                                { name: 'Tailwind CSS', level: '90%' },
                            ].map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold dark:text-gray-200">{skill.name}</span>
                                        <span className="text-primary">{skill.level}</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.level }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-primary"
                                        ></motion.div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
