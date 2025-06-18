
import { motion, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';

function ContentBox({ vSize, scrollYProgress, inView }) {
    const boxRef = useRef(null);
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            const { inlineSize: width, blockSize: height } = entry.borderBoxSize[0] || entry.contentBoxSize[0] || {};
            setBoxSize({ width, height });
        });

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }
        console.log(inView);

        return () => observer.disconnect();
    }, []);

    const aboutText = 'I am Mohammad Uzair Saleem, a Front-End Developer and Graphic Designer with 1+ year of experience in Flutter and basic skills in React and Tailwind CSS. I’ve developed an app for a company, with two more in progress, and am always eager to learn and take on new coding challenges. I also have a strong background in graphic design, creating logos, posters, and websites, and integrate these designs into my front-end development to craft unique, visually appealing assets. As a trilingual, native English speaker, I bring diverse perspectives to my work and am committed to continuous improvement.';

    const wordList = aboutText.split(' ');

    const centerY = (vSize.h - boxSize.height) / 2;
    const centerX = (vSize.w - boxSize.width) / 2;
    const boxPosition = { x: -vSize.w / 10, y: useTransform(scrollYProgress, [0.3, 1], [centerY + 50, centerY]) };

    return (
        <motion.div
            ref={boxRef}
            style={{ x: boxPosition.x, y: boxPosition.y }}
            className="absolute right-0
                     border-[3px] border-dashed border-gray-800 rounded-2xl
                     bg-white/60
                     w-[40vw] p-10
                     shadow-gray-300
                     shadow-md
                     ">
            <div className=" text-black text-[1.6em] tracking-wide font-lato font-light">
                <div className='flex flex-wrap gap-x-2 justify-center font-light'>

                    {
                        wordList.map((letter, i) => (
                            <TypewriterText key={i} index={i} inView={inView} letter={letter} duration={0.1} delay={0.02} />
                        ))}

                </div>


            </div>
        </motion.div>
    );

}

export default ContentBox;

