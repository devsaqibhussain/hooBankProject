import React from "react";
import { people01, people02, people03, quotes } from "../assets";

const FeedBackCards = ({ content, name, title, img }) => (
  <div className=" max-w-[370px] h-[395px] flex-shrink-0 flex flex-col justify-evenly feature-card p-[40px] rounded-[20px] ">
    <img src={quotes} className=" w-[42px] h-[27px] object-contain" />
    <p className=" text-white font-poppins text-[18px] font-normal ">{content}</p>
    <div className=" flex flex-row items-center gap-2">
      <img src={img} className=" w-[48px] h-[48px] object-contain" />
      <div>
        <h4 className=" text-white font-poppins text-[20px] font-normal ">{name}</h4>
        <p className=" text-dimWhite font-poppins text-[16px] font-normal ">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedBackCards;
