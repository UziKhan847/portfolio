import { motion } from "framer-motion";

function Panel({ header, children, className = '', ref }) {
    return (
        <motion.div
            drag
            dragMomentum={false}
            dragConstraints={ref}
            dragElastic={false}
            className={`border border-black rounded-md shadow-lg w-fit ${className}`}
        >
            <div className="relative p-[0.8vh] mobile-tall:p-[1.5vw] bg-gray-800 flex items-center justify-end">

                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <span className="text-white text-[1.2vh] mobile-tall:text-[2vh]">{header}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 justify-items-center items-center">


                    <div
                        className="bg-transparent hover:bg-gray-700 rounded-full h-[1.1vh] mobile-tall:h-[4vw] w-[1.1vh] mobile-tall:w-[4vw] flex items-center justify-center text-white text-[1.2vh] mobile-tall:text-[2.8vh] leading-none cursor-default"
                    >
                        <div className="
                        border border-b-white border-b-2 border-t-0 border-r-0 border-l-0
                        h-[0.6vh] mobile-tall:h-[2.5vw] w-[0.6vh] mobile-tall:w-[2.5vw] " />
                    </div>
                    <div
                        className="bg-transparent hover:bg-gray-700 rounded-full h-[1.1vh] mobile-tall:h-[4vw] w-[1.1vh] mobile-tall:w-[4vw] flex items-center justify-center text-white text-[1.2vh] mobile-tall:text-[2.8vh] leading-none cursor-default"
                    >
                        <div className="
                        border border-white
                        h-[0.6vh] mobile-tall:h-[2.5vw] w-[0.6vh] mobile-tall:w-[2.5vw]" />
                    </div>
                    <div
                        className="bg-green-600 hover:bg-green-400 rounded-full h-[1.1vh] mobile-tall:h-[4vw] w-[1.1vh] mobile-tall:w-[4vw] flex items-center justify-center text-white text-[1.2vh] mobile-tall:text-[2.8vh] leading-none cursor-default"
                    >
                        &times;
                    </div>
                </div>
            </div>

            <div className="h-full w-full">
                {children}
            </div>
        </motion.div>
    );
}

export default Panel;