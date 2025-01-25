"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";
const NavBar = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex justify-start gap-72 items-center p-2 bg-navBar opacity-100 text-white ">
        <div className="text-left">
          <div className="flex items-center">
            <img
              src="/images/Logo.png"
              alt="/images/Logo.png"
              className="h-16 w-16"
            />
            Ambedkar in Europe
          </div>
        </div>
        <div className="flex justify-center gap-16 items-center cursor-pointer">
          <div onClick={() => router.push("/")}>Home</div>
          <div onClick={() => router.push("/events")}>Key Events</div>
          <div onClick={() => router.push("/about")}>About</div>
          <div onClick={() => router.push("/literature")}>Literature</div>
          <div onClick={() => router.push("/publications")}>Publications</div>
        </div>
        <div>
          <CiSearch />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
