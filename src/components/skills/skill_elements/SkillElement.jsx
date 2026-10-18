import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import LogoDrag from "../../logo/LogoDrag";

function SkillElement({ image, logos, title, tags }) {

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const smoothProg = useSpring(scrollYProgress, { stiffness: 1000, damping: 200 });

    const y = useTransform(smoothProg, [0, 1], [-150, 150]);

    const x = useTransform(smoothProg, [0, 0.45, 0.65, 1], [-500, 0, 0, -500]);

    return (
        <div
            ref={container}
            className="relative h-[100vh] w-[100vw] bg-gray-950 overflow-hidden"
        >

            <motion.img
                style={{
                    willChange: 'transform',
                    y,
                }}
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-screen h-screen object-cover block backface-visibility-hidden"
            />

            <section className="absolute inset-0 flex items-center justify-center">
                <div
                    className="relative w-[70vw] h-[70vh] pb-[9vh] mobile-tall:pb-[22vh] bg-black/45 rounded-lg grid grid-cols-1 mobile-tall:grid-cols-1 md:grid-cols-3 items-center justify-items-center"
                    style={{
                        boxShadow: '0 0 0 2000px rgba(3,7,18,1)',
                    }}
                >
                    {logos.map(({ Logo, name }) => <LogoDrag key={name} LogoComponent={Logo} name={name} />)}

                    <ul
                        aria-label={`${title.toLowerCase()} tech`}
                        className="
                            absolute bottom-0 inset-x-0
                            flex flex-wrap justify-center gap-[1vh] px-[2vw] pb-[3vh]
                            font-firaCode text-white
                            text-[1.6vh] lg:text-[1vw] mobile-tall:text-[1.6vh]">
                        {tags.map((tag) => (
                            <li key={tag} className="px-[0.8em] py-[0.3em] rounded-full border border-white/40 bg-black/50 whitespace-nowrap">
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="
                      absolute top-0 left-[2vw] xl:left-[5vw] mobile-tall:left-[2.5vw] aspect-16/9:left-[5vw]
                      h-[100vh] w-fit p-[1vw]
                      flex items-center justify-center">

                <motion.h3
                    style={{ x }}
                    aria-label={title}
                    className="
                        flex flex-col
                      text-white font-firaCode
                        text-[2vh] md:text-[4vh] xl:text-[5vh] mobile-tall:text-[5vh]">
                    {
                        title.split('').map((ltr, i) => <span key={i} aria-hidden="true">{ltr}</span>)
                    }
                </motion.h3>
            </section>

        </div>
    );
}

export default SkillElement;
