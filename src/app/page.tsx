"use client"

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

export default function Page() {
    return (
        <>
            <Hero /> {/* Big Intro */}
            <About /> {/* More Detailed Intro */}
            <Projects /> {/* Project Cards */}
            <Skills /> {/* Skill Cards */}
        </>
    );
}