import { motion, useTransform } from 'framer-motion';
import DartPadEmbed from '../../../DartPadEmbed';
import { useRef, useState } from 'react';

function Card({ scrollYProgress, yTrans, scaleTrans, children, className = '', image, gistId, imageList, id }) {

    const position = useTransform(scrollYProgress, yTrans.progRange, yTrans.range)
    const scale = useTransform(scrollYProgress, scaleTrans.progRange, scaleTrans.range)

    const ref = useRef(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);
    };

    const onMouseLeave = () => setIsDown(false);
    const onMouseUp = () => setIsDown(false);

    const onMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX) * 1; // scroll-fastness multiplier
        ref.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <motion.div
            style={{
                y: position,
                scale,
                willChange: 'scale',
                transformOrigin: "top center",
            }}
            className={`
            absolute left-[5vw]
            h-[70vh] w-[90vw]
            rounded-2xl
            ${className}
            `}>
            <img src={image} alt='card background' className='absolute h-full w-full object-cover rounded-2xl' />
            <div className='absolute top-5 left-10 text-white text-[2vw] mobile-tall:text-[5vw] z-10'>{children}</div>
            <div
                ref={ref}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                className={`
                absolute h-full w-full
                flex items-center justify-center
                bg-black/40
                rounded-2xl
                ${imageList ? `overflow-x-scroll` : ``}`
                }>


                {gistId && <DartPadEmbed gistId={gistId} />}

                {
                    imageList && <div
                        className='absolute left-0 top-0 h-full w-fit pr-32 pl-32 flex items-center gap-[10vw] mobile-tall:gap-[15vw] drop-shadow-2xl'>
                        {
                            imageList.map((img, i) => {
                                return <div key={`${id}_${i}`} className='w-[13vw] mobile-tall:w-[45vw] h-auto rounded-3xl overflow-hidden'>
                                    <img src={img} alt={`invoice_page${i}`} key={`image_${i}`} className='bg-slate-500 text-[200px] w-full h-full' />
                                </div>
                            })
                        }
                    </div>
                }


            </div>
        </motion.div>
    );
}

export default Card;