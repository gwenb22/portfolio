import { motion } from 'framer-motion';

const Sticker = ({ children, className, rotation = 0, delay = 0 }) => {
    // Constrain rotation to -4° to +4° as per design system
    const constrainedRotation = Math.max(-4, Math.min(4, rotation));

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: constrainedRotation - 10 }}
            animate={{ opacity: 1, scale: 1, rotate: constrainedRotation }}
            transition={{
                delay: delay,
                type: "spring",
                stiffness: 200,
                damping: 15
            }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
            drag
            dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
            className={`absolute cursor-grab active:cursor-grabbing font-bold uppercase text-center shadow-lg border-2 border-black ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Sticker;
