import React, { useState , useEffect } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 , TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, SetShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] =useState(false);

  const toggleMenu = () => {
    SetShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll' , handleScroll)
    return() => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,.2)]' : ''}`}>
      <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
        {/* Logo */}
        <Link to ="" className="text-3xl font-bold  ">
          Gr<span className="text-orange-500 uppercase ">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* input field */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search.."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>
          <a href="" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>
          <a href="" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>

          {/* Hamburger */}
          <button
            href=""
            className="text-zinc-800 text-3xl md:hidden "
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 /> }
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 top-30  items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? "left-1/2" : ""}`}
        >
          {" "}
          {/* here is a little nistake :::::<ul className={`flex flex-col gap-y-10 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 items-center md:hidden absolute top-[90px] left-1/2 -translate-x-1/2 transition-all duration-300 ${
  showMenu ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
}`} */}
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact us
            </a>
          </li>
          <li className="flex p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search.."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
