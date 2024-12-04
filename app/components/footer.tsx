import React from "react";
import { SocialLinks } from "@/app/data/constants";

function Footer() {
  return (
    <footer
      className={`flex w-full flex-col bg-black bg-opacity-60 px-5 py-3 font-grotesk text-neutral-300 backdrop-blur-2xl`}
    >
      <div className={`flex flex-col gap-1 w-full text-left px-5 py-3`}>
        {SocialLinks.map((link) => (
          <a href={link.link} key={link.id}>
            <p className={`text-[14px] sm:text-[16px] text-neutral-400`}>{link.name}</p>
          </a>
        ))}
      </div>
      <p className={`text-[16px] self-center text-center glow font-helvetica  mt-[20px]`}>Designed By 3illBaby</p>
    </footer>
  );
}

export default Footer;