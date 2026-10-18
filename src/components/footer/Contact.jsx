import { useTransform, motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Night from '../../images/night.webp';
import NightBlur from '../../images/blur/night_blur.webp';
import Letter from './contact_elements/Letter';
import resumePDF from '../../assets/Resume.pdf';

const LINES = [
    { text: 'uzair.jamiah@proton.me', href: 'mailto:uzair.jamiah@proton.me' },
    { text: '+1 (289) 300-1652', href: 'tel:+12893001652' },
    { text: 'Hamilton, Ontario' },
    { text: 'github.com/UziKhan847', href: 'https://github.com/UziKhan847', external: true },
    { text: 'linkedin.com/in/mohammad-uzair-saleem', href: 'https://www.linkedin.com/in/mohammad-uzair-saleem', external: true },
];

// Splits a line into chunks that each keep a trailing "/" or "@", so a long
// line like a LinkedIn URL only wraps at those boundaries on narrow screens
// instead of between arbitrary letters.
function chunks(text) {
    return text.match(/[^/@]+[/@]?|[/@]/g) ?? [text];
}

// The letters are animated individually, so screen readers get the whole line
// from an sr-only copy and the letter spans are hidden from them.
function ScatteredText({ text, scrollYProgress }) {
    return (
        <>
            <span className="sr-only">{text}</span>
            {chunks(text).map((chunk, c) => (
                <span key={c} aria-hidden="true" className="inline-flex whitespace-nowrap">
                    {chunk.split('').map((letter, i) => (
                        <Letter key={i} letter={letter === ' ' ? ' ' : letter} scrollYProgress={scrollYProgress} />
                    ))}
                </span>
            ))}
        </>
    );
}

function Contact({ scrollYProgress }) {
    const imageOpacity = useTransform(scrollYProgress, [1 / 3, 1], [1, 0.55]);
    // A pre-blurred copy fading out stands in for animating a 50px
    // backdrop-filter, which is one of the most expensive things to repaint.
    const blurOpacity = useTransform(scrollYProgress, [1 / 3, 1], [1, 0]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);
    const downloadOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

    const lineClass = 'flex flex-wrap justify-center text-[5vw] lg:text-[2.2vw] mobile-tall:text-[5vw] font-firaCode z-10 mobile-tall:leading-none';

    return (
        <div className="sticky top-0 h-screen w-screen bg-black flex flex-col items-center justify-center text-white font-oswald px-4 overflow-hidden">
            <img
                src={Night}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-screen w-screen object-cover" />

            <motion.img
                src={NightBlur}
                alt=""
                style={{ opacity: blurOpacity, willChange: 'opacity' }}
                className="absolute inset-0 h-screen w-screen object-cover" />

            <motion.div style={{ opacity: imageOpacity, willChange: 'opacity' }} className='bg-black h-screen w-screen absolute' />

            <motion.div
                style={{ opacity: textOpacity, textShadow: '0 8px 8px rgba(0,0,0,0.9)', y: -50, willChange: 'opacity' }}
                className="relative z-10 flex flex-col items-center space-y-8 mobile-tall:space-y-[2.5vh]">
                <h2 className="flex flex-wrap justify-center text-[9.5vw] mobile-tall:text-[14vw] font-bold z-10 mobile-tall:leading-[20vh]">
                    <ScatteredText text="CONTACT" scrollYProgress={scrollYProgress} />
                </h2>
                {LINES.map(({ text, href, external }) => (
                    href ? (
                        <a
                            key={text}
                            href={href}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noopener noreferrer' : undefined}
                            className={`${lineClass} hover:text-blue-200 transition-colors`}>
                            <ScatteredText text={text} scrollYProgress={scrollYProgress} />
                        </a>
                    ) : (
                        <p key={text} className={lineClass}>
                            <ScatteredText text={text} scrollYProgress={scrollYProgress} />
                        </p>
                    )
                ))}
            </motion.div>

            <motion.a
                href={resumePDF}
                download="Uzair_Saleem_Resume.pdf"
                style={{ opacity: downloadOpacity, willChange: 'opacity, transform' }}
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-[5vh] inline-flex items-center px-6 py-4 mobile-tall:px-[2vh] mobile-tall:py-[2vh] border border-white rounded-lg text-[4vw] lg:text-[1.5vw] mobile-tall:text-[3vw] font-firaCode hover:bg-white hover:text-black transition">
                <Download aria-hidden="true" className="w-[2.5vw] mobile-tall:w-[6vw] h-auto" />
                <span>&nbsp;Download Resume</span>
            </motion.a>
        </div>
    );
}

export default Contact;
