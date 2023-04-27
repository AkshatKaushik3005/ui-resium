import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function index() {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
