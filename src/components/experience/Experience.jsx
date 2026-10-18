import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CaveBlur from '../../images/blur/cave_blur.webp';

const JOBS = [
    {
        role: 'Freelance Full-Stack Developer',
        org: 'Fire Defence · 2026',
        bullets: [
            'Offline-first sync engine: IndexedDB writes, durable retry queue & idempotent server writes',
            'Native Android app via Capacitor + Workbox offline web app',
            'Fixed concurrency bugs via hands-on device testing',
        ],
    },
    {
        role: 'Co-CEO & App Developer',
        org: 'Markaz Umaza · Feb 2024 - Present',
        bullets: [
            'Founded an Islamic education business; lead its product development',
            'Built & shipped the invoicing app (Flutter) for student billing & client payments',
            'Building homework & lesson trackers for students and teachers',
        ],
    },
    {
        role: 'Media & Content Manager · Developer',
        org: 'Quran Quorum · March 2025 - Present',
        bullets: [
            'Produce & structure online course content',
            'Leading the quranquorum.com redesign',
            'Built the Nigerian Mushaf app (Flutter · Riverpod)',
        ],
        wide: true,
    },
];

function Experience() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ['center end', 'center start'] });
    const scrollRange = [0, 0.45, 0.55, 1];
    const blurOpacity = useTransform(scrollYProgress, scrollRange, [0, 1, 1, 0]);
    const opacity = useTransform(scrollYProgress, scrollRange, [0, 0.6, 0.6, 0]);

    return (
        // `clip-path` clips the fixed blurred-cave layer below to this
        // section, so it reads as a blur of the fixed page background without
        // an animated backdrop-filter.
        <div ref={container}
            style={{
                clipPath: 'inset(0)',
                textShadow: '0 8px 8px rgba(0,0,0,0.9)'
            }}
            className="relative w-full min-h-screen gap-32 mobile-tall:gap-[7vh] flex flex-col items-center justify-center text-white text-center font-oswald"
        >
            <motion.img
                src={CaveBlur}
                alt=''
                loading='lazy'
                decoding='async'
                style={{ opacity: blurOpacity, willChange: 'opacity' }}
                className='fixed inset-0 h-screen w-screen object-cover'
            />

            <motion.div style={{ opacity, willChange: 'opacity' }} className='absolute inset-0 bg-black' />

            <h2 className='text-[10vw] mobile-tall:text-[14vw] font-bold z-10'>
                EXPERIENCE
            </h2>
            <div className='w-[80vw] grid grid-cols-1 md:grid-cols-2 mobile-tall:grid-cols-1 gap-20 mobile-tall:gap-[5vh] text-[5vw] lg:text-[2.5vw] mobile-tall:text-[6vw] font-firaCode z-10'>
                {JOBS.map((job) => (
                    <div key={job.org} className={job.wide ? 'md:col-span-2' : undefined}>
                        <p className='font-bold text-[0.8em] mobile-tall:text-[0.65em]'>
                            {job.role}
                        </p>
                        <p className='text-[0.6em]'>
                            {job.org}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-[0.5em]">
                            {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
