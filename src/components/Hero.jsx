import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";
import { GetStarted } from "./"

const Hero = () => {
  return (
    <section
      className={` flex md:flex-row flex-col ${styles.paddingY}`}
      id="home"
    >

      <div className="flex flex-col justify-center items-start xl:px-0 sm:px-16 px-6">

        <div className=" py-[6px] bg-discount-gradient flex flex-row rounded-xl items-center px-4 mb-2">
          <img
            src={discount}
            className=" h-[32px] w-[32px] object-contain mr-2"
          />
          <p className={`${styles.paragraph} font-poppins`}>
            <span className="">20%</span> DISCOUNT FOR {" "}
            <span>1 MONTH</span> ACCOUNT
          </p>
        </div>

        <div className=" flex flex-row w-full justify-between items-center">
          <h1 className={` font-poppins font-semibold text-white ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]`}>
            The Next <br className="sm:block hidden"/>
            <span className=" text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        </div>
        <h1 className={` font-poppins font-semibold text-white ss:text-[68px] text-[52px] w-full`}>
            Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[450px]`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className=" flex-1 flex justify-center items-center relative md:my-0 my-10">
        <img src={robot} alt="robot" className=" z-10"/>
        <div className=" w-[80%] h-[80%] absolute white__gradient bottom-[50px] z-[1]"></div>
        <div className=" w-[80%] h-[40%] absolute pink__gradient top-[0px] z-[0]"></div>
        <div className=" w-[50%] h-[50%] absolute blue__gradient bottom-[50px] z-[1]"></div>
      </div>

      <div className="ss:hidden flex justify-center items-center">
            <GetStarted/>
      </div>

    </section>
  );
};

export default Hero;
