import React, { useEffect, useState } from "react";
import logo from "../assets/logo.avif";
import userImg from "../assets/user.avif";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { navigation } from "../contents/navigation";

const AppHeader = () => {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/search?q=${searchInput}`);
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 mb-12">
      <div className="container mx-auto px-2 flex items-center h-full justify-between ">
        <Link to={"/"} className="cursor-pointer">
          <img src={logo} alt="logo" width={55} className="rounded-full" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((nav, index) => {
            return (
              <div key={index}>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 text-neutral-200 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <form className="flex items-center gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here..." 
              className="bg-transparent px-4 py-1 outline-none border-none text-neutral-100 hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button>
              <IoSearchSharp
                size={25}
                className="text-neutral-100 cursor-pointer"
              />
            </button>
          </form>
          <div className="w-10 h-10 overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img
              src={userImg}
              alt="userImg"
              width="w-full h-full"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
