import { useState } from "react";
import Link from "next/link";
import Button from "../Reusable/Button";
import ToggleSwitch from "../Reusable/ToggleSwitch";
import SideNavigation from "../Reusable/SideNavigation";
import { AnimatePresence } from "framer-motion";
import { Squada_One } from "@next/font/google";
import styles from "./../../styles/Home.module.css";
import Logo from "../Reusable/LogoLight";
import LogoMobile from "../Reusable/LogoMobile";
import { useAppContext } from "../Context/AppContext";
const squada = Squada_One({
  subsets: ["latin"],
  weight: ["400"],
});

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { textLeave, textEnter } = useAppContext();
  return (
    <div className="relative">
      <navbar className="screen-center flex justify-between pt-5 items-center ">
        <div className="">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="md:hidden">
                <LogoMobile />
              </div>
              <div className="hidden md:block">
                <Logo />
              </div>
              <span
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className={`${squada.className} font-bold text-2xl md:text-[40px]`}
              >
                CathaDev
              </span>
            </div>
          </Link>
        </div>

        <div className="md:flex items-center md:gap-10 hidden ">
          <Button title="Contact Us" />
          <button
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            onClick={() => setShowNav(true)}
            className=" bg-black border-[2px] border-sec dark:border-pri py-1 w-[100px] hover:bg-pri hover:text-sec ease-in-out duration-500 rounded-[30px] dark:bg-pri text-pri dark:text-sec justify-center flex "
          >
            Menu
          </button>
          <ToggleSwitch />
        </div>
        <div
          onClick={() => {
            setShowNav(!showNav);
          }}
          className={` relative w-6 items-center md:hidden  `}
        >
          <div
            className={`inset-0 m-auto hamburger bg-sec dark:bg-pri ${
              showNav && "absolute rotate-45"
            }`}
          ></div>
          <div
            className={`inset-0 mt-1 hamburger bg-sec dark:bg-pri ${
              showNav && "absolute -rotate-45 mt-0"
            } `}
          ></div>
          <div
            className={`mt-1 hamburger bg-sec dark:bg-pri ${
              showNav ? " opacity-0 mt-0" : " "
            }`}
          ></div>
        </div>
      </navbar>
      <AnimatePresence>
        {showNav && (
          <SideNavigation showNav={showNav} setShowNav={setShowNav} />
        )}
      </AnimatePresence>
    </div>
  );
}
export default Navbar;
