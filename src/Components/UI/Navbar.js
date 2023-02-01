import Image from "next/image";
import Link from "next/link";
import LogoDark from "../Reusable/LogoDark";
import Button from "../Reusable/Button";
import { useState } from "react";
import ToggleSwitch from "../Reusable/ToggleSwitch";
import SideNavigation from "../Reusable/SideNavigation";
import { AnimatePresence } from "framer-motion";
import LogoLight from "../Reusable/LogoLight";
import { useAppContext } from "../Context/AppContext";
import { Squada_One } from "@next/font/google";
import styles from "./../../styles/Home.module.css";
const squada = Squada_One({
  subsets: ["latin"],
  weight: ["400"],
});
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { darkMode } = useAppContext();
  return (
    <div className="relative">
      <navbar className="screen-center flex justify-between ">
        <div className="pb-5 pt-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              {!darkMode ? <LogoLight /> : <LogoDark />}
              <span class={`${squada.className} font-bold text-[40px]`}>
                CathaDev
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center md:gap-10">
          <Button title="Contact Us" />
          <button
            onClick={() => setShowNav(true)}
            className=" bg-black py-1 w-[100px]  rounded-[30px] dark:bg-pri text-pri dark:text-sec justify-center flex "
          >
            Menu
          </button>
          <ToggleSwitch />
        </div>
        <AnimatePresence>
          {showNav && (
            <SideNavigation showNav={showNav} setShowNav={setShowNav} />
          )}
        </AnimatePresence>
      </navbar>
    </div>
  );
}
export default Navbar;
