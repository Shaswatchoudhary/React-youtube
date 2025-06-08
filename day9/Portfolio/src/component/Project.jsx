import { PROJECTS } from '../constants'
import { motion } from "framer-motion"

const Project = () => {
    // Animation variants for project items
    const container = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: 20 },
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
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h1>
            
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-16"
            >
                {PROJECTS.map((project, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ backgroundColor: 'rgba(17, 24, 39, 0.3)' }}
                        className="flex flex-wrap lg:justify-center p-4 rounded-lg transition-all duration-300"
                    >
                        <motion.div variants={item} className='w-full lg:w-1/4 flex justify-center lg:justify-start mb-4 lg:mb-0'>
                            <motion.img 
                                src={project.image} 
                                alt={project.title} 
                                className="rounded-lg shadow-lg object-cover h-40 w-64 hover:scale-105 transition-transform duration-300"
                                whileHover={{ scale: 1.02 }}
                            />
                        </motion.div>
                        <motion.div variants={item} className='w-full max-w-xl lg:w-3/4 lg:pl-8'>
                            <h3 className="mb-2 text-xl font-semibold text-white">
                                {project.title}
                            </h3>
                            <p className='mb-4 text-gray-400'>{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex}
                                        variants={item}
                                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-200 hover:bg-purple-600 hover:text-white transition-colors duration-200"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Project;