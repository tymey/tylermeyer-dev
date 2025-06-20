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
};

function SkillCards({ skills }: SkillCardsProps) {
    return (
        <div className="flex">
            <LazyMotion features={domAnimation} strict>
                {skills.map((skill, index) => (
                    <m.div
                        initial={{ scale: 0.5 }}
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear",
                        }}
                        style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
                        key={index}
                        className="card w-[300px] h-[300px] flex flex-col items-center  bg-primary-500 rounded-xl border-4 border-primary-400 cursor-pointer"
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
                                className="text-center bg-primary-500 text-primary-200 rounded-xl text-sm p-4"
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: "600",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {skill.description}
                            </span>
                        </div>
                    </m.div>
                ))}
            </LazyMotion>
        </div>
    );
}

export default SkillCards;
