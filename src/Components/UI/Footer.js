import React from "react";
import { footer, navbar } from "@/utils/data";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useAppContext } from "../Context/AppContext";
import LogoMobile from "../Reusable/LogoMobile";
import Logo from "../Reusable/LogoLight";
import Twitter from "../svg/Socials/twitter";
import LinkedIn from "../svg/Socials/linkedin";
import Behance from "../svg/Socials/behance";
import Dribble from "../svg/Socials/dribble";
import { Link } from "react-scroll";

const Footer = () => {
  const { links } = footer;
  const { side_nav } = navbar;
  const { darkMode } = useAppContext();
  return (
    <div className="dark:bg-[#4d4d4d]">
      <footer className=" grid gap-y-5 grid-cols-3 md:grid-cols-4 screen-center mt-20 py-5">
        <div>
          <Link to="home" smooth={true} duration={1000}>
            <div className="flex items-center gap-2">
              <div className=" md:hidden">
                <LogoMobile />
              </div>
              <div className="hidden md:block">
                <Logo />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-start-2  uppercase ">
          <p className="">Company</p>
          <div className="text-[#8c8c8c] flex flex-col">
            {side_nav.map((link) => (
              <Link
                key={link.id}
                to={link.link}
                spy={true}
                smooth={true}
                duration={1000}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="uppercase flex flex-col mx-auto">
          <p>Socials</p>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
            <div className="social-icons">
              <LinkedIn darkMode={darkMode} />
            </div>
            <div className="social-icons">
              <Behance darkMode={darkMode} />
            </div>
            <div className="social-icons">
              <Dribble darkMode={darkMode} />
            </div>
            <div className="social-icons">
              <Twitter darkMode={darkMode} />
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-2  row-start-1 col-start-2 md:col-start-4 md:col-span-1">
          <p className="uppercase ">Join Our Mailing List</p>
          <div className="my-2 relative">
            <input
              type="text"
              className="w-full bg-transparent focus:ring-0 border-t-0 border-r-0 border-l-0  text-[10px] lg:text-[12px] relative"
              placeholder="Enter your Mail to Subscribe"
            ></input>
            <div className="absolute right-0 bottom-0 mb-3 w-[20px] h-[20px] flex items-center justify-center rounded-full bg-sec dark:bg-pri">
              <AiOutlineArrowRight
                size="80%"
                className="w-full text-pri dark:text-sec"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
