import { motion } from "framer-motion";

function DrawingTraingle() {
    return (
        <motion.svg

            width="200"
            height="200"
            viewBox="0 0 200 200"
            xlmns="http://www.w3.org/2000/svg"
            className="triangle-svg"
        >
            <motion.polyline />
        </motion.svg>
    );

}


export default DrawingTraingle;