"use client";
import React from "react";
import { FiArrowUpRight as ArrowUpRightIcon } from "react-icons/fi";

const footerLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/makrious-ayman-84985621b/",
  },
  { name: "GitHub", link: "https://github.com/MakCoder-2004" },
  { name: "Facebook", link: "https://www.facebook.com/Maaak0" },
  { name: "Instagram", link: "https://www.instagram.com/makameko_ayman/" },
  { name: "Email", link: "mailto:maaakrious2004@gmail.com" },
];

const Footer = () => {
  return (
    <section id="footer" className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-blue-500/40 [mask-image:radial-gradient(60%_60%_at_bottom_center,black,transparent)] -z-10 "></div>
      <div>
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8 ">
          <div className="text-white/40 px-8 lg:px-22">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 px-8 lg:px-22 text-white/40">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.name}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Footer;
