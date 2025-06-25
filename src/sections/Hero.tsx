import { m, LazyMotion, domAnimation } from 'motion/react';

import ParticlesBackground from '@/components/Elements/ParticlesBackground';
import HeroText from '@/components/HeroText';
import HeroScroller from '@/components/Elements/HeroScroller';

function Hero() {
    return (
        <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
            <ParticlesBackground />
            <LazyMotion features={domAnimation} strict>
                <m.div
                    id="hero"
                    className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
                >
                    <HeroText />
                </m.div>
                <HeroScroller />
            </LazyMotion>
        </div>
    );
}

export default Hero;
