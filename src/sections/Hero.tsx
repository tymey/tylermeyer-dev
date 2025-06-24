import { m, LazyMotion, domAnimation } from 'motion/react';

import HeroText from '@/components/HeroText';
import HeroScroller from '@/components/Elements/HeroScroller';

function Hero() {
    return (
        <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
            <LazyMotion features={domAnimation} strict>
                <m.div
                    className="relative w-full flex justify-center h-screen min-h-[800px] mt-20"
                >
                    <HeroText />
                </m.div>
                <HeroScroller />
            </LazyMotion>
        </div>
    );
}

export default Hero;
