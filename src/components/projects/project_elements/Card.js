import { motion, useTransform } from 'framer-motion';

function Card({ vSize, index, cardWidth, color, scrollYProgress, posProgRange, scaleProgRange, yRange, scaleRange }) {

    const position = useTransform(scrollYProgress, posProgRange, yRange)
    const scale = useTransform(scrollYProgress, scaleProgRange, scaleRange)

    return (


        <motion.div
            style={{
                x: (vSize.w - cardWidth) / 2,
                y: position,
                scale,
                backgroundColor: color,
                transformOrigin: "top center", // ← force scaling from the top edge
            }}
            className="absolute top-0 left-0 h-[75%] w-[80%] flex justify-center items-center rounded-2xl"
        />




    );



}


export default Card;