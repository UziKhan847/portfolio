import { useScroll, useTransform, motion } from 'framer-motion';
import Mountain from '../../images/mount_intro.webp';
import { useEffect, useRef, useState } from 'react';
import WelcomeSnippet from './intro_elements/WelcomeSnippet';
import AboutSnippet from './intro_elements/AboutSnippet';
import Panel from '../Panel';

function IntroImage({ vSize }) {

    const imgRef = useRef(null);
    const [imgH, setImgH] = useState(0);

    useEffect(
        () => {
            const observer = new ResizeObserver(
                ([entry]) => {
                    const { height } = entry.contentRect;
                    setImgH(height);
                }
            );

            if (imgRef.current) {
                observer.observe(imgRef.current);
            }

            return () => {
                observer.disconnect();
            }

        },
        []
    );

    const { scrollY } = useScroll({ layoutEffect: false });

    const filter = useTransform(scrollY, [0, vSize.h], [`blur(10px)`, `blur(0px)`]);
    const opacity = useTransform(scrollY, [vSize.h, vSize.h * 1.3], [0, 1]);

    return (
        <div className='relative'>

            <motion.img
                ref={imgRef}
                src={Mountain}
                alt='BigMountain'
                style={{
                    filter,
                }}
                className='
                sticky top-0
                w-screen h-[200vh]
                object-cover'
            />

            <motion.div
                style={{ opacity }}
                className='absolute inset-0 bg-transparent' >

                <motion.div
                    className='
                        absolute
                        top-2/4
                        left-1/2
                        transform
                        -translate-x-1/2
                        w-[80vw]
                        mobile-tall:w-[80vw]
                        grid grid-cols-1 mobile-tall:grid-cols-1 lg:grid-cols-2 gap-[10vw]
                        items-start justify-items-center'>
                    <Panel header="Welcome">
                        <WelcomeSnippet />
                    </Panel>

                    <Panel header="About">
                        <AboutSnippet />
                    </Panel>
                </motion.div>

                <div className='
                absolute
                h-[50vh] w-screen 
                bg-gradient-to-b from-transparent to-gray-950 bottom-0 '>
                </div>

            </motion.div>

            <div className='w-screen h-[150vh] bg-black' />
        </div>
    );
}


export default IntroImage;