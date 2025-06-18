
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import DartPadEmbed from '../DartPartEmbed';
import Card from './project_elements/Card';

function Projects({ vSize }) {
    const container = useRef(null);
    const cardWidth = vSize.w * 0.8;
    const cardHeight = vSize.h * 0.75;

    const colors = ['#FF0000', '#00FF00', '#0000FF'];

    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end start'] });


    return (
        <div ref={container} className='h-[400vh] w-[100vw] bg-gradient-to-b from-white to-gray-400 font-oswald'>

            <div className='relative bg-transparent h-96 w-screen'>

                <span className='absolute text-[10vw] left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                    PROJECTS
                </span>

            </div>

            <div className="sticky top-0 h-[100vh] w-screen bg-transperent">
                {
                    colors.map((color, index) => {
                        return (
                            <Card
                                key={`card${index}`}
                                index={index}
                                vSize={vSize}
                                cardWidth={cardWidth}
                                color={color}
                                scrollYProgress={scrollYProgress}
                                posProgRange={[(1 / 4) * index, 1 / 5 * (index + 1)]}
                                scaleProgRange={[1 / 5 * (index + 1), 1]}
                                yRange={[vSize.h * 2, 100 + (vSize.h * 0.03 * index)]}
                                scaleRange={[1, 0.8]}
                            />
                        );
                    })
                }

            </div>

        </div>


    )
}

export default Projects;