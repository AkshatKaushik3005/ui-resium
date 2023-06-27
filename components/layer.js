import React, { useState } from "react";
import Link from "next/link";
import {IoIosInformationCircleOutline,} from "react-icons/io";
import{GrStackOverflow} from "react-icons/gr";

  export default function Panel(){
    var [label,setlabel]=useState(true);
    function tooltipcheck(a)
    {
      if(!a)
      { a=!a;
        setlabel(a);
      }
    }
    return (
      <div  > 
           <div className="flex-col border-l-2 border-slate-200 bg-slate-800 h-screen w-80 text-base">
                      <div className=" flex pt-4 pb-1 border-b-2 border-slate-500" >
                       
                        < GrStackOverflow size={18} className="ml-3 fill-blue-500" />
                        <Link href="/" className="mr-12 ml-3 -mt-0.5 text-slate-300 hover:text-blue-500 ">Layers</Link>
                        
                           <div className="cursor-pointer ">
                           <IoIosInformationCircleOutline size={20} className=" fill-blue-500 ml-32" onMouseOver={() => {setlabel(!label)}} onMouseOut={()=> {tooltipcheck(label)}}/>
                           </div>
                         { !label && (<div class="z-10 mt-10 ml-24 w-64 absolute transition duration-150 ease-in-out  shadow-lg bg-indigo-500 p-4 rounded">
                              
                                  <p class="text-sm font-bold text-white pb-1">Layers</p>
                                  <p class="text-xs leading-4 text-white pb-3">Each layer in the list represents a different type of geographic information, such as roads,land use,or water features, and is usually represented by a different symbol or color</p>
                              </div> 
                             )}
                          
                      </div>
                      
             </div> 
             
        </div>
    );
  }
  