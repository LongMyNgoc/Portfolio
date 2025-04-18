"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src="/assets/Long.png"
      alt="Avatar"
      width={160}
      height={160}
      className="rounded-full border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
      priority
    />
  );
};

export default Avatar;
