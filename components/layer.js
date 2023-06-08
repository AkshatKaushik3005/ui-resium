import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineCloudUpload, AiOutlineSetting,} from "react-icons/ai";
import {IoIosBookmarks,IoIosAlbums,IoIosInformationCircleOutline} from "react-icons/io";
import {BiWorld} from "react-icons/bi";
import{GrStackOverflow,GrSettingsOption} from "react-icons/gr";
const layer=()=> {
     
    return (
      <div > 
           <div className=" bg-slate-800  h-screen">
                      <div className="flex" >
                        < GrStackOverflow className="ml-3 fill-blue-500" />
                        <p className="mr-14 ml-3 text-slate-100">Layers</p>
                        <IoIosInformationCircleOutline className="ml-1 px-10 fill-blue-500"/>
                      </div>
             </div> 
             
        </div>
    );
  }
  export default layer;