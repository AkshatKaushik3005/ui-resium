import React, { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudUpload, AiOutlineSetting,} from "react-icons/ai";
import {FaUser,} from "react-icons/fa";
import {IoIosBookmarks,IoIosAlbums,IoIosInformationCircleOutline} from "react-icons/io";
import {BiWorld} from "react-icons/bi";
import{GrStackOverflow,GrSettingsOption} from "react-icons/gr";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
export default function Sidebar() {
   var [Tool,setTool] = useState(true);
   var [Layer,setLayer] = useState(true);
   var [Catalog,setCatalog] = useState(true);
   var [Element1,setElement1]=useState(true);
   var [Element2,setElement2]=useState(true);
   var [Bookmark,setBookmark]=useState(true);
   var [label,setlabel]=useState(true);
   var [label1,setlabel1]=useState(true);
   const [activeTabIndex, setActiveTabIndex] = useState(0);
     function tool( a,b,c,d,e,f){
     
       if(!b)
       {
        b=!b;
        setLayer(b);
       }
       if(!c)
       {
        c=!c;
        setCatalog(c);
       }
       if(!d)
       {
        d=!d;
        setElement1(d);
       }
       if(!e)
       {
        e=!e;
        setElement2(e);
       }
       if(!f)
       {
        f=!f;
        setBookmark(f);
       }
     }
     function layer( a,b,c,d,e,f){
      if(!b)
      {
       b=!b;
       setTool(b);
      }
      if(!c)
       {
        c=!c;
        setCatalog(c);
       }
       if(!d)
       {
        d=!d;
        setElement1(d);
       }
       if(!e)
       {
        e=!e;
        setElement2(e);
       }
       if(!f)
       {
        f=!f;
        setBookmark(f);
       }
    }
    function catalog( a,b,c,d,e,f){
      if(!b)
      {
       b=!b;
       setLayer(b);
      }
      if(!c)
       {
        c=!c;
        setTool(c);
       }
       if(!d)
       {
        d=!d;
        setElement1(d);
       }
       if(!e)
       {
        e=!e;
        setElement2(e);
       }
       if(!f)
       {
        f=!f;
        setBookmark(f);
       }
    }
    function element1( a,b,c,d,e,f){
      if(!b)
      {
       b=!b;
       setLayer(b);
      }
      if(!c)
       {
        c=!c;
        setTool(c);
       }
       if(!d)
       {
        d=!d;
        setCatalog(d);
       }
       if(!e)
       {
        e=!e;
        setElement2(e);
       }
       if(!f)
       {
        f=!f;
        setBookmark(f);
       }

    }
    function element2( a,b,c,d,e,f){
      if(!b)
      {
       b=!b;
       setLayer(b);
      }
      if(!c)
       {
        c=!c;
        setTool(c);
       }
       if(!d)
       {
        d=!d;
        setCatalog(d);
       }
       if(!e)
       {
        e=!e;
        setElement1(e);
       }
       if(!f)
       {
        f=!f;
        setBookmark(f);
       }

    }

    function bookmark( a,b,c,d,e,f){
      if(!b)
      {
       b=!b;
       setLayer(b);
      }
      if(!c)
       {
        c=!c;
        setTool(c);
       }
       if(!d)
       {
        d=!d;
        setCatalog(d);
       }
       if(!e)
       {
        e=!e;
        setElement1(e);
       }
       if(!f)
       {
        f=!f;
        setElement2(f);
       }

    }
    function tooltipcheck(a)
    {
      if(!a)
      { a=!a;
        setlabel(a);
      }
    }
    function tooltipcheck1(a)
    {
      if(!a)
      { a=!a;
        setlabel1(a);
      }
    }
          
   
    return (
      <div className="flex">
      <div className=" flex-col  bg-slate-700  w-9 h-screen items-center">
      <Link className="flex items-center pt-6" href="/">
          <Image alt="Logo" src={"/icon1.png"}  className="object-contain" width={40} height={40} 
          />
          </Link>
       <div id="div1" className=" mt-4">
       <Tooltip title="Layers" placement="right" arrow >
       <Link href="/" className={` items-center flex py-4 text-xl border-l-4 transition-colors duration-300 ${
      !Layer
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`} onClick={() => {setLayer(!Layer),layer(Layer,Tool)}} >
            < GrStackOverflow className="ml-1 fill-white" />
            
        </Link>
            </Tooltip>
          
        </div>
  
        <div>
        <Tooltip title="3D Tools" placement="right" arrow >
          <Link href="/" className={` items-center flex  my-auto py-4 text-xl border-l-4 transition-colors duration-300 ${
      !Tool
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`}  onClick={() => {setTool(!Tool),
            tool(Tool,Layer)
          }}>
            <BiWorld className="ml-1 fill-white" />
            
          </Link>
          </Tooltip>
        </div>
        <div>
        <Tooltip title="Geospatial Catalog" placement="right" arrow >
          <Link href="/" className={` items-center flex py-4 text-xl border-l-4 transition-colors duration-300 ${
      !Catalog
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`}  onClick={() => {setCatalog(!Catalog),
            catalog(Catalog,Layer,Tool)
          }}>
            <IoIosAlbums className="ml-1 fill-white" />
            
          </Link>
          </Tooltip>
        </div>
        <div >
        <Tooltip title="Add" placement="right" arrow >
          <Link href="" className={` items-center flex py-4 text-xl border-l-4 transition-colors duration-300 ${
      !Element1
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`} onClick={() => {setElement1(!Element1),
            element1(Element1,Layer,Tool,Catalog)
          }} >
            <AiOutlineSetting className="ml-1 fill-white" />
          </Link>
          </Tooltip>
        </div>
        <div >
        <Tooltip title="Upload" placement="right" arrow >
          <Link href="" className={` items-center flex py-4 text-xl border-l-4 transition-colors duration-300 ${
      !Element2
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`} onClick={() => {setElement2(!Element2),
            element2(Element2,Layer,Tool,Catalog,Element1)
          }} >
            <AiOutlineCloudUpload className="ml-1 fill-white" />
          </Link>
          </Tooltip>
        </div>
        <div >
        <Tooltip title="Bookmark" placement="right" arrow >
          <Link href="" className={` items-center flex py-4 text-xl border-l-4 transition-colors duration-300 ${
      !Bookmark
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`}onClick={() => {setBookmark(!Bookmark),
            bookmark(Bookmark,Layer,Tool,Catalog,Element1,Element2)
          }} >
            <IoIosBookmarks className="ml-1 fill-white" />
          </Link>
          </Tooltip>
        </div>
        <div className="absolute  bottom-16 hover:border-l-4 border-blue-500">
        <Tooltip title="User" placement="right" arrow >
        <Link href="" className="items-center flex mx-auto  my-auto py-4 text-xl" >
        <FaUser className="ml-1 fill-white" />
          </Link>
          </Tooltip>
        </div>
       
        <div className="absolute  bottom-0 mb-4 hover:border-l-4 border-blue-500 ">
        <Tooltip title="Settings" placement="right" arrow >
          <Link href="" className="items-center flex mx-auto  my-auto py-4 text-xl" >
            <AiOutlineSetting className="ml-1 fill-white" />
          </Link>
          </Tooltip>
        </div>
      </div>
      {!Layer  && (
        <div className="absolute z-10 left-9" > 
           <div className="flex-col border-l-2 border-slate-200 bg-slate-700 h-screen">
                      <div className="flex pt-4 w-72 " >
                       
                        < GrStackOverflow size={20} className="ml-3 fill-blue-500" />
                        <p className="mr-14 ml-3  text-slate-100">Layers</p>
                        
                           <div className="cursor-pointer">
                           <IoIosInformationCircleOutline size={25} className=" fill-blue-500 ml-24" onMouseOver={() => {setlabel(!label)}} onMouseOut={()=> {tooltipcheck(label)}}/>
                           </div>
                         { !label && (<div class="z-10 mt-10 ml-24 w-64 absolute transition duration-150 ease-in-out  shadow-lg bg-indigo-500 p-4 rounded">
                              
                                  <p class="text-sm font-bold text-white pb-1">Layers</p>
                                  <p class="text-xs leading-4 text-white pb-3">Each layer in the list represents a different type of geographic information, such as roads,land use,or water features, and is usually represented by a different symbol or color</p>
                              </div> 
                             )}
                          
            
                               
                           
                           
                        
                       
                        
                    
                      </div>
                      
             </div> 
             
        </div>
      )}

      {!Tool  && (
        
        <div className=" absolute z-10 left-9 flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72"> 
            <div className="flex pt-4 w-72 border-b-2 border-slate-200" >
                        < BiWorld size={20} className="ml-3 fill-blue-500" />
                        <p className="mr-14 ml-3  text-slate-100">3DTools</p>
                        <div className="cursor-pointer">
                           <IoIosInformationCircleOutline size={25} className=" fill-blue-500 ml-24" onMouseOver={() => {setlabel1(!label1)}} onMouseOut={()=> {tooltipcheck1(label1)}}/>
                           </div>
                         { !label1 && (<div class="z-10 mt-10 ml-24 w-64 absolute transition duration-150 ease-in-out  shadow-lg bg-indigo-500 p-4 rounded">
                              
                                  <p class="text-sm font-bold text-white pb-1">3D Tools</p>
                                  <p class="text-xs leading-4 text-white pb-3">A set of tools that operates on the 3D objects.</p>
                              </div> 
                             )}
                        
            </div>
         
         
         <div >
         <Tabs >
            <TabList className="bg-slate-600 pt-4">
              <Tab  id='col1' className=" text-blue-600 bg-slate-700 ml-1 pt-2 pl-2  focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400" >LOS</Tab>
              <Tab id='col2' className=" text-blue-600 bg-slate-700 pl-2 pt-2  focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400 ">Blend and Swipe</Tab>
              <Tab id='col3' className=" text-blue-600 bg-slate-700 pl-2 pt-2 pr-2  focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400 ">Fly Through</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>Line of Sight</p>
                </TabPanel>
                <TabPanel>
                    <p>Blend and Swipe</p>
                </TabPanel>
                <TabPanel>
                    <p>Fly Through</p>
                </TabPanel>
           </TabPanels>
         </Tabs>
        
  
  </div>    
        
             
        </div>
      )}
      
      {!Catalog &&(
              <div className=" absolute z-10 left-9 flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72"> 
                 <div className="flex pt-4 w-72 border-b-2 border-slate-200" >
                    < IoIosAlbums size={20} className="ml-3 fill-blue-500" />
                    <p className="mr-14 ml-3  text-slate-100">GeoSpatial Catalog</p>
                    <IoIosInformationCircleOutline size={25} className=" fill-blue-500 ml-18"/>
                 </div>
                 <div>
               <Tabs >
            <TabList className="bg-slate-600 pt-4">
              <Tab  className=" text-blue-600 bg-slate-700 ml-2 pt-2 pl-2 focus:outline-none focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400" >WMS</Tab>
              <Tab  className=" text-blue-600 bg-slate-700 pl-2 pt-2 pr-2 focus:outline-none focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400 ">WCS</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>WMS</p>
                </TabPanel>
                <TabPanel>
                    <p>WCS</p>
                </TabPanel>
           </TabPanels>
         </Tabs> 
         
              </div>
              </div>
             
        
        
      )}
      {!Element1 &&(
        <div className=" absolute z-10 left-9 flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72">
        </div>
      )}

      {!Element2 &&(
        <div className="absolute z-10 left-9 flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72">
        </div>
      )}

      {!Bookmark &&(
        <div className="absolute z-10 left-9 flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72">
          <div className="flex pt-4 w-72 border-b-2 border-slate-200" >
                    <IoIosBookmarks size={20} className="ml-3 fill-blue-500" />
                    <p className="mr-14 ml-3  text-slate-100">Bookmarks</p>
                 </div>
                 <div>
               <Tabs >
            <TabList className="bg-slate-600 pt-4">
              <Tab  className=" text-blue-600 bg-slate-700 ml-2 pt-2 pl-2 focus:outline-none focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400"  >Save Bookmark</Tab>
              <Tab  className=" text-blue-600 bg-slate-700 pl-2 pt-2 pr-2 focus:outline-none focus:border-r-2 border-slate-800 focus:border-t-2 border-slate-800 focus:border-l-2 border-slate-800 focus:text-slate-400 ">My Bookmarks</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>save bookmark</p>
                </TabPanel>
                <TabPanel>
                    <p>My Bookmarks</p>
                </TabPanel>
           </TabPanels>
         </Tabs> 
         
              </div>
        </div>
      )}

       </div>
    );
  }

