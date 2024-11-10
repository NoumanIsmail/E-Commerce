import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { BsBox2 } from "react-icons/bs";
import { PiUsersThreeLight } from "react-icons/pi";

const AdminNavbar = () => {
  const [search, setSearch] = useState(true);
  const toggleSearch = () => {
    setSearch(!search);
  };
  return (
    <>
      <header className="fixed top-0 left-0 shadow-md w-full p-2 flex items-center justify-between bg-white z-50">
        <div>
          <NavLink to={"/admin"}>
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
            <NavLink to={"/admin/profile"}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_oL1l60gN7zHc_fMS11OeFR-mLDi3DgjNg&s"
                alt=""
                className="h-full w-full object-contain rounded-full border-black "
              />
            </NavLink>
          </div>
        </div>
      </header>
      <div className="md:right-0 md:top-[76px] md:w-56  fixed w-full p-2 border-2 bottom-0 left-0 bg-white shadow-md z-40">
        <ul className="md:flex-col md:w-full md:h-full md:justify-start md:gap-1 flex items-center justify-between ">
          <li className="md:items-start md:border-2 md:w-full md:p-2 md:rounded-lg md:flex-row md:text-md flex flex-col items-center font-light text-sm hover:font-medium hover:text-orange-500">
            <AiOutlineProduct size={22} className="cursor-pointer md:" />
            <NavLink
              className={"md:font-semibold md:translate-x-2"}
              to={"/admin/product"}
            >
              Products
            </NavLink>
          </li>
          <li className="md:items-start md:border-2 md:w-full md:p-2 md:rounded-lg md:flex-row md:text-md flex flex-col items-center font-light text-sm hover:font-medium hover:text-orange-500">
            <MdOutlineCategory size={22} className="cursor-pointer md:" />
            <NavLink
              className={"md:font-semibold md:translate-x-2"}
              to={"/admin/category"}
            >
              Category
            </NavLink>
          </li>
          <li className="md:items-start md:border-2 md:w-full md:p-2 md:rounded-lg md:flex-row md:text-md flex flex-col items-center font-light text-sm hover:font-medium hover:text-orange-500">
            <BsBox2 size={22} className="cursor-pointer md:" />
            <NavLink
              className={"md:font-semibold md:translate-x-2"}
              to={"/admin/orders"}
            >
              Orders
            </NavLink>
          </li>
          <li className="md:items-start md:border-2 md:w-full md:p-2 md:rounded-lg md:flex-row md:text-md flex flex-col items-center font-light text-sm hover:font-medium hover:text-orange-500">
            <PiUsersThreeLight size={22} className="cursor-pointer md:" />
            <NavLink
              className={"md:font-semibold md:translate-x-2"}
              to={"/admin/users"}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNavbar;
