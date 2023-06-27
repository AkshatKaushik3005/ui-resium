import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineCloudUpload, AiOutlineSetting,} from "react-icons/ai";
import {FaUser,} from "react-icons/fa";
import {IoIosBookmarks,IoIosAlbums,IoIosInformationCircleOutline} from "react-icons/io";
import {BiWorld} from "react-icons/bi";
import{GrStackOverflow,} from "react-icons/gr";
import Tooltip from '@mui/material/Tooltip';
import Panel from "./layer";
import Panel2 from "./tool";
import Panel3 from "./catalog";
import Panel4 from "./element1";
import Panel5 from "./element2";
import Panel6 from "./bookmark";
import Panel7 from "./user";
import Panel8 from "./setting";
export default function Sidebar(second,setSecond) {
   var [Tool,setTool] = useState(true);
   var [Layer,setLayer] = useState(true);
   var [Catalog,setCatalog] = useState(true);
   var [Element1,setElement1]=useState(true);
   var [Element2,setElement2]=useState(true);
   var [Bookmark,setBookmark]=useState(true);
   var [User,setUser]=useState(true);
   var [Setting,setSetting]=useState(true);
   //var [label1,setlabel1]=useState(true);
   function adjust()
   {
    if(!second)
     {
      second=!second;
      setSecond(second);
     }
   }
     function tool( a,b,c,d,e,f,g,h){
     adjust();
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
       if(!g)
       {
        g=!g;
        setUser(g);
       }
       if(!h)
       {
        h=!h;
        setSetting(h);
       }
     }
     function layer( a,b,c,d,e,f,g,h){
      adjust();
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
       if(!g)
       {
        g=!g;
        setUser(g);
       }
       if(!h)
       {
        h=!h;
        setSetting(h);
       }
    }
    function catalog( a,b,c,d,e,f,g,h){
      adjust();
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
       if(!g)
       {
        g=!g;
        setUser(g);
       }
       if(!h)
       {
        h=!h;
        setSetting(h);
       }
    }
    function element1( a,b,c,d,e,f,g,h){
      adjust();
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
       if(!g)
       {
        g=!g;
        setUser(g);
       }
       if(!h)
       {
        h=!h;
        setSetting(h);
       }

    }
    function element2( a,b,c,d,e,f,g,h){
      adjust();
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
       if(!g)
       {
        g=!g;
        setUser(g);
       }
       if(!h)
       {
        h=!h;
        setSetting(h);
       }
    }

    function bookmark( a,b,c,d,e,f,g,h){
      adjust();
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
       if(!g)
       {
        g=!g;
        setUser(g);
       }
       if(!h)
       {
        h=!h;
        setSetting(h);
       }

    }
    function user(a,b,c,d,e,f,g,h)
    {
      adjust();
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
       if(!g)
       {
        g=!g;
        setBookmark(g);
       }
       if(!h)
       {
        h=!h;
        setSetting(h);
       }
    }
    function setting(a,b,c,d,e,f,g,h)
    {
      adjust();
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
       if(!g)
       {
        g=!g;
        setBookmark(g);
       }
       if(!h)
       {
        h=!h;
        setUser(h);
       }
    }
    
          
   
    return (
      <div className="flex">
      <div className=" flex-col  bg-slate-700  w-9 h-screen  items-center ">
      <Link className="flex items-center pt-6" href="/">
          <Image alt="Logo" src={"/icon1.png"}  className="object-contain" width={40} height={40}  />
      </Link>
       <div id="div1" className=" mt-4">
       <Tooltip title="LayerList" placement="right" arrow >
       <Link href="/"  className={` items-center flex py-4 text-xl border-l-2 transition-colors duration-300 ${
      !Layer
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`} onClick={() => {setLayer(!Layer),layer(Layer,Tool,Catalog,Element1,Element2,Bookmark,User,Setting)}} >
            < GrStackOverflow className="ml-0.5 fill-slate-300" />
            
        </Link>
            </Tooltip>
          
        </div>
  
        <div>
        <Tooltip title="3D Tools" placement="right" arrow >
          <Link href="/" className={` items-center flex -mt-3 my-auto py-4 text-xl border-l-2 transition-colors duration-300 ${
      !Tool
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`}  onClick={() => {setTool(!Tool),
            tool(Tool,Layer,Catalog,Element1,Element2,Bookmark,User,Setting)
          }}>
            <BiWorld className="ml-0.5 fill-slate-300" />
            
          </Link>
          </Tooltip>
        </div>
        <div>
        <Tooltip title="Geospatial Catalog" placement="right" arrow >
          <Link href="/" className={` items-center -mt-3 flex py-4 text-xl border-l-2 transition-colors duration-300 ${
      !Catalog
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`}  onClick={() => {setCatalog(!Catalog),
            catalog(Catalog,Layer,Tool,Element1,Element2,Bookmark,User,Setting)
          }}>
            <IoIosAlbums className="ml-0.5 fill-slate-300" />
            
          </Link>
          </Tooltip>
        </div>
        <div >
        <Tooltip title="3DBuilding" placement="right" arrow >
          <Link href="" className={` items-center flex  -mt-3 py-4 text-xl border-l-2 transition-colors duration-300 ${
      !Element1
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`} onClick={() => {setElement1(!Element1),
            element1(Element1,Layer,Tool,Catalog,Element2,Bookmark,User,Setting)
          }} >
            <AiOutlineSetting className="ml-0.5 fill-slate-300" />
          </Link>
          </Tooltip>
        </div>
        <div >
        <Tooltip title="Upload" placement="right" arrow >
          <Link href="" className={` items-center -mt-3 flex py-4 text-xl border-l-2 transition-colors duration-300 ${
      !Element2
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`} onClick={() => {setElement2(!Element2),
            element2(Element2,Layer,Tool,Catalog,Element1,Bookmark,User,Setting)
          }} >
            <AiOutlineCloudUpload className="ml-0.5 fill-slate-300" />
          </Link>
          </Tooltip>
        </div>
        <div >
        <Tooltip title="Bookmark" placement="right" arrow >
          <Link href="" className={` items-center -mt-3 flex py-4 text-xl border-l-2 transition-colors duration-300 ${
      !Bookmark
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`}onClick={() => {setBookmark(!Bookmark),
            bookmark(Bookmark,Layer,Tool,Catalog,Element1,Element2,User,Setting)
          }} >
            <IoIosBookmarks className="ml-0.5 fill-slate-300" />
          </Link>
          </Tooltip>
        </div>
        <div className="absolute  bottom-20 ">
        <Tooltip title="User" placement="right" arrow >
        <Link href="" className={`items-center -mt-3 flex py-4 text-xl border-l-2 transition-colors duration-300 ${
      !User
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`}onClick={() => {setUser(!User),
            user(User,Layer,Tool,Catalog,Element1,Element2,Bookmark,Setting)
          }} > 
        <FaUser className="ml-0.5 fill-white" />
          </Link>
          </Tooltip>
        </div>
       
        <div className="absolute  bottom-4 mb-4 ">
        <Tooltip title="Settings" placement="right" arrow >
          <Link href="" className={`items-center -mt-3 flex py-4 text-xl border-l-2 transition-colors duration-300 ${
      !Setting
        ? 'border-blue-500'
        : 'border-transparent hover:border-blue-500'
    }`}onClick={() => {setSetting(!Setting),
            setting(Setting,Layer,Tool,Catalog,Element1,Element2,Bookmark,User)
          }} > 
            <AiOutlineSetting className="ml-0.5 fill-slate-300" />
          </Link>
          </Tooltip>
        </div>
      </div>
      <div>
      {!Layer &&( 
      <Panel />
      )}
      {!Tool &&(
        <Panel2  />
      )}
      {!Catalog &&(
       <Panel3 />
      )}
      {!Element1 &&(
        <Panel4 />
      )}
      {!Element2 &&(
        <Panel5 />
      )}
      {!Bookmark &&(
        <Panel6 />
      )}
      {!User &&(
        <Panel7 />
      )}
      {!Setting &&(
        <Panel8 />
      )}

      </div>
      

       </div>
    );
  }

