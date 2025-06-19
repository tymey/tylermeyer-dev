import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

type MarqueeCardsProps = {
    direction: "left" | "right";
    children?: ReactNode;
};

function MarqueeCards({ direction, children }: MarqueeCardsProps) {
    return (
        <Marquee
            direction={direction}
            gradient={false}
            speed={100}
            pauseOnHover={true}
        >
            {children}
        </Marquee>
    );
}

export default MarqueeCards;
