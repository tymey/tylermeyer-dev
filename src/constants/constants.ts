import {
    agileIcon,
    awsIcon,
    axiosIcon,
    cIcon,
    cronIcon,
    cssIcon,
    expressIcon,
    gitIcon,
    githubIcon,
    githubActionsIcon,
    htmlIcon,
    javascriptIcon,
    jestIcon,
    materialUIIcon,
    mongoDBIcon,
    mongoDBAtlasIcon,
    mongooseIcon,
    mysqlIcon,
    nextjsIcon,
    nodejsIcon,
    passportIcon,
    pythonIcon,
    reactIcon,
    reactRouterIcon,
    sequelizeIcon,
    sqlIcon,
    tailwindIcon,
    typescriptIcon,
    vercelIcon,
    webpackIcon,
    flareLogo,
    gameKnightLogo,
    vitalityLogo,
    profile,
} from "../assets";

import {
    // Languages
    javascriptLang,
    typescriptLang,
    htmlLang,
    cssLang,
    sqlLang,
    cLang,
    pythonLang,
    // Frontend
    reactFront,
    reactRouterFront,
    nextFront,
    materialUIFront,
    tailwindFront,
    // Backend
    nodeBack,
    expressBack,
    axiosBack,
    mysqlBack,
    sequelizeBack,
    mongodbBack,
    mongooseBack,
    cronBack,
    passportBack,
    // Deployment
    awsDeploy,
    vercelDeploy,
    mongodbAtlasDeploy,
    jestDeploy,
    githubActionsDeploy,
    // Developer
    gitDevelop,
    githubDevelop,
    agileDevelop,
    webpackDevelop,
} from "./skills";

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

const languageSkills = [
    javascriptLang,
    typescriptLang,
    htmlLang,
    cssLang,
    sqlLang,
    cLang,
    pythonLang,
];

const frontendSkills = [
    reactFront,
    reactRouterFront,
    nextFront,
    materialUIFront,
    tailwindFront,
];

const backendSkills = [
    nodeBack,
    expressBack,
    axiosBack,
    mysqlBack,
    sequelizeBack,
    mongodbBack,
    mongooseBack,
    cronBack,
    passportBack,
];

const deploymentSkills = [
    awsDeploy,
    vercelDeploy,
    mongodbAtlasDeploy,
    jestDeploy,
    githubActionsDeploy,
];

const developerSkills = [
    gitDevelop,
    githubDevelop,
    agileDevelop,
    webpackDevelop,
];

// Collection of all skills
const skills = [
    languageSkills,
    frontendSkills,
    backendSkills,
    deploymentSkills,
    developerSkills,
];

const formInputFields = [
    // First Name
    {
        id: "firstname",
        label: "First Name",
        name: "from_first_name"
    },
    
    // Last Name
    {
        id: "lastname",
        label: "Last Name",
        name: "from_last_name"
    },
    
    // E-mail
    {
        id: "email",
        label: "Email",
        name: "from_email"
    },
    
    // Title
    {
        id: "title",
        label: "Title",
        name: "title"
    },
];

const socialLinks = [
    // LinkedIn
    {
        network: "linkedin",
        link: "https://www.linkedin.com/in/tyler-meyer-dev/",
    },

    // GitHub
    {
        network: "github",
        link: "https://github.com/tymey",
    },
    
    // YouTube
    {
        network: "youtube",
        link: "https://www.youtube.com/@TylerMeyerDev",
    },
    
    // Email
    {
        network: "email",
        link: "mailto:tylermeyer.dev@gmail.com",
    },
    
];

export {
    profile,
    introduction,
    navLinks,
    projects,
    skills,
    formInputFields,
    socialLinks,
};