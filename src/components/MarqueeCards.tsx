import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

type MarqueeCardsProps = {
    speed: number;
    direction: "left" | "right";
    children?: ReactNode;
};

function MarqueeCards({ speed, direction, children }: MarqueeCardsProps) {
    return (
        <Marquee
            direction={direction}
            gradient={false}
            speed={speed * 100}
            pauseOnHover={true}
        >
            {children}
        </Marquee>
    );
}

export default MarqueeCards;
