import { logo, close, menu } from "../assets";
import styles from "../styles";
import React, { useState } from "react";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className={` w-full py-6 flex items-center justify-between `}>
      <img src={logo} className=" h-[32px] w-[124px]"/>

      <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav,index)=>(
          <li 
            key={nav.id}
            className={` font-poppins text-white font-normal cursor-pointer text-[16px] ${index==navLinks.length -1? "mr-0": "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className=" sm:hidden flex flex-1 justify-end items-center">

          <img 
            src={toggle? close:menu}
            onClick={()=>setToggle((prev)=>!prev)}
            className=" h-[28px] w-[28px] object-contain"
            />
          
          <div className={` ${toggle? "flex": "hidden"} bg-white flex-1 absolute right-0 top-20 px-6 py-6 mx-4  rounded-xl bg-black-gradient sidebar `}>

            <ul className=" list-none flex justify-end items-center flex-1 flex-col">
              {navLinks.map((nav,index)=>(
                <li 
                  key={nav.id}
                  className={` font-poppins text-white font-normal cursor-pointer text-[16px] ${index==navLinks.length -1? "mb-0": "mb-4"}`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>

          </div>

      </div>
    </nav>
  );
};

export default Navbar;
