import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link href="/">
        <h1
          className="text-red-600 text-4xl font-bod cursor-pointer upp
            "
        >
          Netflix
        </h1>
      </Link>
      <div className="text-2xl">
        <Link href="/login">
          <button className="text-white pr-4">Log In</button>
        </Link>
        <Link href="/signup">
          <button className="g-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
