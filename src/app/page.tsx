"use client"

import "../setup/setup"; // Init emailJS
import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

export default function Page() {
    return (
        <>
            <NavBar /> {/* Navigate the page */}
            <Hero /> {/* Big Intro */}
            <About /> {/* More Detailed Intro */}
            <Projects /> {/* Project Cards */}
            <Skills /> {/* Skill Cards */}
            <Contact /> {/* Email Form */}
        </>
    );
}