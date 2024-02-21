import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className=" shadow-lg flex  flex-col  pb-4 h-[200px] items-center bg-gray-100">
      <div className="flex items-center justify-center   ">
        <Image
          src="/logo.png"
          height={300}
          width={300}
          alt="logo"
          className="max-h-28 max-w-28"
        />
        <Image src="/diaf.png" alt="diaf" width={180} height={180} />
      </div>
      <h1 className=" leading-5 text-xl mb-2 font-semibold">
        A.I Assistant for the Guests of Allah{" "}
      </h1>
      <div className=" flex items-center gap-2 mt-3 ">
        <button className="bg-[#E6EFEA] rounded-lg py-2  px-3 text-green-800 font-semibold">
          English
        </button>
        <button className="bg-[#E6EFEA] rounded-lg py-2 px-3 text-green-800 font-semibold">
          Arabic
        </button>
      </div>
    </div>
  );
}
