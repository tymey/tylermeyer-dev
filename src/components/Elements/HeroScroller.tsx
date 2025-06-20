import { m } from 'motion/react';

function HeroScroller() {
    return (
        <div
            id="scroller"
            className="absolute xs:bottom-10 bottom-12 flex justify-center items-center"
        >
            <a href="#about">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-primary-200 flex justify-center items-start p-2">
                    <m.div
                        animate={{
                            y: [0, 36, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className="w-3 h-3 rounded-full bg-primary-200 mb-1"
                    />
                </div>
            </a>
        </div>
    );
}

export default HeroScroller;
