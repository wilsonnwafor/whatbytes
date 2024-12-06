import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="w-full h-1/6 flex items-center justify-between px-8 py-4 border-b border-gray-300 sticky top-0 bg-white z-40">
        <div>
          <h1 className="text-sm font-bold md:text-3xl">WhatBytes</h1>
        </div>
        <div className="border border-gray-300 flex items-center gap-2 rounded-lg p-1 md:p-2">
          <Image
            src="/globe.svg"
            width={30}
            height={30}
            alt="avatar"
            className="rounded-full"
          />
          <p>Rahil Siddique</p>
        </div>
      </div>
    </>
  );
}
