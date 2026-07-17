import { useScroll, useTransform, motion } from 'framer-motion';
import Mountain from '../../images/mount_intro.webp';
import { useRef } from 'react';
import WelcomeSnippet from './intro_elements/WelcomeSnippet';
import AboutSnippet from './intro_elements/AboutSnippet';
import Panel from '../Panel';
import { useViewport } from '../../viewport';

function IntroImage() {

    const vSize = useViewport();
    const ref = useRef(null);

    const { scrollY } = useScroll();

    const filter = useTransform(scrollY, [0, vSize.h], [`blur(10px)`, `blur(0px)`]);
    const opacity = useTransform(scrollY, [vSize.h, vSize.h * 1.3], [0, 1]);

    return (
        <div className='relative'>

            <motion.img
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
                style={{ opacity, willChange: 'opacity' }}
                className='absolute inset-0 bg-transparent' >

                <motion.div
                    ref={ref}
                    className='
                        absolute
                        top-2/4
                        left-1/2
                        transform
                        -translate-x-1/2
                        w-[80vw]
                        p-52 mobile-tall:p-0 mobile-tall:pt-32 mobile-tall:pb-32
                        mobile-tall:w-[80vw]
                        grid grid-cols-1 mobile-tall:grid-cols-1 lg:grid-cols-2 gap-[10vw]
                        items-start justify-items-center'>
                    <Panel header="Welcome" ref={ref}>
                        <WelcomeSnippet />
                    </Panel>

                    <Panel header="About" ref={ref}>
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