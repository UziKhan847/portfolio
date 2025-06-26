// src/components/Contact.jsx
import React, { useMemo } from 'react';
import { useTransform, motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Night from '../../images/night.webp';
import Letter from './contact_elements/Letter';
import resumePDF from '../../assets/Resume.pdf';

function Contact({ scrollYProgress, vSize }) {
    const lines = useMemo(() => [
        'CONTACT',
        'uzair.jamiah@proton.me',
        '+1 (289) 300-1652',
        'Hamilton, Ontario',
        { text: 'github.com/UziKhan847', url: 'https://github.com/UziKhan847' },
        //'linkedin.com/in/xxxxxxx'
    ], []);

    const imageOpacity = useTransform(scrollYProgress, [1 / 3, 1], [0, 0.55]);
    const blur = useTransform(scrollYProgress, [1 / 3, 1], ['blur(50px)', 'blur(1px)']);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
    const downloadOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

    return (
        <div className="sticky top-0 h-screen w-screen bg-black flex flex-col items-center justify-center text-white font-oswald px-4 overflow-hidden">
            <motion.img
                style={{ opacity: imageOpacity, filter: blur }}
                src={Night}
                alt="night"
                className="absolute inset-0 h-screen w-screen object-cover" />

            <motion.div
                style={{ opacity: textOpacity, textShadow: '0 8px 8px rgba(0,0,0,0.9)' }}
                className="relative z-10 flex flex-col items-center space-y-8">
                {lines.map((item, idx) => {
                    const isTitle = idx === 0;
                    const { text, url } =
                        typeof item === 'string' ? { text: item, url: null } : item;

                    const Wrapper = url ? motion.a : 'div';

                    return (
                        <Wrapper
                            key={idx}
                            href={url}
                            target={url ? '_blank' : undefined}
                            rel={url ? 'noopener noreferrer' : undefined}
                            style={url ? { textDecoration: 'none' } : {}}
                            className={
                                `flex flex-wrap justify-center ` +
                                (isTitle
                                    ? 'text-[10vw] mobile-tall:text-[14vw] font-bold z-10'
                                    : 'text-[5vw] lg:text-[2.5vw] mobile-tall:text-[4vw] font-firaCode z-10')
                            }>
                            {text.split('').map((letter, i) => (
                                <Letter key={i} letter={letter} scrollYProgress={scrollYProgress} vSize={vSize} />
                            ))}
                        </Wrapper>
                    );
                })}
            </motion.div>

            <motion.a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                style={{ opacity: downloadOpacity }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-[5vh] inline-flex items-center px-6 py-4 border border-white rounded-lg text-[4vw] lg:text-[1.5vw] mobile-tall:text-[2.5vw] font-firaCode hover:bg-white hover:text-black transition">
                <Download className="w-12 h-12" />
                <span>&nbsp;Download Resume</span>
            </motion.a>
        </div>
    );
}

export default Contact;
