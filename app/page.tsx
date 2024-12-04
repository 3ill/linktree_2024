"use client";

import React from "react";
import Image from "next/image";
import { logo } from "@/app/assets";
import { motion } from "framer-motion";
import { slideIn, softVariant, staggerContainer } from "@/app/utils/motion";
import { FlipWordsDemo } from "@/app/components/flip";
import { SocialLinks } from "@/app/data/constants";
import Footer from "@/app/components/footer";

function Page() {
  return (
    <motion.section
      variants={staggerContainer(0.1, 0.1)}
      initial={`hidden`}
      whileInView={`show`}
      viewport={{ once: false, amount: 0.75 }}
      className={`flex w-full flex-col`}
    >
      {/*Nav Section*/}
      <div className={`flex w-full flex-col items-center px-5`}>
        <motion.nav
          variants={softVariant}
          initial={`hidden`}
          whileInView={`show`}
          className={`mt-1 flex w-fit items-center rounded-full bg-black bg-opacity-60 px-2 py-2 backdrop-blur-2xl`}
        >
          <Image
            src={logo}
            alt={`logo`}
            className={`h-[50px] w-[50px] object-contain sm:h-[80px] sm:w-[80px]`}
          />
        </motion.nav>
      </div>

      {/*Hero Section*/}
      <div className={`mt-[50px] flex w-full flex-col items-center px-5`}>
        <FlipWordsDemo />
        <p
          className={`glow font-grotesk text-[18px] font-light text-neutral-300 outline-2 outline-neutral-100 sm:text-[24px]`}
        >
          Don&apos;t compete, Collaborate
        </p>
      </div>

      <section className={`mt-[100px] flex w-full flex-col items-center gap-5`}>
        {SocialLinks.map((link) => (
          <motion.a
            variants={slideIn("left", "tween", link.id * 0.25, 0.75)}
            initial={`hidden`}
            whileInView={`show`}
            href={link.link}
            target={"_blank"}
            key={link.id}
            className={`hover:scale-110 flex w-[300px] flex-row items-center justify-between rounded-[20px] bg-black bg-opacity-60 px-5 py-3 backdrop-blur-2xl transition-all duration-200 active:scale-100`}
          >
            <p
              className={`font-grotesk text-[16px] font-light text-white outline-2 outline-neutral-100 sm:text-[18px]`}
            >
              {link.name}
            </p>
            <div>{link.image}</div>
          </motion.a>
        ))}
      </section>

      <section className={`mt-[250px] flex w-full`}>
        <Footer />
      </section>
    </motion.section>
  );
}

export default Page;