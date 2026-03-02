import { FaLinkedinIn } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const sourabhImage = "/assets/Images/pfps/mark.jpeg"
const sourabhName = "Sourabh Patne"
const sourabhShortName = "Sourabh"
const sourabhBio = "Learner"
const sourabhAbout = `
  <p>
    Hey! I'm Sourabh Patne, not a cracked one yet but soon to be one, cuz why not.
  </p>
  <p>
    Currently learning and building cool stuff with HTML, CSS, Tailwind, and JavaScript. Always exploring new technologies and working on exciting projects.
  </p>
  <p>
    I love collaborating on projects and turning ideas into reality. Check out my work and let's build something awesome together!
  </p>
`

const sourabhLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/SourabhX16",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/sourabhX16",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "LinkedIn",
    link: "https://linkedin.com/in/sourabh-patne-2385733a3",
    icon: FaLinkedinIn,
  },
]

const sourabhContact =
  "Feel free to reach out to me via email or connect with me on GitHub and LinkedIn. Always open to collaborating on interesting projects!"
const sourabhContactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/sourabhX16",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Email",
    link: "mailto:sourabhpatne@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/SourabhX16",
    icon: FaGithub,
  },
]

const sourabhFooterLink = [
  {
    id: 1,
    name: "Mail",
    link: "mailto:sourabhpatne@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/SourabhX16",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "Twitter",
    link: "https://x.com/sourabhX16",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://linkedin.com/in/sourabh-patne-2385733a3",
    icon: FaLinkedinIn,
  },
]

export {
  sourabhImage,
  sourabhBio,
  sourabhContact,
  sourabhContactLink,
  sourabhName,
  sourabhShortName,
  sourabhAbout,
  sourabhLink,
  sourabhFooterLink,
}
