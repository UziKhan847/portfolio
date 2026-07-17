import { useTransform, motion } from "framer-motion";
import { useState } from "react";
import { useViewport } from "../../../viewport";

function Letter({ letter, scrollYProgress }) {
    const vSize = useViewport();

    // Lazy initialiser: pick a random scatter position once, on mount, instead
    // of calling Math.random() during every render (which is impure and would
    // recompute unpredictably).
    const [offset] = useState(() => ({
        x: Math.random() * vSize.w - vSize.w / 2,
        y: Math.random() * vSize.h - vSize.h / 2,
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
