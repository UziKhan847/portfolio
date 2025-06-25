import { GraphPattern } from '../../assets';
import { motion, useScroll, useTransform, useAnimation, inView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import TypewriterText from './about_elements/TypewriterText';
import ContentBox from './about_elements/ContentBox';





function About({ vSize }) {
    const backgroundRef = useRef(null);
    const stickyRef = useRef(null);
    // const [inViewBg, setInViewBg] = useState(false);
    const [thresholds, setThresholds] = useState(
        {
            threshold25: false,
            threshold50: false,
            threshold75: false,
            threshold100: false,
        }
    )

    const { scrollYProgress } = useScroll({ target: backgroundRef, offset: ['start end', 'end start'] });

    const backgroundPatternY = useTransform(scrollYProgress, [0, 1], [100, -100]);





    useEffect(
        () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            if (entry.intersectionRatio >= 0.25 && !thresholds.threshold25) {
                                setThresholds((prev) => ({ ...prev, threshold25: true }));
                            }
                            if (entry.intersectionRatio >= 0.5 && !thresholds.threshold50) {
                                setThresholds((prev) => ({ ...prev, threshold50: true }));
                            }
                            if (entry.intersectionRatio >= 0.75 && !thresholds.threshold75) {
                                setThresholds((prev) => ({ ...prev, threshold75: true }));
                            }
                            if (entry.intersectionRatio >= 1 && !thresholds.threshold100) {
                                setThresholds((prev) => ({ ...prev, threshold100: true }));
                            }
                        }
                    })
                }, {
                threshold: [0.25, 0.5, 0.75, 1]
            }
            );

            const element = stickyRef.current;

            if (element) {
                observer.observe(element);
            }

            console.log(thresholds);

            return () => {
                if (element) {
                    observer.unobserve(element);
                }
            }

        },
        [thresholds]
    );



    return (
        <div ref={backgroundRef} className='h-[300vh] bg-white'>



            <div ref={stickyRef} className="sticky top-0 bg-transparent text-center text-white h-[100vh] overflow-clip">

                <motion.div style={{ backgroundImage: `url(${GraphPattern})`, y: backgroundPatternY }}
                    className='
            absolute
            top-[-200px]
            bg-[length:150px_150px]
            bg-repeat
            opacity-45
            w-screen h-[400vh]
            ' />

                <section>
                    <div className='absolute top-[20vh] left-[25vw] text-[14em] transform -translate-x-1/2 -translate-y-1/2 font-oswald font-bold'>

                        <div className="relative text-gray-800">
                            <div>
                                {
                                    'About'.split("").map((letter, i) => (
                                        <TypewriterText key={i} index={i} inView={thresholds.threshold25} letter={letter} duration={0.5} delay={0.1} />
                                    ))}
                                <motion.div style={{ x: 40, y: backgroundPatternY }} className="absolute text-black/10 blur-sm text-[0.97zzzem] top-[30px] z-[-1]">
                                    {
                                        'About'.split("").map((letter, i) => (
                                            <TypewriterText key={i} index={i} inView={thresholds.threshold25} letter={letter} duration={0.5} delay={0.1} />
                                        ))}
                                </motion.div>
                            </div>

                        </div>

                    </div>



                </section>

                <section >
                    <ContentBox vSize={vSize} scrollYProgress={scrollYProgress} inView={thresholds.threshold50} />
                </section>





            </div>
        </div>

    );
}

export default About;