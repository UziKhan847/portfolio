import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Sunset from '../../../images/sunset_hill.webp';
import CertificateSection from './CertificateSection';

function Education({ vSize }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    // Define scroll range for blur and opacity animations
    const scrollRange = [0, 0.5, 1];
    const blur = useTransform(
        scrollYProgress,
        scrollRange,
        ['blur(0px)', 'blur(4px)', 'blur(10px)']
    );
    const opacity = useTransform(
        scrollYProgress,
        scrollRange,
        [0, 0.6, 1]
    );

    return (
        <div className='absolute top-0 w-screen z-10'>

            <img
                src={Sunset}
                alt="education"
                className="absolute top-0 h-[100vh] w-full object-cover"
            />


            <motion.div
                ref={container}
                style={{
                    backdropFilter: blur,
                    textShadow: '0 8px 8px rgba(0,0,0,0.9)',
                    willChange: 'backdropFilter'
                }}
                className="
                    absolute w-full h-[100vh]
                    flex flex-col items-center justify-center
                    mobile-tall:gap-[5vh] aspect-16/9:gap-20
                    text-white text-center font-oswald">


                <motion.div
                    style={{ opacity, willChange: 'opacity' }}
                    className="absolute inset-0 bg-black" />


                <h1 className="text-[10vw] mobile-tall:text-[14vw] font-bold z-10">EDUCATION</h1>


                <div
                    className="
                        w-[80vw]
                        grid grid-cols-1 md:grid-cols-2 mobile-tall:grid-cols-1 mobile-tall:gap-[4vh] aspect-16/9:grid-cols-2 aspect-16/9:grid-rows-2 aspect-16/9:gap-y-20
                        text-[5vw] lg:text-[2.5vw] mobile-tall:text-[5.5vw] font-firaCode z-10">

                    <CertificateSection
                        title="JS Algorithms & Data Structures"
                        date="FreeCodeCamp · May 13, 2024"
                        timeSpent="~300 hours"
                        project="Pokémon Finder (Pokédex)"
                        certificateLink="/portfolio/js.jpg"
                        linkText="View the Certificate Here"
                        certificateImg="/js.jpg"
                        linkColor="red"
                    />

                    <CertificateSection
                        title="Responsive Web Design"
                        date="FreeCodeCamp · June 11, 2024"
                        timeSpent="~300 hours"
                        project="Portfolio site (HTML/CSS)"
                        certificateLink="/portfolio/web.jpg"
                        linkText="View the Certificate Here"
                        certificateImg="/portfolio/web.jpg"
                        linkColor="blue"
                    />

                    <CertificateSection
                        title="Bachelor of Education (B.Ed.)"
                        date="King Saud Sunset · Jan 2023"
                        timeSpent="N/A"
                        project="Major: Quranic Studies"
                        certificateLink="/portfolio/BEd.jpg"
                        linkText="View the Degree Here"
                        certificateImg="/portfolio/BEd.jpg"
                        linkColor="green"
                    />
                </div>



            </motion.div >
        </div >

    );
}

export default Education;
