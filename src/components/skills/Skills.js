import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import SkillElement from "././skill_elements/SkillElement";
import FrontEndImg from "../../images/frontend.webp";
import BackEndImg from "../../images/backend.webp";
import DesignImg from "../../images/design.avif"
import { FlutterLogo, ReactLogo, TailwindLogo, FirebaseLogo, SupabaseLogo, GitLogo, InkscapeLogo, CanvaLogo, FigmaLogo } from "../../assets";


function Skills({ vSize }) {

    const container = useRef(null);
    const { scrollY } = useScroll();

    const arrayOfLogos = [
        [FlutterLogo, ReactLogo, TailwindLogo],
        [FirebaseLogo, SupabaseLogo, GitLogo],
        [CanvaLogo, InkscapeLogo, FigmaLogo]
    ]


    const placeholders = [...Array(3)];

    const texts = [`FRONTEND`, `BACKEND`, `DESIGN`]

    const imgs = [FrontEndImg, BackEndImg, DesignImg]

    return (
        <div>

            <div className='
                relative
                flex items-center justify-center
                h-fit w-screen p-10
                bg-gray-950'>
                <span className='text-white text-[10vw] mobile-tall:text-[14vw] font-oswald font-bold'>SKILLS</span>
            </div>
            <div ref={container} className="relative bg-gray-950 h-[300vh] w-screen">
                {
                    placeholders.map((_, i) =>
                        <SkillElement key={`skill${i}`} vSize={vSize} image={imgs[i]} text={texts[i]} logos={arrayOfLogos[i]} />
                    )
                }
            </div>
        </div>







    )
}

export default Skills;