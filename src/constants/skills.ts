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
} from "../assets";

///////////////
// LANGUAGES //
///////////////

const javascriptLang = {
    id: "javascript",
    title: "JavaScript",
    icon: javascriptIcon,
    description: `I have used JavaScript to develop several projects with dynamic UIs and restful APIs using Node.js on the backend. I've also taught JavaScript to aspiring software developers.`,
};

const typescriptLang = {
    id: "typescript",
    title: "TypeScript",
    icon: typescriptIcon,
    description: `Having type safety with JavaScript is a game changer. Since I no longer need to handle errors on types with TypeScript, I develop faster and my mind's at ease.`,
};

const htmlLang = {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description: `HTML makes up the content and structure of the internet. Even though there's a focus on frontend frameworks, it's still important to know how HTML works.`,
};

const cssLang = {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description: `Knowing the principles and practices behind good CSS gives you control and room for creativity. I created the stop animations on these skill cards with CSS.`,
};

const sqlLang = {
    id: "sql",
    title: "SQL",
    icon: sqlIcon,
    description: `I love a relational database and creating the perfect query with SQL. When you get it right, it feels like magic as you gain access to meaningful data insights.`,
};

const cLang = {
    id: "c",
    title: "C",
    icon: cIcon,
    description: `CS50's Intro to CS course taught me how versatile and efficient C can be. Learning C has given me insights on programming and made appreciate this field more.`,
};

const pythonLang = {
    id: "python",
    title: "Python",
    icon: pythonIcon,
    description: `I have been exploring data analysis, machine learning, and AI with Python and its syntax has been easy to work with. Currently finishing a small project using Flask.`,
};

//////////////
// FRONTEND //
//////////////

const reactFront = {
    id: "react",
    title: "React",
    icon: reactIcon,
    description: `After developing several web applications, I enjoy the state management and component nature of React. Designing clever reusable components brings me so much joy.`,
};

const reactRouterFront = {
    id: "react-router",
    title: "React Router",
    icon: reactRouterIcon,
    description: `Handling client-side routing with React Router helped me create seamless user experiences with a Single-Page application that rendered different components based on the URL path.`,
};

// Next.js *
const nextFront = {
    id: "nextjs",
    title: "Next.js",
    icon: nextjsIcon,
    description: `I developed my portfolio site using the Next.js framework and I found the experience to be developer friendly and productive.`,
};
    
    // Material UI *
const materialUIFront = {
    id: "material-ui",
    title: "Material UI",
    icon: materialUIIcon,
    description: `Following Google's Material Design, this React component library helped me quickly develop applications and prototypes with a clean user interface.`,
};
    
    // Tailwind CSS *
const tailwindFront = {
    id: "tailwind",
    title: "Tailwind CSS",
    icon: tailwindIcon,
    description: `This utility-first CSS framework provides a large set of pre-defined CSS classes. Styling directly in my HTML with Tailwind helps me create style components quick.`,
};

/////////////
// BACKEND //
/////////////

const nodeBack = {
    id: "nodejs",
    title: "Node.js",
    icon: nodejsIcon,
    description: ``,
};

const expressBack = {
    id: "express",
    title: "Express.js",
    icon: expressIcon,
    description: ``,
};

const axiosBack = {
    id: "axios",
    title: "Axios",
    icon: axiosIcon,
    description: ``,
};

const mysqlBack = {
    id: "mysql",
    title: "MySQL",
    icon: mysqlIcon,
    description: ``,
};
    
const sequelizeBack = {
    id: "sequelize",
    title: "Sequelize",
    icon: sequelizeIcon,
    description: ``,
};
    
const mongodbBack = {
    id: "mongodb",
    title: "Mongo DB",
    icon: mongoDBIcon,
    description: ``,
};
    
const mongooseBack = {
    id: "mongoose",
    title: "Mongoose.js",
    icon: mongooseIcon,
    description: ``,
};
    
const cronBack = {
    id: "cron",
    title: "Cron",
    icon: cronIcon,
    description: ``,
};
    
const passportBack = {
    id: "passport",
    title: "Passport.js",
    icon: passportIcon,
    description: ``,
};

////////////////
// DEPLOYMENT //
////////////////

const awsDeploy = {
    id: "aws",
    title: "AWS",
    icon: awsIcon,
    description: ``,
};
    
const vercelDeploy = {
    id: "vercel",
    title: "Vercel",
    icon: vercelIcon,
    description: ``,
};
    
const mongodbAtlasDeploy = {
    id: "mongodb-atlas",
    title: "MongoDB Atlas",
    icon: mongoDBAtlasIcon,
    description: ``,
};
    
const jestDeploy = {
    id: "jest",
    title: "Jest",
    icon: jestIcon,
    description: ``,
};
    
const githubActionsDeploy = {
    id: "github-actions",
    title: "GitHub Actions",
    icon: githubActionsIcon,
    description: ``,
};

///////////////
// DEVELOPER //
///////////////

const gitDevelop = {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description: ``,
};
    
const githubDevelop = {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description: ``,
};
    
const agileDevelop = {
    id: "agile",
    title: "Agile",
    icon: agileIcon,
    description: ``,
};

const webpackDevelop = {
    id: "webpack",
    title: "Webpack",
    icon: webpackIcon,
    description: ``,
};

export {
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
};