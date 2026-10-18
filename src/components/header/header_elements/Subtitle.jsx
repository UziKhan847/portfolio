import { motion, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useViewport } from '../../../viewport';
import { getLayoutEnd, getShrinkStart, getDividerFadeStart } from '../headerScroll';

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

function Subtitle({ scrollY, titleSize, navBarHeight }) {
    const vSize = useViewport();
    const scaledPadding = vSize.w * 0.01;
    const shrinkStart = getShrinkStart(vSize.h);
    const layoutEnd = getLayoutEnd(vSize.h);
    const textRef = useRef(null);
    const [textSize, setTextSize] = useState({ width: 0, height: 0 });
    const lineRef = useRef(null);
    const [lineH, setLineH] = useState(0);

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

    useEffect(() => {
        if (!lineRef.current) return;
        const observer = new ResizeObserver(([entry]) => {
            setLineH(entry.contentRect.height);
        });
        observer.observe(lineRef.current);
        return () => observer.disconnect();
    }, []);

    const scale = useTransform(scrollY, [shrinkStart, layoutEnd], [1, 0.5]);
    const y = useTransform(scrollY, [shrinkStart, vSize.h], [(vSize.h - textSize.height) / 2 + titleSize.height, (-textSize.height * (1 - 0.5) / 2) + centerText(navBarHeight, textSize.height)]);
    const x = useTransform(
        scrollY,
        [shrinkStart, layoutEnd],
        [(vSize.w - textSize.width) / 2, getScaledTextXTransform(textSize.width, vSize.w) + getTextPadding(scaledPadding, titleSize.width) + scaledPadding + 2]
    );
    const opacity = useTransform(scrollY, [getDividerFadeStart(vSize.h), vSize.h], [0, 1]);
    const lineX = getTextPadding(scaledPadding, titleSize.width);
    const lineY = (navBarHeight - lineH) / 2 - 1;

    return (
        <div>
            <motion.div
                ref={lineRef}
                style={{ x: lineX, y: lineY, opacity }}
                aria-hidden='true'
                className='absolute
                text-[2vw]
                '
            >
                |
            </motion.div>



            <motion.p
                ref={textRef}
                style={{ scale, y, x, willChange: 'transform' }}
                className='
                absolute
                text-[3vw] mobile-tall:text-[4.5vw]
                font-oswald font-light
                '
            >
                Full-Stack Developer & Graphic Designer
            </motion.p>
        </div>
    );
}

export default Subtitle;