import { motion, useTransform } from 'framer-motion';
import DartPadEmbed from '../../../DartPadEmbed';
import { useRef } from 'react';

function Card({ project, images, scrollYProgress, yTrans, scaleTrans }) {
    const { title, href, tech, badge, description, image, gradient, gistId } = project;
    const hasMedia = Boolean(images?.length || gistId);

    const position = useTransform(scrollYProgress, yTrans.progRange, yTrans.range);
    const scale = useTransform(scrollYProgress, scaleTrans.progRange, scaleTrans.range);

    // Click-and-drag horizontal scrolling for the screenshot strip. Kept in a
    // ref rather than state: it only matters inside the event handlers, so
    // there's no reason to re-render the card on every mouse down/up.
    const ref = useRef(null);
    const drag = useRef({ isDown: false, startX: 0, scrollLeft: 0 });

    const onMouseDown = (e) => {
        drag.current = {
            isDown: true,
            startX: e.pageX - ref.current.offsetLeft,
            scrollLeft: ref.current.scrollLeft,
        };
    };

    const stopDrag = () => { drag.current.isDown = false; };

    const onMouseMove = (e) => {
        if (!drag.current.isDown) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        ref.current.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX);
    };

    return (
        <motion.div
            style={{
                y: position,
                scale,
                willChange: 'transform',
                transformOrigin: "top center",
                background: gradient,
            }}
            className='absolute left-[5vw] h-[70vh] w-[90vw] rounded-2xl overflow-hidden'>
            {image && <img src={image} alt='' loading='lazy' decoding='async' className='absolute h-full w-full object-cover' />}

            {!hasMedia && !image && (
                <span aria-hidden='true' className='absolute inset-0 flex items-center justify-center text-center px-[5vw] text-white/10 font-bold text-[7vw] mobile-tall:text-[12vw] leading-none'>
                    {title}
                </span>
            )}

            <div
                ref={ref}
                onMouseDown={images ? onMouseDown : undefined}
                onMouseLeave={stopDrag}
                onMouseUp={stopDrag}
                onMouseMove={images ? onMouseMove : undefined}
                className={`absolute h-full w-full bg-black/40 ${images ? 'overflow-x-scroll cursor-grab active:cursor-grabbing' : ''}`}>

                {gistId &&
                    <div className='absolute inset-x-[3%] top-[30%] mobile-tall:top-[33%] bottom-[4%]'>
                        <DartPadEmbed gistId={gistId} title={title} />
                    </div>
                }

                {images &&
                    <div className='absolute left-0 top-[30%] mobile-tall:top-[33%] bottom-[4%] w-fit px-32 mobile-tall:px-[10vw] flex items-center gap-[8vw] mobile-tall:gap-[12vw] drop-shadow-2xl'>
                        {images.map((img, i) => (
                            <img
                                key={img}
                                src={img}
                                alt={`${title} screenshot ${i + 1}`}
                                loading='lazy'
                                decoding='async'
                                draggable={false}
                                className='h-full w-auto max-w-none rounded-3xl bg-slate-500'
                            />
                        ))}
                    </div>
                }
            </div>

            <div className='absolute top-[4%] left-[3%] right-[3%] text-white z-10 pointer-events-none'>
                <div className='flex flex-wrap items-center gap-x-[1.5vw] gap-y-1'>
                    <h3 className='text-[2vw] mobile-tall:text-[5vw] leading-tight pointer-events-auto'>
                        {href
                            ? <a href={href} target='_blank' rel='noopener noreferrer' className='underline decoration-1 underline-offset-4 hover:decoration-2'>{title}</a>
                            : title}
                    </h3>
                    <span className='font-firaCode text-[0.8vw] mobile-tall:text-[2.4vw] tracking-widest px-[0.8em] py-[0.3em] rounded-full bg-white/15 border border-white/40'>
                        {badge}
                    </span>
                </div>
                <p className='font-firaCode text-[0.95vw] mobile-tall:text-[2.8vw] text-white/80 mt-[0.4em]'>{tech}</p>
                <p className='text-[1.15vw] mobile-tall:text-[3.4vw] max-w-[60%] mobile-tall:max-w-full mt-[0.4em] leading-snug' style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default Card;
