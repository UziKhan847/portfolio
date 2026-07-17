import { useRef } from "react";
import Education from "../closing/education/Education";
import Contact from "./Contact";
import { useScroll, useSpring } from "framer-motion";

function Footer() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

    const smoothProg = useSpring(scrollYProgress, {
        stiffness: 1000,
        damping: 200,
    });

    return (
        <div ref={container} className='relative bg-gray-900 h-[300vh] w-screen'>
            <Education />
            <Contact scrollYProgress={smoothProg} />
        </div>

    )
}

export default Footer;
