import { useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Card from './project_elements/Card';
import SandImg from '../../../images/cards/sand.webp';
import InvoiceImg from '../../../images/cards/invoice.webp';
import QiraahImg from '../../../images/cards/qiraah.webp';
import FireDefenceImg from '../../../images/cards/firedefence.webp';
import { useViewport } from '../../../viewport';

// Screenshots live in `src/images/<imgDir>/*.webp`. Dropping images into a
// project's folder (e.g. `nigerian_mushaf_imgs/`) is enough to show them —
// they're grouped by folder here and sorted by file name.
const screenshotModules = import.meta.glob('../../../images/*_imgs/*.webp', { eager: true, import: 'default' });

const SCREENSHOTS = Object.entries(screenshotModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .reduce((byDir, [path, url]) => {
        const dir = path.split('/').at(-2);
        (byDir[dir] ??= []).push(url);
        return byDir;
    }, {});

const PROJECTS = [
    {
        id: 'fireDefence',
        title: 'FIRE DEFENCE · OFFLINE INSPECTION APP',
        tech: 'React · Node.js · IndexedDB · Capacitor · Workbox',
        badge: 'FREELANCE · 2026',
        description: 'Offline-first sync engine with a durable retry queue and idempotent server writes, shipped as a native Android app and an offline-capable web app.',
        image: FireDefenceImg,
    },
    {
        id: 'nigerianMushaf',
        title: 'NIGERIAN MUSHAF',
        tech: 'Flutter · Riverpod',
        badge: 'QURAN QUORUM',
        description: 'Quran reader for the West African Maghribī Mushaf: 604 high-res pages with two-layer (ink + decoration) GPU compositing, independent page/app theming and multi-mode search.',
        gradient: 'linear-gradient(135deg, #0b2e23 0%, #17573f 55%, #b8922a 100%)',
        imgDir: 'nigerian_mushaf_imgs',
    },
    {
        id: 'qiraah',
        title: 'QIRAAH ARABIYYAH',
        tech: 'Flutter',
        badge: 'PLAY RELEASE PENDING',
        description: 'Arabic reader app built independently. Completed Google Play closed testing; production access is under review for public release.',
        image: QiraahImg,
        imgDir: 'qiraah_imgs',
    },
    {
        id: 'invoice',
        title: 'INVOICE GENERATOR',
        href: 'https://github.com/UziKhan847/invoice_generator',
        tech: 'Flutter',
        badge: 'CLIENT · NASIR AUTOS',
        description: "Freelance build for Nasir Autos to create and issue customer invoices; also runs Markaz Umaza's student billing.",
        image: InvoiceImg,
        imgDir: 'invoice_imgs',
    },
    {
        id: 'mistakeMarker',
        title: 'MUSHAF MISTAKE MARKER',
        tech: 'Flutter · Riverpod · ObjectBox',
        badge: 'IN PROGRESS',
        description: 'Cross-platform, local-first app for tracking Hifz and Tajwid mistakes: colour-coded word marking, per-page/surah/juz progress stats and multi-user tracking.',
        gradient: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #9d174d 100%)',
        imgDir: 'mistake_marker_imgs',
    },
    {
        id: 'fallingSand',
        title: 'FALLING SAND',
        tech: 'Dart',
        badge: 'PLAYABLE',
        description: 'A falling-sand particle simulation. Run it right here in DartPad.',
        image: SandImg,
        gistId: 'b4221d131616e78cf64711380ac15005',
    },
];

// One scroll "step" per card to slide in, plus one at the end for the stack
// to settle before the section scrolls away.
const STEPS = PROJECTS.length + 1;

function Projects() {
    const vSize = useViewport();
    const container = useRef(null);

    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end start'] });

    const smoothProg = useSpring(scrollYProgress, { stiffness: 1000, damping: 200 });

    return (
        <div ref={container} style={{ height: `${STEPS * 100}vh` }} className='relative w-[100vw] bg-gray-950 font-oswald'>
            <div className='sticky top-0 h-screen w-screen'>

                <div className='h-[3.5vw] mobile-tall:h-[5vw] w-screen' />
                <h2 className='inline text-[5vw] mobile-tall:text-[10vw] px-[4vw] text-white'>
                    PROJECTS
                </h2>
                {
                    PROJECTS.map((project, i) => (
                        <Card
                            key={project.id}
                            project={project}
                            images={project.imgDir ? SCREENSHOTS[project.imgDir] : undefined}
                            scrollYProgress={smoothProg}
                            yTrans={{
                                progRange: [i / STEPS, (i + 1) / STEPS],
                                range: [vSize.h, vSize.h * 0.0175 * i],
                            }}
                            scaleTrans={{ progRange: [(i + 1) / STEPS, 1], range: [1, 0.8] }}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;
