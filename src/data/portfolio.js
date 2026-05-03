export const navigation = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

export const aboutMe = {
  name: "Mohim Uddin",
  designation: "Full-Stack Web Developer",
  intro: "A passionate Full-Stack Developer with a knack for building clean, efficient, and scalable web applications. My journey in programming started with a curiosity about how things work on the internet, and it has evolved into a career dedicated to engineering high-performance digital experiences.",
  journey: "My programming journey began with HTML and CSS, where I discovered the joy of creating something from scratch. Over time, I delved into JavaScript and then the MERN stack, which opened up a world of possibilities for building complex, interactive applications. I enjoy the process of turning an idea into a functional reality through code.",
  workInterests: "I love working on projects that challenge my problem-solving skills, especially those involving complex state management, real-time data, and seamless user interfaces. I'm particularly interested in performance optimization and clean architecture.",
  hobbies: "Outside of coding, I'm a pc enthusiast, gamer, cook and a story writer. These interests help me stay balanced and bring a fresh perspective to my work.",
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "BGC Trust University Bangladesh, Chittagong",
    description: "Focused on software engineering, data structures, algorithms, and web technologies. Completed several projects as part of the curriculum.",
  },
  {
    degree: "High School",
    institution: "St. Placids High School, Chittagong",
    description: "Completed with a focus on Science and Mathematics.",
  }
];

export const contactInfo = {
  email: "md.mohim15@gmail.com",
  phone: "+880 1234 567890",
  whatsapp: "+880 1234 567890",
};

export const socialLinks = {
  github: "https://github.com/Mohim129",
  linkedin: "https://www.linkedin.com/in/mohim-uddin/",
};

export const skills = {
  frontend: [
    { name: "React.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML5", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ],
  backend: [
    { name: "Node.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  ],
  tools: [
    { name: "Firebase", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
    { name: "TypeScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "GitHub", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ]
};

export const projects = [
  {
    id: "github-issue-tracker",
    title: "Github Issue Tracker",
    description: "Track your github issues and manage them efficiently.",
    image: "https://i.ibb.co.com/FkSyCdpV/github-issue-tracker.png",
    tags: ["Tailwind", "DOM Manipulation"],
    mt: "",
    liveLink: "https://mohim129.github.io/B13-A5-Github-Issue-Tracker/",
    gitLink: "https://github.com/Mohim129/B13-A5-Github-Issue-Tracker",
    stack: ["HTML5", "Tailwind CSS", "JavaScript"],
    challenges: "Managing DOM states efficiently without a framework like React and handling API rate limits from GitHub.",
    improvements: "Adding authentication and more detailed issue filtering options."
  },
  {
    id: "digitool",
    title: "Digitool",
    description: "Your go to place for all your digital tools.",
    image: "https://i.ibb.co.com/N6y9jMyF/digitool.png",
    tags: ["React js"],
    mt: "md:mt-16",
    liveLink: "https://digitool-assignment6.netlify.app/",
    gitLink: "https://github.com/Mohim129/B13-A6-DigiTools-Platform",
    stack: ["React.js", "Tailwind CSS", "React Router"],
    challenges: "Designing a clean and intuitive user interface for a variety of digital tools and ensuring smooth navigation.",
    improvements: "Implementing a dark mode and adding more advanced digital utility tools."
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    description: "A Space to be connected and to keep track of important information of your loved ones.",
    image: "https://i.ibb.co.com/kgwjFbVQ/Keen-Keeper.png",
    tags: ["React Js", "React Router"],
    mt: "",
    liveLink: "https://assignment7-keenkeeper.netlify.app/",
    gitLink: "https://github.com/Mohim129/B13-A7-keen-keeper",
    stack: ["React.js", "Firebase", "Tailwind CSS"],
    challenges: "Integrating Firebase for real-time data and authentication while maintaining a responsive design.",
    improvements: "Adding group tracking features and real-time notifications."
  },
];
