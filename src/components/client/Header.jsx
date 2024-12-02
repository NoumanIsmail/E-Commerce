import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { PiCashRegister } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiSolidCheckboxMinus } from "react-icons/bi";
import { IoBagCheckOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const [search, setSearch] = useState(true);
  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <>
      <header className="fixed top-0 left-0 shadow-md w-full p-2 flex items-center justify-between bg-white z-50">
        <div>
          <NavLink to={"/"}>
            {" "}
            <img src={logo} alt="" className="w-2/5" />{" "}
          </NavLink>
        </div>
        <div className="flex items-center justify-between ">
          <div className="-translate-x-2 flex p-1 border-2 rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              className={
                search
                  ? "hidden transition-all duration-75"
                  : "flex outline-none"
              }
            />{" "}
            <CiSearch
              size={26}
              className="cursor-pointer"
              onClick={toggleSearch}
            />
          </div>

          <div className={`h-12 w-12 overflow-hidden`}>
            {" "}
            <NavLink to={"/profile"}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_oL1l60gN7zHc_fMS11OeFR-mLDi3DgjNg&s"
                alt=""
                className="h-full w-full object-contain rounded-full border-black "
              />
            </NavLink>
          </div>
          <div
            onClick={toggleSidebar}
            className="hidden md:flex border-2  rounded-lg cursor-pointer p-1"
          >
            {" "}
            <RxHamburgerMenu size={24} />
          </div>
        </div>
      </header>
      <div
        className={`md:right-0 md:top-[76px]  md:w-56  fixed w-full p-2 border-2 bottom-0 left-0 bg-white shadow-md z-40 transition-all ${
          isSidebarOpen ? "md:translate-x-0" : "md:-translate-x-full"
        }`}
      >
        <ul className="md:flex-col md:w-full md:h-full md:justify-start md:gap-1 flex items-center justify-between ">
          <li className="md:items-start md:border-2 md:w-full md:p-2 md:rounded-lg md:flex-row md:text-md flex flex-col items-center font-light text-sm hover:font-medium hover:text-orange-500">
            <AiOutlineHome size={22} className="cursor-pointer md:" />
            <NavLink
              className={({isActive}) =>
                 isActive ? "font-medium text-orange-500 md:font-semibold md:translate-x-2" : "md:font-bold md:translate-x-2"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="md:items-start md:border-2 md:w-full md:p-2 md:rounded-lg md:flex-row md:text-md flex flex-col items-center font-light text-sm hover:font-medium hover:text-orange-500">
            <MdOutlineShoppingCart size={22} className="cursor-pointer md:" />
            <NavLink
              className={({isActive}) =>
                isActive ? "font-medium text-orange-500 md:font-semibold md:translate-x-2" : "md:font-bold md:translate-x-2"
             }
              to={"/shop"}
            >
              Shop
            </NavLink>
          </li>
          <li className="md:items-start md:border-2 md:w-full md:p-2 md:rounded-lg md:flex-row md:text-md flex flex-col items-center font-light text-sm hover:font-medium hover:text-orange-500">
            <BsCart size={22} className="cursor-pointer md:" />
            <NavLink
             className={({isActive}) =>
              isActive ? "font-medium text-orange-500 md:font-semibold md:translate-x-2" : "md:font-bold md:translate-x-2"
           }
              to={"/cart"}
            >
              Cart
            </NavLink>
          </li>
          <li className="md:items-start md:border-2 md:w-full md:p-2 md:rounded-lg md:flex-row md:text-md flex flex-col items-center font-light text-sm hover:font-medium hover:text-orange-500">
            <IoBagCheckOutline size={22} className="cursor-pointer md:" />
            <NavLink
              className={({isActive}) =>
                isActive ? "font-medium text-orange-500 md:font-semibold md:translate-x-2" : "md:font-bold md:translate-x-2"
             }
              to={"/check-out"}
            >
              Check-Out
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
