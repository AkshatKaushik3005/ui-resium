import React from "react";
import Link from "next/link";
import Navbar from "@/components/Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import Sidebar from "@/components/Sidebar2.js";
import { useState } from "react";
const Cesium = dynamic(() => import("../components/Cesium"), { ssr: false });

export default function index() {
  const [second, setSecond] = useState(true);
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      </Head>

      <Navbar second={second} setSecond={setSecond} />

      <div className="flex">
        {second ? <Sidebar /> : null}
        <div className="grow">
          <Cesium />
        </div>
      </div>
    </div>
  );
}
