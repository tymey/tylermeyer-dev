import { useState } from "react";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "motion/react";
import { StaticImageData } from "next/image";

type SkillCardsProps = {
    skills: {
        id: string;
        title: string;
        icon: StaticImageData;
        description: string;
    }[];
    direction: string;
    // isHovering: boolean;
};

function SkillCards({ skills, direction }: SkillCardsProps) {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    return (
        <div className="flex">
            <LazyMotion features={domAnimation} strict>
                {skills.map((skill, index) => (
                    <m.div
                        initial={{ scale: 0.75 }}
                        animate={isHovering ? { rotate: [0, 0, 0] } : { rotate: direction === "left" ? [-10, -15, -10] : [10, 15, 10] }}
                        whileHover={{ scale: 0.75 }}
                        transition={isHovering ? {} : {
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                        }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
                        key={index}
                        className="card skill-card w-[400px] h-[400px] flex flex-col items-center  bg-primary-500 rounded-xl border-4 border-primary-400 cursor-pointer"
                    >
                        <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col text-primary-200">
                            <Image
                                className="h-[100px] flex justify-center items-center w-[100px] bg-transparent mt-2 object-contain"
                                src={skill.icon.src}
                                alt={skill.title}
                                width={50}
                                height={50}
                            />
                            <span
                                className="text-3xl"
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "bold",
                                }}
                            >
                                {skill.title}
                            </span>
                            <span
                                className="text-center text-2xl bg-primary-500 text-primary-200 rounded-xl p-4"
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "600",
                                }}
                            >
                                {skill.description} {/* Max Length: 175 */}
                            </span>
                        </div>
                    </m.div>
                ))}
            </LazyMotion>
        </div>
    );
}

export default SkillCards;
