import { motion, useTransform, useMotionValue, scale } from "framer-motion";

function LogoDrag({
    LogoComponent,
    ref,
}) {



    return (
        <motion.div
            drag
            dragConstraints={ref}
            whileTap={{ cursor: 'grabbing' }}
            whileDrag={{ scale: 1.2 }}
            className='
            transform'
            style={{
                filter: 'drop-shadow(2px 4px 12px rgba(0,0,0,1))',
                cursor: 'grab'
            }}
        >
            <LogoComponent
                className='h-[20vw] md:h-[15vw] lg:h-[10vw] mobile-tall:h-[23vw]'
            />
        </motion.div>

    );
}

export default LogoDrag;

