import { SocialIcon } from "react-social-icons";

import { socialLinks } from "@/constants/constants";

function SocialLinks() {
    return (
        <div className="w-full h-[100px] bg-primary-400 flex justify-center items-center gap-3 p-6">
            {socialLinks.map((social, index) => (
                <SocialIcon key={`${index} - ${social.network}`} network={social.network} href={social.link} target="_blank" />
            ))}
        </div>
    );
}

export default SocialLinks;
