import { motion } from "framer-motion";

function LogoDrag({ LogoComponent, name }) {
    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            style={{
                filter: 'drop-shadow(2px 4px 12px rgba(0,0,0,1))',
                willChange: 'transform'
            }}
        >
            <LogoComponent
                role='img'
                aria-label={name}
                className='h-[20vw] md:h-[15vw] lg:h-[10vw] mobile-tall:h-[23vw]'
            />
        </motion.div>
    );
}

export default LogoDrag;
