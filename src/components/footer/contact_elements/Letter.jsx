import { useTransform, motion } from "framer-motion";
import { useState } from "react";

function Letter({ letter, scrollYProgress }) {
    // Lazy initialiser: pick a random scatter position once, on mount, instead
    // of calling Math.random() during every render (which is impure and would
    // recompute unpredictably). The window size is read directly rather than
    // via useViewport() so the ~100 letters don't all re-render on every
    // resize (including each time a mobile browser's URL bar shows or hides).
    const [offset] = useState(() => ({
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
    }));

    const x = useTransform(scrollYProgress, [0, 0.8], [offset.x, 0]);
    const y = useTransform(scrollYProgress, [0, 0.8], [offset.y, 0]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.6, 0.8], [0, 0.5, 1]);

    return (
        <motion.span
            style={{ x, y, opacity }}
            className="inline-block"
        >
            {letter}
        </motion.span>
    );
}

export default Letter;
