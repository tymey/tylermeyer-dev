import ProjectCards from "@/components/ProjectCards";
import SectionTitle from "@/components/SectionTitle";

function Projects() {
    return (
        <div className="w-full flex justify-center" id="projects">
            <div className="w-full xl:w-[70%] flex flex-col pb-16">
                <div className="w-full">
                    <SectionTitle title="PROJECTS" subtitle="Check out my work so far" />
                </div>
                <ProjectCards />
            </div>
        </div>
    );
}

export default Projects;
