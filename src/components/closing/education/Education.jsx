import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Sunset from '../../../images/sunset_hill.webp';

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
                    textShadow: '0 8px 8px rgba(0,0,0,0.9)'
                }}
                className="
                    absolute w-full h-[100vh]
                    flex flex-col items-center justify-center
                    mobile-tall:gap-40 aspect-16/9:gap-20
                    text-white text-center font-oswald">


                <motion.div
                    style={{ opacity }}
                    className="absolute inset-0 bg-black" />


                <h1 className="text-[10vw] mobile-tall:text-[14vw] font-bold z-10">EDUCATION</h1>


                <div
                    className="
                        w-[80vw]
                        grid grid-cols-1 md:grid-cols-2 mobile-tall:grid-cols-1 mobile-tall:gap-48 aspect-16/9:grid-cols-2 aspect-16/9:grid-rows-2 aspect-16/9:gap-y-20
                        text-[5vw] lg:text-[2.5vw] mobile-tall:text-[6vw] font-firaCode z-10">

                    <section>
                        <p className="font-bold text-[0.8em]">JS Algorithms & Data Structures</p>
                        <p className="text-[0.6em]">FreeCodeCamp &middot; May 13, 2024</p>
                        <ul className="list-disc list-inside space-y-2 text-[0.5em]">
                            <li>Time spent: ~300 hours</li>
                            <li>Final Project: Pokémon Finder (Pokédex)</li>
                            <a
                                href="/js.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-300 hover:underline">
                                View the Certificate Here
                            </a>
                        </ul>
                    </section>

                    <section>
                        <p className="font-bold text-[0.8em]">Responsive Web Design</p>
                        <p className="text-[0.6em]">FreeCodeCamp &middot; June 11, 2024</p>
                        <ul className="list-disc list-inside space-y-2 text-[0.5em]">
                            <li>Time spent: ~300 hours</li>
                            <li>Final Project: Portfolio site (HTML/CSS)</li>
                            <a
                                href="/web.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 hover:underline">
                                View the Certificate Here
                            </a>
                        </ul>
                    </section>

                    <section className="aspect-16/9:col-span-2 aspect-16/9:justify-self-center">
                        <p className="font-bold text-[0.8em]">Bachelor of Education (B.Ed.)</p>
                        <p className="text-[0.6em]">King Saud Sunset &middot; Jan 2023</p>
                        <ul className="list-disc list-inside space-y-2 text-[0.5em]">
                            <li>Major: Quranic Studies</li>
                            <li>Graduated with Honors</li>
                            <a
                                href="/BEd.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-300 hover:underline">
                                View the Degree Here
                            </a>
                        </ul>
                    </section>
                </div>



            </motion.div>
        </div>

    );
}

export default Education;
