import { m, LazyMotion, domAnimation } from 'motion/react';

import SectionTitle from '@/components/SectionTitle';
import { introduction, profile } from 'constants/constants';
import ImageSlider from '@/components/Elements/ImageSlider';

function About() {
    return (
        <div id="about" className="w-full flex justify-center overflow-hidden-web">
            <div className="w-full xl:w-[70%] flex flex-col pb-16">
                <div className="w-full">
                    <SectionTitle title="ABOUT ME" subtitle="Introduction" />
                </div>
                <div className="w-full flex flex-col-reverse sm:flex-row">
                    <div className="w-full md:w-[50%] md:h-full flex items-center mt-100">
                        <LazyMotion features={domAnimation} strict>
                            <m.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                }}
                                className="text-grayscale-50 p-6 text-center flex flex-col gap-5"
                            >
                                {introduction.text.map((line, i) => {
                                    if (i === 0) {
                                        return <span key={i} className="text-primary-400" style={{ fontSize: '1.2em', fontWeight: '900' }}>{line}</span>
                                    }
                                    return <span key={i} className="text-primary-500" style={{ fontSize: '0.95em', fontWeight: '500' }}>{line}</span>
                                })}
                            </m.p>
                        </LazyMotion>
                    </div>
                    <div className="w-full md:w-[50%] flex h-full items-center justify-center">
                        <div className="w-[80%] lg:w-[50%] h-[300px] sm:h-[350px] flex justify-center items-center">
                            <ImageSlider images={[profile]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
