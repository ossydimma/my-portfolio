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
      <main className="pt-14   ">
        <section className=" flex flex-col mb-10 mx-4 sm:mx-[10%]   items-center">
          <h1
            className={`heading-txt  uppercase font-[700] text-[#0a0a0a]  text-3xl md:text-6xl   dark:text-[#fff] `}
          >
            about&nbsp;me
          </h1>
          <div className=" text-center mt-2">
            <h3
              className={` font-semibold  uppercase pb-5 text-[#000] text-xl md:text-3xl   xl:text-4xl dark:text-white`}
            >
              I am Osita Jerry, a&nbsp;front-&nbsp;end&nbsp;developer. <br />{" "}
              Has a bussiness management Background.
            </h3>
            <p
              className={` sm:-mx-[6%] text-[#222] text-lg tracking-wide pb-5   md:text-2xl lg:text-3xl md:tracking-wider dark:text-[#c7c7c7] `}
            >
              I am front-end developer that love the challenge of solving
              complex problems and creating beautiful, functional websites.
              Committed to continuous learning, I aspire to leverage my
              competencies in this feild to eventually build my career.
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
