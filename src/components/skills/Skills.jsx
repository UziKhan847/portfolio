import SkillElement from "./skill_elements/SkillElement";
import FrontEndImg from "../../images/frontend.webp";
import BackEndImg from "../../images/backend.webp";
import DesignImg from "../../images/design.webp";
import { FlutterLogo, ReactLogo, TailwindLogo, FirebaseLogo, SupabaseLogo, GitLogo, InkscapeLogo, CanvaLogo, FigmaLogo } from "../../assets";

const SKILLS = [
    {
        title: 'FRONTEND',
        image: FrontEndImg,
        logos: [
            { Logo: FlutterLogo, name: 'Flutter' },
            { Logo: ReactLogo, name: 'React' },
            { Logo: TailwindLogo, name: 'Tailwind CSS' },
        ],
        tags: ['Dart', 'JavaScript', 'HTML', 'CSS', 'Riverpod', 'Capacitor'],
    },
    {
        title: 'BACKEND',
        image: BackEndImg,
        logos: [
            { Logo: FirebaseLogo, name: 'Firebase' },
            { Logo: SupabaseLogo, name: 'Supabase' },
            { Logo: GitLogo, name: 'Git' },
        ],
        tags: ['Node.js', 'Python', 'REST APIs', 'IndexedDB', 'ObjectBox', 'Workbox', 'Offline-first sync'],
    },
    {
        title: 'DESIGN',
        image: DesignImg,
        logos: [
            { Logo: CanvaLogo, name: 'Canva' },
            { Logo: InkscapeLogo, name: 'Inkscape' },
            { Logo: FigmaLogo, name: 'Figma' },
        ],
        tags: ['Olive Video Editor', 'UI & graphics design', 'App icons'],
    },
];

function Skills() {
    return (
        <div>
            <section className='
                relative
                flex items-center justify-center
                h-fit w-screen p-10
                bg-gray-950'>
                <h2 className='text-white text-[10vw] mobile-tall:text-[14vw] font-oswald font-bold'>SKILLS</h2>
            </section>
            <section className="relative bg-gray-950 h-[300vh] w-screen">
                {SKILLS.map((skill) => (
                    <SkillElement key={skill.title} {...skill} />
                ))}
            </section>
        </div>
    );
}

export default Skills;
