import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LogoDrag from "../../logo/LogoDrag";

function SkillElement({ vSize, image, logos, text }) {

    const placeholders = [...Array(3)];

    const container = useRef(null);
    const clipRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });


    const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);
    //const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

    const x = useTransform(scrollYProgress, [0, 0.45, 0.65, 1], [-500, 0, 0, -500]);

    return (
        <div
            ref={container}
            className="relative h-[100vh] w-[100vw] bg-gray-950 overflow-hidden"
        >

            <motion.img

                style={{
                    //willChange: 'opacity',
                    y,
                    //opacity,
                }}
                src={image}
                alt="skillimage"
                className="w-screen h-screen object-cover block"
            />


            <section className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    ref={clipRef}
                    className="relative w-[70vw] h-[70vh] bg-black/45 rounded-lg grid grid-cols-1 mobile-tall:grid-cols-1 md:grid-cols-3 items-center justify-items-center"
                    style={{
                        boxShadow: '0 0 0 2000px rgba(3,7,18,1)',

                    }}
                >
                    {
                        placeholders.map((_, i) => <LogoDrag key={`logo${i}`} LogoComponent={logos[i]} ref={clipRef} ></LogoDrag>
                        )
                    }


                </motion.div>
            </section>

            <section className="
                      absolute top-0 left-[2vw] xl:left-[5vw] mobile-tall:left-[2.5vw] aspect-16/9:left-[5vw]
                      h-[100vh] w-fit p-[1vw]
                      flex items-center justify-center">

                <motion.div
                    style={{ x }}
                    className="
                        flex flex-col
                      text-white font-firaCode
                        text-[2vh] md:text-[4vh] xl:text-[5vh] mobile-tall:text-[5vh]">
                    {
                        text.split(``).map((ltr, i) => <motion.span key={i} style={{}}>{ltr}</motion.span>)
                    }
                </motion.div>
            </section>


        </div>
    );
}

export default SkillElement;