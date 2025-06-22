import SectionTitle from "@/components/SectionTitle";
import MarqueeCards from "@/components/MarqueeCards";
import SkillCards from "@/components/SkillCards";

import { skills } from "@/constants/constants";

function Skills() {
    return (
        <div id="skills" className="w-full overflow-hidden-web flex justify-center">
            <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
                <div className="w-full">
                    <SectionTitle title="SKILLS" subtitle="What I can do"/>
                </div>
                <div className="xl:border-l-4 xl:border-r-4 xl:border-primary-400 blur-edges h-full">
                    {skills.map((skillSet, index) => (
                        <div
                            key={index}
                            className={`relative card-container-${index % 2 === 0 ? "left" : "right"}`}
                        >
                            <div className="absolute top-[50px] w-full h-[3px] bg-primary-400"></div>
                            <MarqueeCards direction={index % 2 === 0 ? "left" : "right"}>
                                <SkillCards skills={skillSet} direction={index % 2 === 0 ? "left" : "right"}/>
                            </MarqueeCards>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
