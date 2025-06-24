import {
    debateLabLogo,
    flareLogo,
    gameKnightLogo,
    vitalityLogo,
} from "../assets";

const debateLabProject = {
    name: "Debate Lab",
    description: "Online Philosophy Forums with A.I. robot to filter out foolery.",
    techStack: ['TypeScript', 'React', 'React Router', 'Tailwind', 'Motion', 'Node.js', 'Express', 'Google Gemini API', 'PostgreSQL', 'Sequelize'],
    features: [
        'Receive user arguments to process for fallacies using the Google Gemini API',
        'Approve rewritten responses without fallacies before posting'
    ],
    image: debateLabLogo,
    sourceCodeLink: "https://github.com/bkhebert/DebateLab",
    demoLink: "https://debatelab.xyz/",
};

const flareProject = {
    name: "Flare",
    description: "Flare is your go-to for discovering local events, tackling small life missions, and boosting your social confidence. Whether you’re shy, dealing with jitters, or just want more adventures, Flare is here to help you level up your social life.",
    techStack: ['TypeScript', 'React', 'React Router', 'Tailwind', 'Motion', 'Node.js', 'Express', 'Cron', 'MySQL', 'Sequelize', 'Jest', 'GitHub Actions'],
    features: [
        'Serve area-specific events to attend that match user interests, category, and location',
        'Organize events a user is attending or bailing with a tab interface and responsive updates to changes',
        `Notify users of upcoming events they're attending with a custom notification system for Flare`,
        `Schedule a text to arrive during an event to provide an exit plan from uncomfortable situations`,
        `Provide accessibility using Text-to-Speech to read event and notification details upon request`,
        `Continuous integration setup with GitHub Actions and test code with Jest to support merges`
    ],
    image: flareLogo,
    sourceCodeLink: "https://github.com/the-full-stack-attack/flare",
    demoLink: "",
};

const gameKnightProject = {
    name: "Game Knight",
    description: "Welcome to Game Knight! Getting a group together for a game night can be tough: What should we play? What games are available? Forgetting whose turn it is. Game Knight will be a central hub for keeping track of a board game collection, scheduling game nights, and assisting players while they play board games.",
    techStack: ['JavaScript', 'React', 'React Router', 'Material UI', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Board Game Geeks API'],
    features: [
        `Board game tracking using data from the Board Game Geeks API`,
        `Sort board game collection using categories and mechanics provided by BGG`,
        `Parse XML data from the Board Game Geeks API into JS objects`,
        `Authenticate user login with Google`
    ],
    image: gameKnightLogo,
    sourceCodeLink: "https://github.com/Awesome-Person-Interface/game-knight",
    demoLink: "",
};

const vitalityProject = {
    name: "Vitality",
    description: "Vitality is an application designed to help end-users track workouts and nutrition plans so that they can meet their health goals. It has two primary features, workouts and nutritional data, which allow for a user to search for and track this type of information within their account.",
    techStack: ['JavaScript', 'React', 'React Router', 'Material UI', 'React-Big-Calendar', 'Day.js', 'Node.js', 'Express', 'MongoDB Atlas', 'Mongoose'],
    features: [
        'Updated application with React Router to improve maintainability and performance, and increase the reliability of the code base',
        'Increased data resilience, reduced costs, and mitigated scalability issues and maintenance efforts by migrating a self-hosted NoSQL database to a fully managed MongoDB Atlas cluster',
        `Track events for workouts and meals using an integrated calendar that adjusts for daily, weekly, and monthly views`
    ],
    image: vitalityLogo,
    sourceCodeLink: "https://github.com/Awesome-Person-Interface/fitness-tracker",
    demoLink: "",
};

export {
    debateLabProject,
    flareProject,
    gameKnightProject,
    vitalityProject,
};