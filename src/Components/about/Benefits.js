import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useAppContext } from "../Context/AppContext";

const Benefits = ({ item }) => {
  const { squada } = useAppContext();
  return (
    <div>
      <div className="flex justify-between items-center py-2 border-b-[3px] border-sec dark:border-pri">
        <h2 className={`${squada.className} `}>{item.text}</h2>
        <div className="-rotate-45">
          <AiOutlineArrowRight size="60" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
