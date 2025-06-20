import { motion, useTransform } from 'framer-motion';

function Card({ vSize, index, cardWidth, color, scrollYProgress, yTrans, scaleTrans }) {

    const position = useTransform(scrollYProgress, yTrans.progRange, yTrans.range)
    const scale = useTransform(scrollYProgress, scaleTrans.progRange, scaleTrans.range)

    return (
        <motion.div
            style={{
                x: (vSize.w - cardWidth) / 2,
                y: position,
                scale,
                backgroundColor: color,
                transformOrigin: "top center",
            }}
            className="
            absolute
            h-[75vh] w-[90vw]
            flex justify-center items-center rounded-2xl"/>
    );
}

export default Card;