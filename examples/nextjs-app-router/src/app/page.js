import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center bg-gray-800 h-screen w-screen">
      <h1 className="text-2xl font-bold text-white flex gap-3 items-center">
        <Image
          src="https://survser.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon.a24c4287.png&w=64&q=75"
          width={45}
          height={45}
        />
        Survser NextJS
      </h1>
    </div>
  );
}
