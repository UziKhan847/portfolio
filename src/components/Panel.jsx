import { motion } from "framer-motion";

function Panel({ header, children, className = '' }) {
    return (
        <motion.div
            className={`border border-black rounded-md shadow-lg w-fit ${className}`}
        >
            <div className="relative p-2 bg-gray-800 flex items-center justify-end">

                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <span className="text-white">{header}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 justify-items-center items-center">
                    <div className="h-[0.6em] w-[0.6em] border border-b-white border-b-2 border-t-0 border-r-0 border-l-0" />
                    <div className="border border-white h-[0.6em] w-[0.6em]" />
                    <div
                        className="bg-green-600 rounded-full h-6 w-6 flex items-center justify-center text-white text-[1.6em] leading-none cursor-default"
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