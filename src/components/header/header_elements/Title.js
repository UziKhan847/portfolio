import { motion, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Subtitle from './Subtitle.js';

function getScaledTextXTransform(textWidth, vw) {
    const textCenter = (vw - textWidth) / 2;
    const textScaledXTransform = (vw - textWidth * 0.4) / 2;
    return textCenter - textScaledXTransform;
}


function centerText(navBarHeight, textHeight) {
    return (navBarHeight - textHeight / 2) / 2;

}
function Title({ vSize, scrollY, navBarHeight }) {
    const scaledPadding = vSize.w * 0.01;
    const textRef = useRef(null);
    const [textSize, setTextSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setTextSize({ width, height });
        })

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const scale = useTransform(scrollY, [300, vSize.h], [1, 0.4]);
    const y = useTransform(scrollY, [300, vSize.h], [(vSize.h - textSize.height) / 2 - 10, (-textSize.height * (1 - 0.5) / 2) + centerText(navBarHeight, textSize.height)]);
    const x = useTransform(
        scrollY,
        [300, vSize.h],
        [(vSize.w - textSize.width) / 2, getScaledTextXTransform(textSize.width, vSize.w) + scaledPadding]
    );

    return (
        <>
            <motion.h1
                ref={textRef}
                style={{ scale, y, x }}
                className="absolute
                text-[5vw] mobile-tall:text-[7vw]
                font-oswald font-semibold"
            >
                Mohammad Uzair Saleem
            </motion.h1>
            <Subtitle vSize={vSize} scrollY={scrollY} titleSize={textSize} navBarHeight={navBarHeight} />
        </>
    );
}


export default Title;