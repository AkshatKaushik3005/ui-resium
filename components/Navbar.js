import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaSearch, FaAngleDown } from "react-icons/fa";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
//       <div className="w-3/12 flex items-center">
//         <Link className="text-2xl font-semibold" href="/">
//           <Image
//             alt="Logo"
//             src={"/icon.png"}
//             className="object-contain"
//             width={50}
//             height={40}
//           />
//         </Link>
//         <h1 className="text-2xl text-sky-500 font-black">3D Viewer</h1>
//       </div>
//       <div className="flex align ">
//         <span></span>
//       </div>
//       <div className="w-9/12 flex justify-end items-center">
//         <div className="md:flex text-sky-400">
//           <Link className=" font-bold mr-2" href="/Dashboard">
//             Dashboard
//           </Link>
//           <Link className="font-bold ml-5" href="/Viewer">
//             Viewer
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter border-b-2 bg-white px-4 py-4 h-15  items-center">
      <Link className="flex items-center" href="/">
        <Image
          alt="Logo"
          src={"/icon.png"}
          className="object-contain"
          width={50}
          height={40}
        />
        <h1 className="font-sans text-3xl text-sky-500 font-bold">3D Viewer</h1>
      </Link>
      <button class=" h-19 w-auto mx-3 px-3 py-3 font-semibold text-sm border-2 border-slate-500 text-slate-500 rounded-full shadow-sm">
        <FaBars className="h-4  w-4 2x mx-auto items-center" />
      </button>
      <input
        type="search"
        class=" m-0  block w-120 min-w-0 rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon1"
      />
      <button class=" h-19 w-auto mx-3 px-3 py-3 font-semibold text-sm bg-indigo-600 text-white rounded-full shadow-sm">
        <FaSearch className="h-4  w-4 2x mx-auto items-center" />
      </button>
      {/* <div className="w-9/12 flex justify-end items-center"> */}
      <div className="ml-auto mr-5 text-sky-400">
        <Link className="font-bold mr-2" href="/Dashboard">
          Dashboard
        </Link>
        <Link className="font-bold ml-5" href="/Viewer">
          Viewer
        </Link>
      </div>
      <button class="flex rounded-full">
        <Image
          className="rounded-full item-center"
          alt="Avatar"
          src="/avatar5.png"
          width={50}
          height={40}
        />
        <FaAngleDown />
      </button>
      {/* </div> */}
    </nav>
  );
}
