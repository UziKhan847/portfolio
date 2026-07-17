
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Card from './project_elements/Card';
import SandImg from '../../../images/cards/sand.webp'
import MosqueImg from '../../../images/cards/mosque.webp'
import InvoiceImg from '../../../images/cards/invoice.webp'

function Projects({ vSize }) {
    const container = useRef(null);
    const cardWidth = vSize.w * 0.9;
    const cardHeight = vSize.h * 0.75;

    const invoiceImgs = import.meta.glob('../../../images/invoice_imgs/invoice_*.webp', { eager: true });

    const invoiceImgList = Object.keys(invoiceImgs).map((key) => {
        return invoiceImgs[key].default;
    });

    const otherAppImgs = import.meta.glob('../../../images/other_app_imgs/img_*.webp', { eager: true });

    const otherAppImgList = Object.keys(otherAppImgs).map((key) => {
        return otherAppImgs[key].default;

    });

    const cards = [
        {
            name: <a href='https://github.com/UziKhan847/invoice_generator' target='_blank' rel='noopener noreferrer'>INVOICE GENERATOR</a>,
            cardId: 'invoiceCard',
            childId: 'invoiceImgId',
            color: '#6a2d2c',
            image: InvoiceImg,
            imageList: invoiceImgList,
        },
        {
            name: <span>FALLING SAND</span>,
            cardId: 'fallingSandCard',
            childId: 'fallingSandImgId',
            image: SandImg,
            gistId: null //'b4221d131616e78cf64711380ac15005',
        },
        {
            name: <span>OTHER</span>,
            cardId: 'otherAppCard',
            childId: 'otherAppImgId',
            color: '#0000FF',
            image: MosqueImg,
            imageList: otherAppImgList,
        }];

    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end start'] });

    const smoothProg = useSpring(scrollYProgress, { stiffness: 1000, damping: 200 });

    return (
        <div ref={container} className='relative h-[400vh] w-[100vw] bg-gray-950 font-oswald'>
            <div className='sticky top-0 h-screen w-screen'>

                <div className='h-[3.5vw] mobile-tall:h-[5vw] w-screen' />
                <span className='text-[5vw] mobile-tall:text-[10vw] left-[1vw] p-[4vw] mobile-tall:left-[3vw] top-1/2 transform -translate-y-1/2  text-white'>
                    PROJECTS
                </span>
                {
                    cards.map((card, i) => {
                        return (
                            <Card
                                key={card.cardId}
                                id={card.childId}
                                index={i}
                                image={card.image}
                                imageList={card.imageList}
                                gistId={card.gistId}
                                vSize={vSize}
                                cardWidth={cardWidth}
                                scrollYProgress={smoothProg}
                                yTrans={
                                    {
                                        progRange: [(1 / 5) * i, 1 / 5 * (i + 1)],
                                        range: [vSize.h, 0 + (vSize.h * (0.0175 * i))]
                                    }
                                }
                                scaleTrans={{ progRange: [(1 / 5 * (i + 1)), 1], range: [1, 0.8] }}
                            >
                                {card.name}
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Projects;