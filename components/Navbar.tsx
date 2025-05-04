import { 
  IconHome, 
  IconUser, 
  IconMail, 
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/FloatingDock";
import { GrTechnology } from "react-icons/gr";
import { PiProjectorScreenFill } from "react-icons/pi";

export function Navbar() {
  const dockItems = [
    {
      title: "Home",
      icon: <IconHome />,
      href: "#home"
    },
    {
      title: "About",
      icon: <IconUser />,
      href: "#about"
    },
    {
      title: "Skiils & Technologies",
      icon: <GrTechnology />,
      href: "#skills"
    },
    {
      title: "Projects",
      icon: <PiProjectorScreenFill />,
      href: "#projects"
    },
    {
      title: "Contact",
      icon: <IconMail />,
      href: "#contact"
    },
  ];

  return (
    <FloatingDock 
      items={dockItems}
      desktopClassName="fixed "
      mobileClassName="fixed right-4"
    />
  );
}