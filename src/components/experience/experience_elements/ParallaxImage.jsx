import { useTransform, motion } from "framer-motion";

function ParallaxImage({ src, index, scrollYProgress }) {

    const y = useTransform(scrollYProgress, [0, 1], [0, -500 * index]);

    return (
        <motion.img
            src={src}
            alt={`Parallax layer ${index}`}
            style={{ y }}
            className="absolute w-screen h-[150vh] object-cover"
        />
    );
}

export default ParallaxImage;