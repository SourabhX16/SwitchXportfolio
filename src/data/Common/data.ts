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
    preview: "",
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
    preview: "",
  },
]

const writings = [
  {
    id: 1,
    img: "/assets/Images/writing/hashnode.png",
    head: "Check out my blog on Hashnode",
    des: "Follow me on Hashnode for future articles and posts about web development, programming, and my learning journey.",
    link: "https://hashnode.com/@SourabhX16",
  },
]

const hireText =
  "I'm currently learning and building projects. Open to collaborations, internships, and freelance opportunities. Let's create something amazing together!"

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
