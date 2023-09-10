import React from "react";

const Button = ({ style }) => {
  return (
    <button
      type="button"
      className={` bg-blue-gradient sm:px-[24px] px-[6px] py-[4px] sm:py-[10px] sm:text-[21px] text-[18px] font-normal text-primary rounded-md font-poppins outline-none ${style}`}
    >
      Get Started
    </button>
  );
};

export default Button;
