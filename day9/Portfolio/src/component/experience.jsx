import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Experience = () => {
    // Animation variants for container
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    // Animation for left side (year)
    const leftItem = {
        hidden: { opacity: 0, x: -50 },
        show: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Animation for right side (content)
    const rightItem = {
        hidden: { opacity: 0, x: 50 },
        show: { 
            opacity: 1, 
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="border-b border-purple-500/10 pb-24">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="my-20 text-center text-4xl"
            >
                Experience
            </motion.h1>
            
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto px-4"
            >
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-16 flex flex-col lg:flex-row lg:gap-12">
                        <motion.div 
                            variants={leftItem}
                            className="lg:w-1/4"
                        >
                            <p className="text-sm text-gray-400 font-medium">
                                {experience.year}
                            </p>
                        </motion.div>
                        <motion.div 
                            variants={rightItem}
                            className="lg:w-3/4"
                        >
                            <h3 className="text-xl font-semibold text-white">
                                {experience.role}
                                <span className="text-purple-400 ml-2">
                                    @ {experience.company}
                                </span>
                            </h3>
                            <p className="mt-2 text-gray-300">
                                {experience.description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {experience.technologies.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            delay: 0.1 * techIndex,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        className="inline-block px-3 py-1 text-xs font-medium bg-gray-800 text-gray-200 rounded-full"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Experience;