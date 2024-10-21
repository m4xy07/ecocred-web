"use client";
import LogoIcon from "../assets/EcoCredLogo.png";
import MenuIcon from "@/assets/icon-menu.svg";
import Button from "@/components/Button";
import { Link } from "react-scroll";


export const Header = () => {
  
  

  return (<header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
    <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
      <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
        <div>
          <div className=" h-[3rem] w-full inline-flex justify-center items-center ">
          <img src={LogoIcon.src} className="h-full w-full" />
          </div>
        </div>
        <div className="hidden md:block">

        <nav className="flex gap-8 text-sm">
            <Link to="Hero" spy={true} smooth={true} offset={50} duration={200} className="text-white/70 hover:text-white transition" style={{cursor:'pointer'}}>Hero</Link>
            <Link to="team" spy={true} smooth={true} offset={50} duration={200} className="text-white/70 hover:text-white transition" style={{cursor:'pointer'}}>Team Members</Link>
          </nav>
          
        </div>
        <div className="flex gap-4 items-center">
          <Button>Join waitlist</Button>
          <MenuIcon className="md:hidden" />
        </div>
      </div>
    </div>
  </header>
  );
};
