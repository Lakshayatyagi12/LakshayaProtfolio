import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  githubBG,
  chromecast,
  disc02,
  discord,
  discordBlack,
  figma,
  file02,
  fiver,
  framer,
  homeSmile,
  instagram,
  notification2,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  upwork,
  github,
  react,
  express,
  node,
  mongodb,
  javascript,
  html,
  css,
  tailwindcss,
  cpp,
  mern,
  python,
  redux,
  mui,
  postman,
  socket,
  threejs,
  firebase,
  hibernate,
  linkedin,
} from "../assets";
import java from "../assets/java.png";
import sql from "../assets/sql.png";
import Parth from "../assets/Parth.png";
import DeFlix from "../assets/DeFlix.webp";
import ClubManager from "../assets/ClubManager.webp";
import GTMSpace from "../assets/GTMSpace.webp";
import MintItUp from "../assets/MintItUp.jpg"
export const navigation = [
  {
    id: "0",
    title: "Projects",
    url: "#Projects",
  },
  {
    id: "1",
    title: "Works",
    url: "#works",
  },
  {
    id: "2",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "3",
    title: "Resume",
    // url: "https://drive.google.com/file/d/1jVyaOBMKnW6Wy89ONiv4y-RsycrEc1mC/view?usp=sharing",
  },
  {
    id: "4",
    title: "Hire Me",
    url: "https://www.linkedin.com/in/lakshaya-tyagi-5a03971a6/",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Buy me a coffee",
    url: "https://buymeacoffee.com/lakshaya",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [Parth, notification2, figma];

export const companyLogos = [Parth, fiver, upwork];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const projects = [
  {
    id: "0",
    title: "Personal portfolio",
    text: "DeFlix,a decentralized web3 movie reviewing sytem which enables user to post reviews which cannot be modified and deleted providing 100% true reviews to users.Made using MERN stack and Solidity for creating smart contracts and Ethereum as mainnet for deploying smart contracts",
    date: "Oct 2024",
    status: "done",
    imageUrl: DeFlix,
    colorful: true,
    to: "http://143.244.134.9:5173/",
  },
  {
    id: "1",
    title: "Mood Tracker",
    text: "The Mood Tracker is a React-base web application that empowers users to log and track their daily moods, activities, and gain insights into their emotional journey over time. This app not only helps users reflect on their moods but also provides personalized suggestions based on their emotional state.",
    date: "Oct 2024",
    status: "done",
    imageUrl: GTMSpace,
    to: "https://mood-tracker-roan.vercel.app/",
  },
  {
    id: "2",
    title: "NotesApp",
    text: "The Notes app is a React base application that allows users to create, update, and manage notes. User can create new notes, edit existing ones, and set reminders. Once a reminder is triggered, an alert will notify the user at the top of the interface with a corresponding message. Additionally, users can delete notes when no longer needed. All notes are stored locally using the browser's localStorage for persistent data management.",
    date: "June 2024",
    status: "done",
    imageUrl: MintItUp,
    to: "https://notes-app1-psi.vercel.app/",
  },
  {
    id: "3",
    title: "ToDo List",
    text: "Todo List is a React based web application that supports full CRUD ( Create, Read, Update, Delete) operations. It also includes a search functionality, enabling users to efficiently find specific task. Daily task are stored using localStorage, ensuring data persistence across browser sessions.",
    date: "June 2023",
    status: "done",
    imageUrl: ClubManager,
    to: "https://lakshayatyagi12.github.io/Todo-Assignment-Task/",
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "MERN Stack",
    icon: mern,
  },
  {
    id: "1",
    title: "TailwindCSS",
    icon: tailwindcss,
  },
  {
    id: "2",
    title: "C++",
    icon: cpp,
  },
  {
    id: "3",
    title: "JavaScript",
    icon: javascript,
  },
  {
    id: "4",
    title: "Redux/Recoil",
    icon: redux,
  },
  {
    id: "5",
    title: "SQL",
    icon: sql,
  },
  {
    id: "6",
    title: "Java",
    icon: java,
  },
  {
    id: "7",
    title: "Hibernate",
    icon: hibernate,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "react",
    icon: react,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "express",
    icon: express,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "node",
    icon: node,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "javascript",
    icon: javascript,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "html",
    icon: html,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "css",
    icon: css,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "tailwindcss",
    icon: tailwindcss,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Web Developer Intern @ The WebPlant",
    text: 'Developed and maintained responsive web applications using the MERN stack, ensuring optimal performance across devices.',
    backgroundUrl: "src/assets/benefits/card-1.svg",
    iconUrl: github,
    imageUrl: githubBG,
  },
  {
    id: "1",
    title: "Frontend Intern @ KaroStartUp",
    text: "Collaborated with more senior developers on creating interfaces that are user friendly and overall improve the experience for users. Used frameworks like React to create dynamic components and enhance application performance. Participated in code reviews and contributed to maintaining high coding standards and best practices.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon3,
    imageUrl: githubBG,
    light: true,
  },
  {
    id: "2",
    title: "Web designer Intern @StudiesZone",
    text: "Team Up with developers to ensure a smooth adaptation of design concepts across multiple projects. Made and optimized graphics, icons, and other visual elements to enhance the aesthetics of the website. Conducted user research and usability testing to collect feedback on the design elements and refine them.",
    backgroundUrl: "src/assets/benefits/card-2.svg",
    iconUrl: github,
    imageUrl: githubBG,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discordapp.com/users/lakshayatyagi",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/Tier335361",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/thelakshayatyagi/",
  },
  {
    id: "4",
    title: "inkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/lakshaya-tyagi-5a03971a6/",
  },
];
