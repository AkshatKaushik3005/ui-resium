import React, { useState } from "react";
import Link from "next/link";
import { FaInbox } from "react-icons/fa";
import {
  AiOutlineGlobal,
  AiOutlineHome,
  AiOutlineRight,
  AiOutlineTool,
  AiOutlineUpload,
  AiOutlineUser,
} from "react-icons/ai";

export default function Sidebar() {
  var [First, setFirst] = useState(true);
  const [third] = useState(false);
  return (
    <div className="flex  flex-col top-0 z-50  bg-white border-r-2 border-slate-200 h-screen  ease-in-out  duration-1000 hover:w-[10%] group   w-[2.5%]">
      <div className="flex items-center justify-between border-b-2 hover:bg-slate-100 ">
        <Link href="/" className="items-center flex  my-auto py-4 text-xl">
          <AiOutlineGlobal className="ml-2 text-sky-400" />
        </Link>
        <div className="flex justify-between items-center h-full w-full mr-[10%] opacity-0 transition-opacity delay-700 duration-200 group-hover:opacity-100">
          <div className="ml-[10%] ">Viewer</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className=" flex items-center
      justify-between border-b-2 hover:bg-slate-100 "
        >
          <Link href="/" className="items-center flex  my-auto py-4 text-xl">
            <AiOutlineTool className="ml-2 text-sky-400" />
          </Link>
          <div className="flex justify-between items-center h-full w-full opacity-0 transition-opacity delay-700 duration-200 group-hover:opacity-100">
            <div className="flex  ml-[10%] ">Tools</div>
            <AiOutlineRight className="my-auto mr-[5%] group-hover:duration-0 items-center" />
          </div>
        </div>
        <div className="flex bg-white border-x-2 border-slate-400 h-full w-full mr-[10%]"></div>
      </div>
      <div className="flex justify-between items-center border-b-2 hover:bg-slate-100">
        <button className="items-center flex my-auto py-4 text-xl">
          <AiOutlineUser className="ml-2 items-center text-sky-400" />
        </button>
        <div className="flex justify-between items-center h-full w-full opacity-0 transition-opacity delay-700 duration-200 group-hover:opacity-100">
          <div className="ml-[10%] ">User</div>
          <AiOutlineRight className="my-auto  mr-[5%] group-hover:duration-0 items-center" />
        </div>
      </div>
      <div className="flex justify-between items-center border-b-2 hover:bg-slate-100">
        <button className="items-center flex my-auto py-4 text-xl">
          <FaInbox className="ml-2 items-center text-sky-400" />
        </button>
        <div className="flex justify-between items-center h-full w-full opacity-0 transition-opacity delay-700 duration-200 group-hover:opacity-100">
          <div className="ml-[10%] ">Messages</div>
          <AiOutlineRight className="my-auto mr-[5%]  group-hover:duration-0 items-center" />
        </div>
      </div>
      <div className="flex flex-row">
        <h1>test</h1>
      </div>
    </div>
  );
}
