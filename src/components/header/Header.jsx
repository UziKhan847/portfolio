import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Title from './header_elements/Title.jsx';
import { useViewport } from '../../viewport';

function getNavBarH(vSize) {
    if (vSize.w / vSize.h < 1) {
        return vSize.w * 0.05;
    }
    return vSize.w * 0.035;
}

function Header() {
    const vSize = useViewport();
    const scrollRef = useRef(null);
    const { scrollY } = useScroll();

    const smoothScrollY = useSpring(scrollY, {
        stiffness: 200,
        damping: 30,
    });

    const rawHeight = useTransform(
        scrollY,
        [0, vSize.h],
        [vSize.h, getNavBarH(vSize)]
    );

    const height = useSpring(rawHeight, {
        stiffness: 200,
        damping: 30,
    });

    return (
        <div>
            <motion.div ref={scrollRef} style={{ height, willChange: 'height' }} className="fixed w-screen bg-white/60 backdrop-blur-md z-50 shadow-md">

                <Title scrollY={smoothScrollY} navBarHeight={getNavBarH(vSize)} />

            </motion.div>

        </div>

    );
}

export default Header;
