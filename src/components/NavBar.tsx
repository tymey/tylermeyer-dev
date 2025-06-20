import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { navLinks } from "@/constants/constants";
import { menu, close } from "@/assets";

function NavBar() {
    const router = useRouter();

    const [active, setActive] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <nav className="w-full flex items-center fixed top-0 z-20 px-6 sm:px-16 py-5">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                        // Added to show scroll up, then change URL without a jump
                        setTimeout(() => { router.push("/"); }, 1000);
                    }}
                >
                    <p className="text-primary-600 text-lg font-bold cursor-pointer flex">
                        Home
                    </p>
                </div>
                <ul className="list-none hidden sm:flex flex-row gap-10"  style={{ color: '#76a181' }}>
                    {navLinks.map(link => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title ? "text-contrast-400" : "text-primary-600"
                                } hover:text-contrast-200 text-[24px] font-bold cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <Image
                        className="w-[28px] h-[28px] object-contain cursor-pointer z-20" 
                        onClick={() => setToggle(!toggle)}
                        src={toggle ? close.src : menu.src}
                        alt={menu.src}
                        width={50}
                        height={50}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-4 black-gradient absolute top-2 right-0 mx-4 min-w-[140px] z-10 rounded-xl backdrop-blur-xs`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title ? "text-contrast-400" : "text-primary-600"
                                        } hover:text-contrast-200 font-poppins font-medium cursor-pointer text-lg`}
                                    onClick={() => {
                                        setActive(link.title);
                                        setToggle(!toggle);
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
