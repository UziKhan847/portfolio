
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Card from './project_elements/Card';

function Projects({ vSize }) {
    const container = useRef(null);
    const cardWidth = vSize.w * 0.9;
    const cardHeight = vSize.h * 0.75;

    const colors = ['#FF0000', '#00FF00', '#0000FF'];

    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end start'] });


    return (
        <div ref={container} className='h-[400vh] w-[100vw] bg-gray-950 font-oswald'>
            <div className='sticky top-0 h-screen w-screen'>

                <div className='h-[3.5vw] mobile-tall:h-[5vw] w-screen' />
                <span className='text-[5vw] mobile-tall:text-[10vw] left-[1vw] p-[4vw] mobile-tall:left-[3vw] top-1/2 transform -translate-y-1/2  text-white'>
                    PROJECTS
                </span>
                {
                    colors.map((color, i) => {
                        return (
                            <Card
                                key={`card${i}`}
                                index={i}
                                vSize={vSize}
                                cardWidth={cardWidth}
                                color={color}
                                scrollYProgress={scrollYProgress}
                                yTrans={
                                    {
                                        progRange: [(1 / 5) * i, 1 / 5 * (i + 1)],
                                        range: [vSize.h, 0 + (vSize.h * (0.0175 * i))]
                                    }
                                }
                                scaleTrans={{ progRange: [(1 / 5 * (i + 1)), 1], range: [1, 0.8] }}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Projects;