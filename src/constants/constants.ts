import {
    flareLogo,
    gameKnightLogo,
    vitalityLogo,
    profile,
} from "../assets";

const introduction = {
    text: [
        `Welcome! Thank you for visiting!`,
        `My name is Tyler and I'm a software engineer with a passion for creating applications that make life easier and give my community more free time.`,
        `When I'm not hacking away on a project, I enjoy playing board games with family and friends, performing in theatrical productions, and swimming.`,
        `I'm always excited to work with individuals and teams who want to bring their ideas to life and make the world a better place.`,
        `Thank you for taking the time to visit my portfolio.`,
    ]
}

const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'skills',
        title: 'Skills',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const projects = [
    {
        name: "Flare",
        description: "A social app",
        image: flareLogo,
        sourceCodeLink: "https://github.com/the-full-stack-attack/flare",
        demoLink: "",
    },
    {
        name: "Game Knight",
        description: "A board game app",
        image: gameKnightLogo,
        sourceCodeLink: "https://github.com/Awesome-Person-Interface/game-knight",
        demoLink: "",
    },
    {
        name: "Vitality",
        description: "A fitness tracking app",
        image: vitalityLogo,
        sourceCodeLink: "https://github.com/Awesome-Person-Interface/fitness-tracker",
        demoLink: "",
    },
];

export {
    profile,
    introduction,
    navLinks,
    projects,
};