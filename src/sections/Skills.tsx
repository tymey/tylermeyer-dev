import { useState } from "react";

import SectionTitle from "@/components/SectionTitle";
import MarqueeCards from "@/components/MarqueeCards";
import SkillCards from "@/components/SkillCards";

import { skills } from "@/constants/constants";

function Skills() {
    const [speed, setSpeed] = useState<number>(1);

    const options = [0.5, 1, 2, 3];

    return (
        <div id="skills" className="w-full overflow-hidden-web flex justify-center">
            <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
                <div className="w-full">
                    <SectionTitle title="SKILLS" subtitle="What I can do"/>
                </div>
                <div className="w-full max-w-md mx-auto p-2 bg-transparent rounded-xl shadow-inner flex justify-between">
                    <span className="flex items-center text-2xl mr-2 font-bold">Speed: </span>
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => setSpeed(option)}
                            className={`flex-1 mx-1 py-2 rounded-md text-sm font-bold transition-all
                                ${speed === option
                                ? "bg-primary-400 text-primary-600 shadow-md"
                                : "bg-primary-600 text-primary-200 hover:bg-contrast-400"}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="xl:border-l-4 xl:border-r-4 xl:border-primary-400 blur-edges h-full">
                    {skills.map((skillSet, index) => (
                        <div
                            key={index}
                            className={`relative card-container-${index % 2 === 0 ? "left" : "right"}`}
                        >
                            <div className="absolute top-[50px] w-full h-[3px] bg-primary-200/50"></div>
                            <MarqueeCards speed={speed} direction={index % 2 === 0 ? "left" : "right"}>
                                <SkillCards speed={speed} skills={skillSet} direction={index % 2 === 0 ? "left" : "right"}/>
                            </MarqueeCards>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
