import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function BGImage({ src, vSize, scrollYProgress }) {
    const imgRef = useRef(null);
    const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!imgRef.current) return;
        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setImgSize({ width, height });
        });
        observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    const imgCenterX = (vSize.w - imgSize.width) / 2;
    const imgCenterY = (vSize.h - imgSize.height) / 2;
    const bgParallaxY = useTransform(
        scrollYProgress,
        [0, 1],
        [imgCenterY - 200, imgCenterY + 200]
    );

    return (
        <motion.img
            ref={imgRef}
            src={src}
            alt="Background"
            className="absolute h-[90vh] object-cover"
            style={{
                x: imgCenterX,
                y: bgParallaxY,
            }}
        />
    );
}

export default BGImage;