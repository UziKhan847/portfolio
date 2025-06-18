
import { motion } from 'framer-motion';
import { useRef } from 'react';

function Experience() {

    const imagesContext = require.context('../../images/paralax', false, /\.webp$/);

    const image = imagesContext.keys().map((path) => imagesContext(path)); //shorthand can be used here


    return (
        <div className="relative h-[200vh] w-screen bg-transparent">

            {
                image.map((e, i) => {
                    return <img
                        key={`mountParalax${i}`}
                        src={e}
                        alt={`MountParalax${i}`}
                        className='
                            absolute
                            w-screen h-[200vh]
                            object-cover'
                    />
                })
            }

        </div>

    )
}

export default Experience;