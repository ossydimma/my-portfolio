import { About } from "./components/About";
import { Connect } from "./components/Connect";
import { Hero } from "./components/Hero";
import { Slider } from "./components/Swiper";
import { Works } from "./components/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Works />
      <About
        text="more about me"
        href="/about"
        medias=""
        styles=""
        stack={
          <div className=" flex flex-col justify-center items-center mb-[120px]">
            <h3
              className={`pb-3 font-semibold heading-txt uppercase   text-[#000] text-2xl  md:text-3xl   xl:text-5xl dark:text-white`}
            >
              Stack
            </h3>
            <p className="mb-24 text-xl md:text-3xl text-center font-semibold dark:text-white ">
              {" "}
              Technologies I’ve been working with recently.
            </p>
            <Slider />
          </div>
        }
      />
      <Connect />
    </main>
  );
}
