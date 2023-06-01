import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineCloudUpload, AiOutlineSetting,} from "react-icons/ai";
import {IoIosBookmarks,IoIosAlbums,IoIosInformationCircleOutline} from "react-icons/io";
import {BiWorld} from "react-icons/bi";
import{GrStackOverflow,GrSettingsOption} from "react-icons/gr";
export default function Sidebar() {
    var [First, setFirst] = useState(true);
    const [third] = useState(false);
    return (
      <div className="inline-flex flex-col  bg-slate-800  border-slate-200 w-9 h-screen">
       <div className=" hover:border-l-4 border-blue-500  ">
          <Link href="/" className="items-center flex  my-auto py-4 text-xl">
            < GrStackOverflow className="ml-1 fill-white" />
            
          </Link>
        </div>
  
        <div className=" hover:border-l-4 border-blue-500 ">
          <Link href="/" className="items-center flex  my-auto py-4 text-xl">
            <BiWorld className="ml-1 fill-white" />
            
          </Link>
        </div>
        <div className=" hover:border-l-4 border-blue-500">
          <Link href="/" className="items-center flex  my-auto py-4 text-xl">
            <IoIosAlbums className="ml-1 fill-white" />
            
          </Link>
        </div>
        <div className=" hover:border-l-4 border-blue-500">
          <Link href="" className="items-center flex mx-auto  my-auto py-4 text-xl" >
            <AiOutlineSetting className="ml-1 fill-white" />
          </Link>
        </div>
        <div className=" hover:border-l-4 border-blue-500">
          <Link href="" className="items-center flex mx-auto  my-auto py-4 text-xl" >
            <AiOutlineCloudUpload className="ml-1 fill-white" />
          </Link>
        </div>
        <div className=" hover:border-l-4 border-blue-500">
          <Link href="" className="items-center flex mx-auto  my-auto py-4 text-xl" >
            <IoIosBookmarks className="ml-1 fill-white" />
          </Link>
        </div>
        <div className=" hover:border-l-4 border-blue-500">
          <Link href="" className="items-center flex mx-auto  my-auto py-4 text-xl" >
            <AiOutlineSetting className="ml-1 fill-white" />
          </Link>
        </div>
      </div>
    );
  }