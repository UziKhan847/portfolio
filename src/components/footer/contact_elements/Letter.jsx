import { useTransform, motion } from "framer-motion";
import { useMemo } from "react";


function Letter({ letter, scrollYProgress, vSize }) {
    const { offsetX, offsetY } = useMemo(() => ({
        offsetX: Math.random() * vSize.w - vSize.w / 2,
        offsetY: Math.random() * vSize.h - vSize.h / 2
    }), [vSize.h, vSize.w]);

    const x = useTransform(scrollYProgress, [0, 0.8], [offsetX, 0]);
    const y = useTransform(scrollYProgress, [0, 0.8], [offsetY, 0]);
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