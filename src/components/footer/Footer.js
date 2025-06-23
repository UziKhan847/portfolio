import { useRef } from "react";
import Education from "../closing/education/Education";
import Contact from "./Contact";
import { useScroll } from "framer-motion";

function Footer({ vSize }) {
    const container = useRef();

    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });


    return (
        <div ref={container} className='relative bg-gray-900 h-[300vh] w-screen'>
            <Education vSize={vSize} />
            <Contact scrollYProgress={scrollYProgress} vSize={vSize} />
        </div>

    )
}

export default Footer;
