import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LogoDrag from "../../logo/LogoDrag";

function SkillElement({ vSize, image, logos, text }) {

    const placeholders = [...Array(3)];

    const containerRef = useRef(null);
    const clipRef = useRef(null);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });


    const y = useTransform(scrollYProgress, [0, 1], [-250, 250]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 1]);

    const x = useTransform(scrollYProgress, [0, 0.45, 0.65, 1], [-500, 0, 0, -500]);

    return (
        <div
            ref={containerRef}
            className="relative h-[100vh] w-[100vw] bg-gray-950 overflow-hidden"
        >

            <motion.img
                style={{
                    y,
                    opacity
                }}
                src={image}
                alt="skillimage"
                className="w-screen h-screen object-cover block"
            />


            <section className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    ref={clipRef}
                    className="relative w-[70vw] h-[70vh] rounded-lg grid grid-cols-1 mobile-tall:grid-cols-1 md:grid-cols-3 items-center justify-items-center"
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

            <div className="
                      absolute top-0 left-[2vw]
                      h-[100vh] w-fit p-[1vw]
                      bg-gray-900
                      flex items-center justify-center
            ">

                <motion.div

                    style={{ x }}
                    className="
                        flex flex-col
                      text-white font-oswald
                        text-[2vh] md:text-[4vh] xl:text-[5vh]
             ">
                    {
                        text.split(``).map((ltr, i) => <motion.span key={i} style={{}}>{ltr}</motion.span>)
                    }
                </motion.div>

            </div>


        </div>
    );
}

export default SkillElement;

/*
<motion.div
         style={{ y }}
         className="
             absolute
             h-[100vh]
             left-3 sm:left-6 md:left-8 lg:left-14 xl:left-20
             w-10 sm:w-12 md:w-15 lg:w-18 xl:w-20
           bg-gray-900 z-10
 
           ">
 
         <div className="
             absolute
             top-1/2 left-1/2
             transform -translate-x-1/2 -translate-y-1/2
             flex flex-col
             text-white font-oswald
             text-[20px]
             ">
             {
                 text.split(``).map((ltr, i) => <motion.span key={i}>{ltr}</motion.span>)
             }
         </div>
 
     </motion.div>
 
 */