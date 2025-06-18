import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Title from './header_elements/Title.js';


function getNavBarH(vSize) {
    if (vSize.w / vSize.h < 1) {
        return vSize.w * 0.05;
    }
    return vSize.w * 0.035;
}

function Header({ vSize }) {
    const scrollRef = useRef(null);
    //const navBarH = vSize.w * 0.035;
    const { scrollY } = useScroll();


    // Framer Motion transforms
    const height = useTransform(scrollY, [0, vSize.h], [vSize.h, getNavBarH(vSize)]);

    return (
        <div>
            <motion.div ref={scrollRef} style={{ height }} className="fixed w-screen bg-white/60 backdrop-blur-md z-50 shadow-md">

                <Title vSize={vSize} scrollY={scrollY} navBarHeight={getNavBarH(vSize)} />


            </motion.div>

        </div>

    );
}

export default Header;
