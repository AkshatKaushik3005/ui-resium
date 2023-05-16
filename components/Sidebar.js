import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSortDown, FaInbox } from "react-icons/fa";
import {
  AiOutlineGlobal,
  AiOutlineHome,
  AiOutlineTool,
  AiOutlineUpload,
  AiOutlineUser,
} from "react-icons/ai";

export default function Sidebar() {
  var [First, setFirst] = useState(true);
  const [third] = useState(false);
  return (
    <div className="flex  flex-col top-0 z-50  bg-white border-r-2 border-slate-200 h-full w-auto">
      <div className="border-b-2 hover:bg-slate-100">
        <Link
          href=""
          className="items-center flex mx-auto  my-auto py-4 text-xl"
        >
          <AiOutlineHome className="ml-2 text-sky-400" />
          <div className=" mx-auto  collapse">Dashboard</div>
        </Link>
      </div>

      <div className="border-b-2 hover:bg-slate-100 ">
        <Link href="/" className="items-center flex  my-auto py-4 text-xl">
          <AiOutlineGlobal className="ml-2 text-sky-400" />
          <div className="collapse">Viewer</div>
        </Link>
      </div>

      {First ? (
        <div className="border-b-2 hover:bg-slate-100">
          <button
            href=""
            className=" items-center flex   my-auto py-auto text-xl"
            onClick={() => {
              setFirst(!First);
            }}
          >
            <AiOutlineTool className="ml-2 text-sky-400" />
            <div className="collapse">
              Tools
              <FaSortDown class="my-auto items-center" />
            </div>
          </button>
        </div>
      ) : (
        <div className="border-b-2 hover:bg-slate-100">
          <button
            href=""
            className=" items-center flex   my-auto py-4 text-xl"
            onClick={() => {
              setFirst(!First);
            }}
          >
            <AiOutlineTool className="ml-2 text-sky-400" />
            <div className="collapse">
              Tools
              <FaSortDown class="my-auto items-center" />
            </div>
          </button>
          <div id="list" className="flex">
            <ul className="mx-5 my-3 list-none">
              <li>
                <button className="flex  items-center">
                  <AiOutlineUpload className="mr-1.5" /> Add GeoJson
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="border-b-2 hover:bg-slate-100">
        <button
          href=""
          className=" items-center flex  mr-0 my-auto py-4 text-xl"
        >
          <AiOutlineUser className="ml-2 text-sky-400" />
          <div className="collapse flex">
            Users
            <FaSortDown class="my-auto items-center" />
          </div>
        </button>
      </div>
      <div className="border-b-2 hover:bg-slate-100">
        <button className="items-center flex my-auto py-4 text-xl">
          <FaInbox className="ml-2 items-center text-sky-400" />
          <div className="collapse flex">
            Messages <FaSortDown class="my-auto items-center" />
          </div>
        </button>
      </div>
    </div>
  );
}
