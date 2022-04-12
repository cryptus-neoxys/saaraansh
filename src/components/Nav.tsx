import React from "react";
import Link from "next/link";

export const Nav = () => {
  return (
    <div className="md:flex-row flex flex-col items-center justify-between p-3 px-10">
      <div className="text-5xl font-bold text-red-500 uppercase">
        <Link href="/">
          <div className="text-4xl text-red-500">Saaraansh</div>
        </Link>
      </div>
      <div className="flex flex-row">
        <Link href="/">
          <div className="hover:bg-red-500 hover:text-white hover:border-white flex flex-row items-center justify-center px-6 py-2 m-2 text-center border-2 border-black rounded-lg cursor-pointer">
            HOME
          </div>
        </Link>
        <Link href="/tool">
          <div className="hover:bg-red-500 hover:text-white hover:border-white flex flex-row items-center justify-center px-6 py-2 m-2 text-center border-2 border-black rounded-lg cursor-pointer">
            TOOL
          </div>
        </Link>
      </div>
    </div>
  );
};
