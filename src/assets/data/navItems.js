import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { GiDodging, GiTechnoHeart, GiSkills } from "react-icons/gi";

export const navItems = [
  {
    title: "home",
    url: "/",
    icon: <AiOutlineHome />,
  },
  {
    title: "work",
    url: "/work",
    icon: <GiSkills />,
  },
  {
    title: "code",
    url: "/code",
    icon: <GiTechnoHeart />,
  },
  {
    title: "about",
    url: "/about",
    icon: <GiDodging />,
  },
  {
    title: "contact",
    url: "/contact",
    icon: <AiOutlineMail />,
  },
];
