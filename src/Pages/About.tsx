import { m, LazyMotion, domAnimation } from 'motion/react';

import SectionTitle from '@/components/SectionTitle';

function About() {
    return (
        <div id="about" className="w-full flex justify-center overflow-hidden-web">
            <div className="w-full xl:w-[70%] flex flex-col pb-16">
                <div className="w-full">
                    <SectionTitle title="ABOUT ME" subtitle="Introduction" />
                </div>
            </div>
        </div>
    );
}

export default About;
