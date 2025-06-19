import { m, LazyMotion, domAnimation } from "motion/react";

import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

function Contact() {
    return (
        <div
            id="contact"
            className="w-full overflow-hidden-web flex flex-col items-center justify-center min-h-[800px] xl:w-[70%]"
        >
            <div className="w-full flex flex-col xl:w-[70%]">
                <div className="w-full">
                    <SectionTitle title="CONTACT" subtitle="Let's build something!" />
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <LazyMotion features={domAnimation} strict>
                    <m.div
                        initial={{ x: 200 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.6, type: "string" }}
                        className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] p-4 flex flex-col sm:flex-row gap-4"
                    >
                        <ContactForm />
                    </m.div>
                </LazyMotion>
            </div>
        </div>
    );
}

export default Contact;
