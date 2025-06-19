// import { m, LazyMotion, domAnimation } from "motion/react";

import SectionTitle from "@/components/SectionTitle";

function Contact() {
    return (
        <div
            id="contact"
            className="w-full overflow-hidden-web flex flex-col items-center"
        >
            <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
                <div className="w-full">
                    <SectionTitle title="CONTACT" subtitle="Let's build something!" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
