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
    description: `I've developed several applications with Node.js. Keeping the full stack in JavaScript feels great and NPM helps extend Node.js's functionality.`,
};

const expressBack = {
    id: "express",
    title: "Express.js",
    icon: expressIcon,
    description: `Express as a framework is minimalist and unopinionated and makes building RESTful APIs a breeze. I can't imagine a Node.js application without it.`,
};

const axiosBack = {
    id: "axios",
    title: "Axios",
    icon: axiosIcon,
    description: `A promise-based and simple API for the various HTTP methods. Axios has automatic JSON parsing, which streamlines data into ready-to-use JS objects.`,
};

const mysqlBack = {
    id: "mysql",
    title: "MySQL",
    icon: mysqlIcon,
    description: `When creating applications with closely related data, MySQL is an open-source, cost effective RDBMS. Designing schemas for SQL databases is a fun challenge.`,
};
    
const sequelizeBack = {
    id: "sequelize",
    title: "Sequelize",
    icon: sequelizeIcon,
    description: `An open-source, promise-based ORM for Node.js. Defining models and using methods to query a SQL database abstracts the underlying SQL.`,
};
    
const mongodbBack = {
    id: "mongodb",
    title: "Mongo DB",
    icon: mongoDBIcon,
    description: `MongoDB is a popular NoSQL database that allows for schema flexibility. Being able to work with evolving data structures and hierarchical data is a nice plus.`,
};
    
const mongooseBack = {
    id: "mongoose",
    title: "Mongoose.js",
    icon: mongooseIcon,
    description: `While the data flexibility of MongoDB can be nice, Mongoose is an ODM that allows you to define a schema and validate data before writing to your database.`,
};
    
const cronBack = {
    id: "cron",
    title: "Cron",
    icon: cronIcon,
    description: `When automating tasks for a server, Cron helped me schedule tasks to run at regular intervals. I combined this with the Textbelt API to build a scheduled text feature.`,
};
    
const passportBack = {
    id: "passport",
    title: "Passport.js",
    icon: passportIcon,
    description: `When setting up authentication for my projects, I used Passport.js. It integrated with Express.js and could us the Google login strategy.`,
};

////////////////
// DEPLOYMENT //
////////////////

const awsDeploy = {
    id: "aws",
    title: "AWS",
    icon: awsIcon,
    description: `I've deployed a handful of projects using an AWS EC2 instance. Accessing the instance via terminal gave me control over build and run scripts.`,
};
    
const vercelDeploy = {
    id: "vercel",
    title: "Vercel",
    icon: vercelIcon,
    description: `Deploying Next.js projects, like this portfolio site, with Vercel simplifies the process allows you to focus on development.`,
};
    
const mongodbAtlasDeploy = {
    id: "mongodb-atlas",
    title: "MongoDB Atlas",
    icon: mongoDBAtlasIcon,
    description: `Using a cloud database service like MongoDB Atlas allows developers to scale their applications and automate their database management.`,
};
    
const jestDeploy = {
    id: "jest",
    title: "Jest",
    icon: jestIcon,
    description: `Jest required minimal setup to start writing test code for my JavaScript applications. Due to this ease of setup, I am able to write tests quickly and efficiently.`,
};
    
const githubActionsDeploy = {
    id: "github-actions",
    title: "GitHub Actions",
    icon: githubActionsIcon,
    description: `While working on a team in a shared codebase, GitHub Actions helped me set up continuous integration on every pull request to ensure code quality before merging.`,
};

///////////////
// DEVELOPER //
///////////////

const gitDevelop = {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description: `I can't imagine working on a project without version control like Git offers. Whenever an issue would arise, I could revert to a working state quickly.`,
};
    
const githubDevelop = {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description: `Having a central space for all my repositories on GitHub helps me work with others asynchronously. Having Git version control for collaboration is a big plus.`,
};
    
const agileDevelop = {
    id: "agile",
    title: "Agile",
    icon: agileIcon,
    description: `Iterative development is the cornerstone of developing good software. Agile focuses on short sprints with focused goals to allow developers to adapt.`,
};

const webpackDevelop = {
    id: "webpack",
    title: "Webpack",
    icon: webpackIcon,
    description: `Webpack gives developers control over how they wish to bundle their code for deployment. With this control, we can optimize performance and bundle size.`,
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