import Link from "next/link";
import { ReactNode } from "react";
import { Slider } from "./Swiper";

interface btnType {
  text: string;
  href: string;
  medias: string | ReactNode;
  stack?: string | ReactNode;
  styles: string;
}

export const About = ({ text, href, medias, stack, styles }: btnType) => {
  return (
    <>
      <main className="pt-[4rem]   ">
        <section className=" flex flex-col mb-10 mx-4 sm:mx-[10%]   items-center">
          <h1
            className={`heading-txt  uppercase font-[700] text-[#0a0a0a]  text-3xl md:text-6xl   dark:text-[#fff] `}
          >
            about&nbsp;me
          </h1>
          <div className=" text-center mt-4">
            <p
              className={` sm:-mx-[6%] text-[#222] text-lg tracking-wide pb-5  md:text-2xl lg:text-[1.6rem] dark:text-[#c7c7c7] `}
            >
              Hi, I'm Osita Jerry — a full-stack web developer with a solid
              foundation in business management and a passion for building
              functional, scalable, and user-centered web applications. I
              specialize in creating modern, responsive, and secure solutions
              using React, Next.js, Tailwind CSS, and ASP.NET Core Web API. I
              enjoy solving complex problems and bringing ideas to life through
              clean, efficient code. Whether I'm working with startups,
              collaborating in teams, or developing personal projects, I focus
              on delivering meaningful digital experiences that make an impact.
            </p>
          </div>
        </section>

        {stack}

        {/* <----------------------------| LINKS |---------------------------> */}
        <div
          className={`mb-12 lg:mb-[70px] flex items-end gap-5 justify-end mr-[5%] ${styles}   `}
        >
          <Link
            href={href}
            className={` px-8 py-4  uppercase shadow-2xl font-bold bg-gradient-to-l from-[#8F00FF] to-black   rounded-tl-none rounded-br-none  rounded-[200px]  text-white  flex items-center gap-3 border-[2px] border-[#222]  dark:border-[#c7c7c7] text-[16px] hover:scale-90 transition-all duration-300  }`}
          >
            {text}
          </Link>
          {medias}
        </div>
      </main>
    </>
  );
};
