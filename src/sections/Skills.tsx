import SectionTitle from "@/components/SectionTitle";
import MarqueeCards from "@/components/MarqueeCards";
import SkillCards from "@/components/SkillCards";

import {
    languageSkills,
    frontendSkills,
    backendSkills,
    deploymentSkills,
    developerSkills,
 } from "@/constants/constants";

function Skills() {
    return (
        <div id="skills" className="w-full overflow-hidden-web flex justify-center">
            <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
                <div className="w-full">
                    <SectionTitle title="SKILLS" subtitle="What I can do"/>
                </div>
                <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full">
                    {[
                        languageSkills,
                        frontendSkills,
                        backendSkills,
                        deploymentSkills,
                        developerSkills,
                    ].map((skillSet, index) => (
                        <div key={index} className="relative">
                            <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
                            <MarqueeCards direction={index % 2 === 0 ? "left" : "right"}>
                                <SkillCards skills={skillSet}/>
                            </MarqueeCards>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
