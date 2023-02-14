import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

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
      {user?.email ? (
        <div className="text-2xl">
          <Link href="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-white hover:text-red-600 ease-in duration-150"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="text-2xl">
          <Link href="/login">
            <button className="text-white pr-4">Log In</button>
          </Link>
          <Link href="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white hover:bg-white hover:text-red-600 ease-in duration-150">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
