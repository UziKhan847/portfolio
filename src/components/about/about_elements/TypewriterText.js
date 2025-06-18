import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';


function TypewriterText({ letter, index, inView, duration, delay }) {
    const controls = useAnimation();



    useEffect(
        () => {
            if (inView) {
                controls.start(
                    {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * delay, duration: duration },
                    }
                );
            }
        },
        [controls, delay, duration, inView, index]
    );

    const initial = { opacity: 0, x: -10 };

    return (

        <motion.span
            key={index}
            id={`letter-${index}`}
            className="inline-block "
            initial={initial}
            animate={controls}
        >
            {letter}
        </motion.span>

    );
}

export default TypewriterText;
