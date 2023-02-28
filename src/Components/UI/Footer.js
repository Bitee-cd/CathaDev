import Link from "next/link";
import React from "react";
import Links from "./Links";
import { footer } from "@/utils/data";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useAppContext } from "../Context/AppContext";
import LogoMobile from "../Reusable/LogoMobile";
import Logo from "../Reusable/LogoLight";

const Footer = () => {
  const { links } = footer;
  const { darkMode } = useAppContext();
  return (
    <footer className=" grid md:grid-cols-4 screen-center mt-20">
      <div>
        <Link href="/">
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
      <div className="uppercase flex flex-col mx-auto">
        <p>Company</p>
        {links.map((link) => (
          <Link key={link.id} href="">
            {link.text}
          </Link>
        ))}
      </div>
      <div className="uppercase flex flex-col mx-auto">
        <p>Socials</p>
      </div>
      <div className="flex flex-col mx-auto">
        <p className="uppercase ">Join Our Mailing List</p>
        <div className="my-2 relative">
          <input
            type="text"
            className="input relative"
            placeholder="Enter your Mail to Subscribe"
          ></input>
          <div className="absolute right-0 bottom-0 mb-3 w-[20px] h-[20px] flex items-center justify-center rounded-full bg-sec dark:bg-pri">
            <AiOutlineArrowRight color={`${darkMode ? "#0C0C0C" : "E3E3E3"}`} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
