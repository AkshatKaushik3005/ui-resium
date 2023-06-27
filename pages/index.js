import React from "react";
import Link from "next/link";
//import Navbar from "@/components/Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar2.js";
import { useState } from "react";
import { Fullscreen } from "../public/cesium";

const Cesium = dynamic(() => import("../components/Cesium"), { ssr: false });

export default function index() {
const [second, setSecond] = useState(true);
 // const [First, SetFirst] = useState(true);
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
       
        {/* <link rel="stylesheet" href="css/sidebar.css" /> */}
      </Head>
        {/* <Navbar second={second} setSecond={setSecond}  /> */}
      
    
        {/* <div className="flex">
        {
          second?
          <Sidebar /> :null}
        <div className={`h-screen transition-width duration-300 ${
      !second
        ? 'relative w-80'
        : 'w-screen'
    }`}>
          <Cesium />
        </div>
        </div> */}
        <div className="flex h-screen w-screen">
          <Sidebar />
          <Cesium />
        </div>
        
      
    </div>
  );
};
