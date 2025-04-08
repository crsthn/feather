import BaseUI from "@/components/icons/base-ui.";
import Motion from "@/components/icons/motion";
import React from "@/components/icons/react";
import TailwindCSS from "@/components/icons/tailwind";
import { buttonStyles } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-surface to-bg">
      <div className="mx-auto my-20 flex max-w-7xl flex-col items-center justify-center px-6">
        <h1 className="mb-4 max-w-3xl text-balance text-center font-bold text-4xl sm:text-5xl md:text-6xl">
          Build interfaces with modern components
        </h1>
        <span className="mb-8 max-w-xl text-center text-lg text-text-2 ">
          A professional UI component suite that helps developers build
          accessible, consistent, and beautiful interfaces faster.
        </span>
        <Link
          href="/docs/ui"
          className={buttonStyles({ size: "lg", className: "group mb-8" })}
        >
          Get Started
          <svg
            viewBox="0 0 24 24"
            className="size-5 shrink-0 fill-none stroke-2 stroke-current transition-opacity duration-200 ease-in-out"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              className="translate-x-3.5 scale-x-0 transition-transform duration-200 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100"
            />
            <polyline
              points="12 5 19 12 12 19"
              className="-translate-x-1 transition-transform duration-200 ease-in-out group-hover:translate-x-0"
            />
          </svg>
        </Link>
        <div className="flex gap-6 font-medium text-text-3 text-xs sm:gap-4">
          <span className="flex items-center gap-2">
            <React className="size-8 fill-text-3" />
            <span className="hidden sm:inline">REACT</span>
          </span>
          <span className="flex items-center gap-2">
            <TailwindCSS className="size-8 fill-text-3" />
            <span className="hidden sm:inline">TAILWIND CSS</span>
          </span>
          <span className="flex items-center gap-2">
            <Motion className="size-8 fill-text-3" />
            <span className="hidden sm:inline">MOTION</span>
          </span>
          <span className="flex items-center gap-2">
            <BaseUI className="size-8 fill-text-3" />
            <span className="hidden sm:inline">BASE UI</span>
          </span>
        </div>
      </div>
    </section>
  );
}
