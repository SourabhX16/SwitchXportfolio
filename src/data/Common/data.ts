import { BiLogoPostgresql } from "react-icons/bi"
import {FaGithub, FaLinkedinIn, FaPython } from "react-icons/fa6"
import { DiJavascript } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa6"
import { IoLogoNodejs } from "react-icons/io5"
import { PiFigmaLogoBold } from "react-icons/pi"
import { FaDocker, FaMediumM } from "react-icons/fa"
import { BsFiletypeSql } from "react-icons/bs"

import {
  RiBearSmileLine,
  RiJavaLine,
  RiNextjsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri"
import {
  SiRedis,
  SiBehance,
  SiExpress,
  SiGreensock,
  SiMongodb,
  SiPostman,
  SiShadcnui,
  SiVercel,
  SiReactquery,
  SiLeetcode,
  SiPrisma,
  SiDjango,
} from "react-icons/si"
import {
  TbBrandCpp,
  TbBrandFramerMotion,
  TbBrandTypescript,
  TbHexagonLetterC,
} from "react-icons/tb"
import { VscTerminalLinux } from "react-icons/vsc"
import { ImLab } from "react-icons/im"

const skills = [
  { id: 1, icon: DiJavascript, text: "JavaScript" },
  { id: 2, icon: RiTailwindCssFill, text: "Tailwind" },
  { id: 3, icon: FaPython, text: "Python" },
  { id: 4, icon: FaGitAlt, text: "Git" },
  { id: 5, icon: FaGithub, text: "GitHub" },
]
const projects = [
  {
    id: 1,
    img: "/assets/Images/project/neuralplan.png",
    title: "Neural Plan",
    status: true,
    content:
      "An AI-driven productivity engine that converts unexpected timetable gaps into personalized learning sprints. Using a 'Neural State' selector, it synchronizes study material with a student's real-time energy levels via the Gemini API. Turn cancelled class time into focused, mood-matched growth.",
    url: "https://neuralplan.streamlit.app/",
    github: "https://github.com/Mikky-mlh/NeuralPlan",
    skill: ["Python", "Streamlit", "Gemini API", "Plotly", "Lottie"],
  },
  {
    id: 2,
    img: "/assets/Images/project/faahbuzz.png",
    title: "FaahBuzz",
    status: true,
    content:
      "A fun and quirky project built with vanilla HTML, CSS, and JavaScript. Just a funny project showcasing creative web development skills.",
    github: "https://github.com/SourabhX16/FaahBuzz",
    url: "https://sourabhx16.github.io/FaahBuzz/",
    skill: ["HTML", "CSS", "JavaScript"],
  },
]

const writings = [
  {
    id: 1,
    img: "/assets/Images/writing/jwt.png",
    head: "JWT Authentication APIs with TypeScript, Node.js, and MongoDB.",
    des: "This blog guides you through building a JWT authentication system using TypeScript, Node.js, Express, and MongoDB. Learn to implement secure authentication, protect routes, and test APIs with Postman.",
    link: "https://medium.com/@rinkitadhana/jwt-authentication-apis-with-typescript-node-js-and-mongodb-b05a8a3cb062",
  },
  {
    id: 2,
    img: "/assets/Images/writing/docker1.png",
    head: "Part 1: Docker with Node.js & Express.js — Basics.",
    des: "This blog is part one of the Docker series, and it will guide you through how to containerize your simple Node.js application at a basic level with some extra CLI commands.",
    link: "https://medium.com/@rinkitadhana/part-1-docker-with-node-js-express-js-basics-06229c95ff7a",
  },
  {
    id: 3,
    img: "/assets/Images/writing/gsoc.png",
    head: "My GSOC Journey: The 2-Month Sprint from Doubt to Done",
    des: "This blog details my intense, two-month journey to cracking GSOC 2025, from nearly giving up to securing a spot through hard work, strategic learning, and crucial mentorship.",
    link: "https://medium.com/@rinkitadhana/my-gsoc-journey-the-2-month-sprint-from-doubt-to-done-b92aee22dc1f",
  },
  {
    id: 4,
    img: "/assets/Images/writing/prisma.jpg",
    head: "Getting Started with Prisma: Quick and Easy Node.js Setup",
    des: "Learn how to quickly set up Prisma in your Node.js (and TypeScript) project with this step-by-step guide. This tutorial will walk you through the simplest and fastest way to get Prisma configured and ready to use.",
    link: "https://medium.com/@rinkitadhana/getting-started-with-prisma-set-up-prisma-on-your-typescript-express-server-45bcef5e178c",
  },
  {
    id: 5,
    img: "/assets/Images/writing/gsoc2.webp",
    head: "How I almost ruined my GSoC project: My Bonding Period Journey",
    des: "In this blog, I’ll share my journey after getting selected for GSoC, the challenges I faced while balancing exams and project work, and how I tackled the unexpected complexities of my project.",
    link: "https://medium.com/@rinkitadhana/how-i-almost-ruined-my-gsoc-project-my-community-bonding-period-journey-9b890d6002eb",
  },
  {
    id: 6,
    img: "/assets/Images/writing/figma.png",
    head: "Create Common Patterns in Figma Effortlessly",
    des: "In this blog, I will share a simple and effective way to create some of the most common patterns in Figma. You'll learn how to design grid patterns and dotted grid patterns effortlessly",
    link: "https://medium.com/@rinkitadhana/create-common-patterns-in-figma-effortlessly-grid-and-dotted-grid-patterns-43eadb877fe2",
  },
]

const hireText =
  "I’m currently available for internships, full-time opportunities, and freelance projects. If you’re looking for someone passionate, skilled, and ready to contribute, I’m here to help bring your ideas to life!"

const emailLink = "mailto:sourabhpatne@gmail.com?subject=Let's%20Collaborate"

const navLinks = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/SourabhX16",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://linkedin.com/in/sourabh-patne-2385733a3",
    icon: FaLinkedinIn,
  },
]

const supportText =
  "If you love what I do, whether it’s my work, the content I share, or anything else, please consider supporting me. Your support helps me continue creating, improving, and sharing my work."

const newsText =
  "Subscribe to my newsletter to get updates on my latest projects, blogs, and news. Stay connected and be the first to know what I’m working on!"
export {
  projects,
  writings,
  emailLink,
  skills,
  hireText,
  navLinks,
  supportText,
  newsText,
}
