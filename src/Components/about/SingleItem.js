import React from "react";

const SingleItem = ({ item }) => {
  return (
    <div className="flex gap-2 items-center py-1">
      <div className=" flex justify-center items-center w-[8px] h-[8px] md:w-[15px] md:h-[15px] border-sec border dark:border-pri rounded-full">
        <div className="w-[4px] h-[4px] lg:w-[7.8px] lg:h-[7.8px] bg-sec dark:bg-pri rounded-full"></div>
      </div>
      <p>{item.text}</p>
    </div>
  );
};

export default SingleItem;
