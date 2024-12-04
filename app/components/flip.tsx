import React from "react";
import { FlipWords } from "@/app/components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["mentor", "cto", "developer"];

  return (
    <div className="flex items-center justify-center px-4">
      <div className="overflow-y-hidden font-helvetica text-[40px] font-light capitalize text-neutral-300 sm:text-[48px]">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}