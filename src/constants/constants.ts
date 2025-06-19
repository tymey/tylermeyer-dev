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
    // JavaScript *
    {
        id: "javascript",
        title: "JavaScript",
        icon: javascriptIcon,
        description: ``,
    },

    // TypeScript *
    {
        id: "typescript",
        title: "TypeScript",
        icon: typescriptIcon,
        description: ``,
    },

    // HTML *
    {
        id: "html",
        title: "HTML",
        icon: htmlIcon,
        description: ``,
    },

    // CSS *
    {
        id: "css",
        title: "CSS",
        icon: cssIcon,
        description: ``,
    },
    
    // SQL *
    {
        id: "sql",
        title: "SQL",
        icon: sqlIcon,
        description: ``,
    },
    
    // C *
    {
        id: "c",
        title: "C",
        icon: cIcon,
        description: ``,
    },
    
    // Python *
    {
        id: "python",
        title: "Python",
        icon: pythonIcon,
        description: ``,
    },
];

const frontendSkills = [
    // React *
    {
        id: "react",
        title: "React",
        icon: reactIcon,
        description: ``,
    },
    
    // React Router *
    {
        id: "react-router",
        title: "React Router",
        icon: reactRouterIcon,
        description: ``,
    },
    
    // Next.js *
    {
        id: "nextjs",
        title: "Next.js",
        icon: nextjsIcon,
        description: ``,
    },
    
    // Material UI *
    {
        id: "material-ui",
        title: "Material UI",
        icon: materialUIIcon,
        description: ``,
    },
    
    // Tailwind CSS *
    {
        id: "tailwind",
        title: "Tailwind CSS",
        icon: tailwindIcon,
        description: ``,
    },
    
];

const backendSkills = [
    // Node.js *
    {
        id: "nodejs",
        title: "Node.js",
        icon: nodejsIcon,
        description: ``,
    },
    
    // Express.js *
    {
        id: "express",
        title: "Express.js",
        icon: expressIcon,
        description: ``,
    },
    
    // Axios *
    {
        id: "axios",
        title: "Axios",
        icon: axiosIcon,
        description: ``,
    },
    
    // MySQL *
    {
        id: "mysql",
        title: "MySQL",
        icon: mysqlIcon,
        description: ``,
    },
    
    // Sequelize *
    {
        id: "sequelize",
        title: "Sequelize",
        icon: sequelizeIcon,
        description: ``,
    },
    
    // MongoDB *
    {
        id: "mongodb",
        title: "Mongo DB",
        icon: mongoDBIcon,
        description: ``,
    },
    
    // Mongoose *
    {
        id: "mongoose",
        title: "Mongoose.js",
        icon: mongooseIcon,
        description: ``,
    },
    
    // Cron *
    {
        id: "cron",
        title: "Cron",
        icon: cronIcon,
        description: ``,
    },
    
    // Passport.js *
    {
        id: "passport",
        title: "Passport.js",
        icon: passportIcon,
        description: ``,
    },
];

const deploymentSkills = [
    // AWS *
    {
        id: "aws",
        title: "AWS",
        icon: awsIcon,
        description: ``,
    },
    
    // Vercel *
    {
        id: "vercel",
        title: "Vercel",
        icon: vercelIcon,
        description: ``,
    },
    
    // MongoDB Atlas *
    {
        id: "mongodb-atlas",
        title: "MongoDB Atlas",
        icon: mongoDBAtlasIcon,
        description: ``,
    },
    
    // Jest *
    {
        id: "jest",
        title: "Jest",
        icon: jestIcon,
        description: ``,
    },
    
    // GitHub Actions *
    {
        id: "github-actions",
        title: "GitHub Actions",
        icon: githubActionsIcon,
        description: ``,
    },
];

const developerSkills = [
    // Git *
    {
        id: "git",
        title: "Git",
        icon: gitIcon,
        description: ``,
    },
    
    // GitHub *
    {
        id: "github",
        title: "GitHub",
        icon: githubIcon,
        description: ``,
    },
    
    // Agile *
    {
        id: "agile",
        title: "Agile",
        icon: agileIcon,
        description: ``,
    },

    // Webpack
    {
        id: "webpack",
        title: "Webpack",
        icon: webpackIcon,
        description: ``,
    }
];

export {
    profile,
    introduction,
    navLinks,
    projects,
    languageSkills,
    frontendSkills,
    backendSkills,
    deploymentSkills,
    developerSkills,
};