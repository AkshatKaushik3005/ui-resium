import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudUpload, AiOutlineSetting,} from "react-icons/ai";
import {FaUser,} from "react-icons/fa";
import {IoIosBookmarks,IoIosAlbums,IoIosInformationCircleOutline} from "react-icons/io";
import {BiWorld} from "react-icons/bi";
import{GrStackOverflow,GrSettingsOption} from "react-icons/gr";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
//import { Tab, Tabs } from "@mui/material";
//import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
// import {
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Button,
//   Checkbox,
// } from "@chakra-ui/react";
// import {Checkbox,Slider,SliderTrack,SliderFilledTrack,SliderThumb,} from "@chakra-ui/react";
//import {Checkbox, Slider,Grid } from '@mui/material';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export default function Sidebar() {
   var [Tool,setTool] = useState(true);
   var [Layer,setLayer] = useState(true);
   var [Catalog,setCatalog] = useState(true);
   var [Element1,setElement1]=useState(true);
   var [Element2,setElement2]=useState(true);
   var [Bookmark,setBookmark]=useState(true);
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
    return (
      <div className="flex">
      <div className=" flex-col  bg-slate-700  w-9 h-screen items-center">
       <div className=" hover:border-l-4 border-blue-500  ">
       <Tooltip title="Layers" placement="right" arrow >
       <Link href="/" className="items-center flex  my-auto py-4 text-xl " onClick={() => {setLayer(!Layer),layer(Layer,Tool)}} >
            < GrStackOverflow className="ml-1 fill-white" />
            
        </Link>
            </Tooltip>
          
        </div>
  
        <div className=" hover:border-l-4 border-blue-500 ">
        <Tooltip title="3D Tools" placement="right" arrow >
          <Link href="/" className="items-center flex  my-auto py-4 text-xl" onClick={() => {setTool(!Tool),
            tool(Tool,Layer)
          }}>
            <BiWorld className="ml-1 fill-white" />
            
          </Link>
          </Tooltip>
        </div>
        <div className=" hover:border-l-4 border-blue-500">
        <Tooltip title="Catalog" placement="right" arrow >
          <Link href="/" className="items-center flex  my-auto py-4 text-xl" onClick={() => {setCatalog(!Catalog),
            catalog(Catalog,Layer,Tool)
          }}>
            <IoIosAlbums className="ml-1 fill-white" />
            
          </Link>
          </Tooltip>
        </div>
        <div className=" hover:border-l-4 border-blue-500">
        <Tooltip title="Add" placement="right" arrow >
          <Link href="" className="items-center flex mx-auto  my-auto py-4 text-xl" onClick={() => {setElement1(!Element1),
            element1(Element1,Layer,Tool,Catalog)
          }} >
            <AiOutlineSetting className="ml-1 fill-white" />
          </Link>
          </Tooltip>
        </div>
        <div className=" hover:border-l-4 border-blue-500">
        <Tooltip title="Add" placement="right" arrow >
          <Link href="" className="items-center flex mx-auto  my-auto py-4 text-xl" onClick={() => {setElement2(!Element2),
            element2(Element2,Layer,Tool,Catalog,Element1)
          }} >
            <AiOutlineCloudUpload className="ml-1 fill-white" />
          </Link>
          </Tooltip>
        </div>
        <div className=" hover:border-l-4 border-blue-500">
        <Tooltip title="Add" placement="right" arrow >
          <Link href="" className="items-center flex mx-auto  my-auto py-4 text-xl" onClick={() => {setBookmark(!Bookmark),
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
        <div> 
           <div className=" flex-col border-l-2 border-slate-200 bg-slate-700 h-screen">
                      <div className="flex pt-4 w-72 " >
                        < GrStackOverflow size={20} className="ml-3 fill-blue-500" />
                        <p className="mr-14 ml-3  text-slate-100">Layers</p>
                        <IoIosInformationCircleOutline size={25} className=" fill-blue-500 ml-24"/>
                      </div>
                      
             </div> 
             
        </div>
      )}
      {!Tool  && (
        
        <div className="flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72"> 
            <div className="flex pt-4 w-72 border-b-2 border-slate-200" >
                        < BiWorld size={20} className="ml-3 fill-blue-500" />
                        <p className="mr-14 ml-3  text-slate-100">3DTools</p>
                        <IoIosInformationCircleOutline size={25} className=" fill-blue-500 ml-24"/>
            </div>
         
         
         <div >
         <Tabs align='end' variant='enclosed'isFitted>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
           </TabPanels>
         </Tabs>
        
  
  </div>    
        
             
        </div>
      )}
      
      {!Catalog &&(
        <div>
              <div className="flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72"> 
                 <div className="flex pt-4 w-72 border-b-2 border-slate-200" >
                    < IoIosAlbums size={20} className="ml-3 fill-blue-500" />
                    <p className="mr-14 ml-3  text-slate-100">GeoSpatial Catalog</p>
                    <IoIosInformationCircleOutline size={25} className=" fill-blue-500 ml-18"/>
                 </div>
              </div>
        </div>
        
      )}
      {!Element1 &&(
        <div className="flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72">
        </div>
      )}

      {!Element2 &&(
        <div className="flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72">
        </div>
      )}

      {!Bookmark &&(
        <div className="flex-col border-l-2 border-slate-200 bg-slate-700 h-screen w-72">
        </div>
      )}

       </div>
    );
  }


  // <p>Layer List </p>
  // <p>Each layer in the list represents a different type of geographic information, such as roads,land use,or water features, and is usually represented by a different symbol or color</p>
