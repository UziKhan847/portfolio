import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Cave from '../../images/cave.webp';

function Experience({ vSize }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ['center end', 'center start'] });

    const blur = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ['blur(0px)', 'blur(4px)', 'blur(4px)', 'blur(0px)']);
    const opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], [0, 0.6, 0.6, 0]);

    return (
        <motion.div ref={container}
            style={{
                backdropFilter: blur,
            }}
            className="relative w-full min-h-screen gap-32 flex flex-col items-center justify-center text-white text-center font-oswald"
        >

            <motion.div style={{ opacity }} className='absolute h-screen w-screen bg-black' />

            <h1 className='text-[10vw] font-bold z-10'>
                EXPERIENCE
            </h1>
            <div className='w-[80vw] grid grid-cols-1 md:grid-cols-2 mobile-tall:grid-cols-1 gap-20 text-[5vw] lg:text-[2.5vw] mobile-tall:text-[4.5vw] font-firaCode z-10'>
                <div>
                    <p className='font-bold text-[0.8em]'>
                        Mobile App Developer (FLUTTER)
                    </p>
                    <p className='font-bold text-[0.8em]'>
                        Graphics Designer
                    </p>
                    <p className='text-[0.6em]'>
                        Markaz Umaza &middot; Feb 2024 - Present
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[0.5em]">
                        <li>Developed an Invoice Generator</li>
                        <li>Other apps currently in development</li>
                        <li>Also currently designing website</li>
                    </ul>
                </div>
                <div>
                    <p className='font-bold text-[0.8em]'>
                        Media Content Manager
                    </p>
                    <p className='text-[0.6em]'>
                        Quran Quorum &middot; March 2025 - Present
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-[0.5em]">
                        <li>Made course material</li>
                        <li>Designing website</li>
                    </ul>
                </div>
            </div>


        </motion.div>
    );
}

export default Experience;
