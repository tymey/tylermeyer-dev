import { m, LazyMotion, domAnimation } from "motion/react";

type SectionTitleProps = {
    title: string;
    subtitle: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <LazyMotion features={domAnimation} strict>
            <m.div
                initial={{ x: -350 }}
                whileInView={{ x: 20 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="text-primary-200 p-6 noselect"
            >
                <span
                    className="opacity-50"
                    style={{
                        textTransform: 'uppercase',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '600',
                    }}
                >
                    {subtitle}
                </span>
                <h2
                    className="tracking-wider text-4xl sm:text-5xl md:text-6xl"
                >
                    {title.split('').map((char, index) => {
                        if (char === " ") {
                            return " ";
                        }
                        return <span key={index} className="bounce">{char}</span>
                    })}
                </h2>
            </m.div>
        </LazyMotion>
    );
}

export default SectionTitle;
