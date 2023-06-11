import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaSearch, FaAngleDown } from "react-icons/fa";
import { AiOutlineNotification } from "react-icons/ai";
import { BsLightning } from "react-icons/bs";

export default function Header({ second, setSecond}) {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="flex filter justify-between bg-slate-700 h-16 overflow-hidden  items-center">
        <Link className="flex items-center" href="/">
          <Image
            alt="Logo"
            src={"/icon1.png"}
            className="object-contain"
            width={50}
            height={40}
          />
          <h1 className="font-sans text-3xl text-sky-500 font-bold">
            3D Viewer
          </h1>
        </Link>
        <button
          className=" h-19 w-auto mx-4 px-3 py-3 font-semibold text-sm hover:border-2 border-slate-500 text-slate-500 rounded-full shadow-sm"
          onClick={() => {
            setSecond(!second);
          }}
        >
          <FaBars className="h-4  w-4 2x mx-auto items-center" />
        </button>
        <input type="search" className=" m-4  block w-200 rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
        />
        <button className=" h-19 w-auto mx-3 px-3 py-3 font-semibold text-sm bg-indigo-600 text-white rounded-full shadow-sm">
          <FaSearch className="h-4  w-4 2x mx-auto items-center" />
        </button>
        {/* <div className="w-9/12 flex justify-end items-center"> */}
        <div className="flex items-center ml-auto mr-5 text-sky-400">
          <Link className="font-bold mr-2" href="/Dashboard">
            <BsLightning />
          </Link>
          <Link className="font-bold ml-5" href="/Viewer">
            <AiOutlineNotification />
          </Link>
        </div>
      </nav>
    </header>
  );
}
