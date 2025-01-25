import React from "react";
import Image from "next/image";
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex justify-between bg-blue-800 w-full py-5 px-10">
      <div>
        <Image
          src="/images/Logo.png"
          width={150}
          height={150}
          alt="/images/Logo.png"
        />
      </div>
      <div className="flex flex-col justify-evenly">
        <div>The Presidency</div>
        <div>Issues & policy</div>
        <div>Experts</div>
        <div>Events</div>
        <div>Donate</div>
        <div>UVA Democracy Biennial</div>
      </div>
      <div className="flex flex-col justify-evenly">
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Ambedkar in Europe Foundation</div>
        <div>Privacy Policy</div>
        <div>
          Notice of Non-Discrimination and <br /> Equal Opportuinity
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>HELP INFORM THE DISCUSSION</div>
        <div className="border-2 border-blue-200 rounded-xl px-2 py-1">
          <button>Support the Ambedkar in Europe</button>
        </div>
        <div className="flex gap-2">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
