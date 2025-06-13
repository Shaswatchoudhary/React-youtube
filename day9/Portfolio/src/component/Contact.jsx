import { CONTACT } from "../constants"
import { motion, MotionConfig } from "framer-motion"

const Contact = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
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
                Contact Us
            </motion.h1>
            
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-2xl mx-auto"
            >
                <motion.div 
                    variants={item}
                    className="text-center space-y-6"
                >
                    <motion.p 
                        variants={item}
                        className="text-lg text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        {CONTACT.address}
                    </motion.p>
                    <motion.p 
                        variants={item}
                        className="text-lg text-gray-300 hover:text-white transition-colors duration-300"
                    >
                        {CONTACT.phoneNo}
                    </motion.p>
                    <motion.a 
                        href={`mailto:${CONTACT.email}`}
                        variants={item}
                        className="inline-block text-lg text-purple-400 hover:text-purple-300 border-b border-transparent hover:border-purple-400 transition-all duration-300 pb-1"
                        whileHover={{ scale: 1.05 }}
                    >
                        {CONTACT.email}
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Contact;