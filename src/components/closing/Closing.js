
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import EduImg from '../../images/wood_background.webp';
import Projects from './projects/Projects';

function Closing({ vSize }) {
    const opaqueCont = useRef(null);
    const { scrollYProgress } = useScroll({ target: opaqueCont, offset: ['start end', 'end start'] });


    const blur = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ['blur(0px)', 'blur(4px)', 'blur(4px)', 'blur(0px)']);
    const opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 0.6, 0.6, 0]);

    return (
        <div className='relative w-screen h-[500vh] bg-red-900'>

            <section className='sticky top-0'>
                <img
                    src={EduImg}
                    alt='education'
                    className='
                absolute fhd:top-0
                h-screen fhd:w-screen fhd:h-auto
                object-cover
                '/>

                <motion.div
                    style={{
                        blur,
                        opacity
                    }}
                    className='absolute top-0 bg-black h-screen w-screen'></motion.div>
            </section>


            <section className='absolute top-0'>
                <Projects vSize={vSize} />
                <div ref={opaqueCont} className='h-screen w-screen'></div>
            </section>


        </div>

    )
}

export default Closing;