import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/constants/constants";
import { menu, close } from "@/assets";

function NavBar() {
    const [active, setActive] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <p className="text-primary-600 text-lg font-bold cursor-pointer flex">
                        Home
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10"  style={{ color: '#76a181' }}>
                    {navLinks.map(link => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title ? "text-primary-600" : "text-contrast-200"
                                } hover:text-white text-[24px] font-bold cursor-pointer `}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <Image
                        className="w-[28ox] h-[28px] pbject-contain cursor-pointer z-20" 
                        onClick={() => setToggle(!toggle)}
                        src={toggle ? close.src : menu.src}
                        alt={menu.src}
                        width={50}
                        height={50}
                    />
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } pt-20 p-6 black-gradient absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map(link => (
                                <li
                                    key={link.id}
                                    className={`${
                                        active === link.title ? "text-primary-600" : "text-contrast-200"
                                        } font-poppins font-medium cursor-pointer text-[16px]`}
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
