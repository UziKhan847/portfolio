import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Sunset from '../../../images/sunset_hill.webp';
import SunsetBlur from '../../../images/blur/sunset_hill_blur.webp';
import CertificateSection from './CertificateSection';

const EDUCATION = [
    {
        title: 'MSc Computer Science',
        subtitle: 'University of York · 2026 – 2027',
        status: 'In progress',
        linkColor: 'amber',
    },
    {
        title: 'B.Ed., Major in Quranic Studies',
        subtitle: 'King Saud University · Riyadh · 2017 – 2022',
        details: ['GPA 4.92 / 5'],
        link: '/portfolio/BEd.webp',
        linkText: 'View the Degree Here',
        linkColor: 'green',
    },
    {
        title: 'JS Algorithms & Data Structures',
        subtitle: 'freeCodeCamp · May 13, 2024',
        details: ['~300 hours', 'Final project: Pokémon Finder (Pokédex)'],
        link: '/portfolio/js.webp',
        linkText: 'View the Certificate Here',
        linkColor: 'red',
    },
    {
        title: 'Responsive Web Design',
        subtitle: 'freeCodeCamp · June 11, 2024',
        details: ['~300 hours', 'Final project: Portfolio site (HTML/CSS)'],
        link: '/portfolio/web.webp',
        linkText: 'View the Certificate Here',
        linkColor: 'blue',
    },
];

function Education() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    // Fade in a pre-blurred copy of the background and a black scrim as the
    // section scrolls — both opacity-only, so no per-frame blur work.
    const scrollRange = [0, 0.5, 1];
    const blurOpacity = useTransform(scrollYProgress, scrollRange, [0, 0.6, 1]);
    const opacity = useTransform(scrollYProgress, scrollRange, [0, 0.6, 1]);

    return (
        <div className='absolute top-0 w-screen z-10'>

            <img
                src={Sunset}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute top-0 h-[100vh] w-full object-cover"
            />

            <motion.img
                src={SunsetBlur}
                alt=""
                style={{ opacity: blurOpacity, willChange: 'opacity' }}
                className="absolute top-0 h-[100vh] w-full object-cover"
            />

            <div
                ref={container}
                style={{ textShadow: '0 8px 8px rgba(0,0,0,0.9)' }}
                className="
                    absolute w-full h-[100vh]
                    flex flex-col items-center justify-center
                    mobile-tall:gap-[5vh] aspect-16/9:gap-20
                    text-white text-center font-oswald">

                <motion.div
                    style={{ opacity, willChange: 'opacity' }}
                    className="absolute inset-0 bg-black" />

                <h2 className="text-[10vw] mobile-tall:text-[14vw] font-bold z-10">EDUCATION</h2>

                <div
                    className="
                        w-[80vw]
                        grid grid-cols-1 md:grid-cols-2 mobile-tall:grid-cols-1 mobile-tall:gap-[4vh] aspect-16/9:grid-cols-2 aspect-16/9:grid-rows-2 aspect-16/9:gap-y-20
                        text-[5vw] lg:text-[2.5vw] mobile-tall:text-[5.5vw] font-firaCode z-10">
                    {EDUCATION.map((entry) => <CertificateSection key={entry.title} {...entry} />)}
                </div>
            </div>
        </div>
    );
}

export default Education;
