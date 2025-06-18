import { motion, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function getScaledTextXTransform(textWidth, vw) {
    const textCenter = (vw - textWidth) / 2;
    const textScaledXTransform = (vw - textWidth * 0.5) / 2;
    return textCenter - textScaledXTransform;
}

function getTextPadding(padding, titleWidth) {
    const scaledTitleW = titleWidth * 0.4;

    return padding * 2 + scaledTitleW;
}


function centerText(navBarHeight, textHeight) {
    return (navBarHeight - textHeight / 2) / 2;

}

function Subtitle({ vSize, scrollY, titleSize, navBarHeight }) {
    const scaledPadding = vSize.w * 0.01;
    const textRef = useRef(null);
    const [textSize, setTextSize] = useState({ width: 0, height: 0 });
    const lineRef = useRef(null);
    const lineH = lineRef.current?.offsetHeight || 0;

    useEffect(
        () => {
            const observer = new ResizeObserver(([entry]) => {
                const { width, height } = entry.contentRect;
                setTextSize({ width, height });
            });

            if (textRef.current) {
                observer.observe(textRef.current)
            }

            return () => observer.disconnect();

        }, []
    );

    const [wScrollY, setWScrollY] = useState(window.scrollY);
    useEffect(
        () => {
            const handleScroll = () => {
                setWScrollY(window.scrollY);
            };

            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);
        }, [wScrollY]
    );



    const scale = useTransform(scrollY, [300, vSize.h], [1, 0.5]);
    const y = useTransform(scrollY, [300, vSize.h], [(vSize.h - textSize.height) / 2 + titleSize.height, (-textSize.height * (1 - 0.5) / 2) + centerText(navBarHeight, textSize.height)]);
    const x = useTransform(
        scrollY,
        [300, vSize.h],
        [(vSize.w - textSize.width) / 2, getScaledTextXTransform(textSize.width, vSize.w) + getTextPadding(scaledPadding, titleSize.width) + scaledPadding + 2]
    );
    const opacity = useTransform(scrollY, [400, vSize.h], [0, 1]);
    const lineX = getTextPadding(scaledPadding, titleSize.width);
    const lineY = (navBarHeight - lineH) / 2 - 1;

    return (
        <div>
            <motion.div
                ref={lineRef}
                style={{ x: lineX, y: lineY, opacity }}
                className='absolute
                text-[2vw]
                '
            >
                |
            </motion.div>



            <motion.h1
                ref={textRef}
                style={{ scale, y, x }}
                className='
                absolute
                text-[3vw] mobile-tall:text-[4.5vw]
                font-oswald font-light
                '
            >
                Front-End Developer & Graphic Designer
            </motion.h1>
        </div>
    );
}

export default Subtitle;