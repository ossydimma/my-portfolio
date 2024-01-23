import Image from "next/image";
import pic from "@/app/assets/pic.png"
import { Manrope} from "next/font/google";
import { Medias } from "./Medias";
import { Button } from "./Button";

const manrope = Manrope({ subsets: ["latin"], weight: "700" });


export const Hero = () => {
  return (
    <>
      <div className=" px-[4%] lg:px-[40px] mb-8  mt-[12vh] h-auto flex flex-col justify-between gap-10  items-center py-10 sm:gap-16 sm:mx-[50px] md:mx-[60px]  lg:py-0 lg:flex-row lg:h-[88vh] lg:gap-5 ">
        {/* <----------------------- LEFT SECTION -----------------------------> */}
        <section className=" w-[90%]   lg:w-[480px] xl:w-[544px] ">
          {/* <----------------------- TEXTS-----------------------------> */}
          <div className="text-center sm:text-left">
            <h1
              className={` uppercase font-[400] text-[40px]  leading-[42px]  text-[#0a0a0a]  sm:text-[57px] sm:leading-[58px] md:text-[65px] md:leading-[65px] xl:text-[90px] xl:leading-[90px] dark:text-[#fff] `}
            >
              hi, i am <br />{" "}
              <span className="heading-txt ">osita&nbsp;jerry</span>
            </h1>
            <p
              className={`font-[400] text-[15px] text-[#000] dark:text-[#c7c7c7] pb-[40px] xl:text-lg  ${manrope.className}`}
            >
              A skilled and creative frontend developer with years of experience in web development, who is passionate about building responsive
              and user friendly websites.
            </p>
          </div>

          {/* <-----------------------  CONTACT ME -----------------------------> */}
          <div className=" w-auto h-auto flex  flex-row-reverse justify-center gap-2 -4 mx-0 sm:justify-end sm:gap  lg:w-[80%] sm:gap-3 ">
            <Button 
              href="/Resume.pdf" 
              text="view Resume" 
              styles= "uppercase bg-gradient-to-l from-[#8F00FF]  to-black rounded-tr-none rounded-[200px]  border-[2px] border-[#222]  dark:border-[#c7c7c7] " 
            />
            <Medias />
          </div>
        </section>

        {/* <----------------------- RIGHT SECTION -----------------------------> */}
        <section className=" mx-[]">
          {/* <div className="relative h-[420px] w-[70vw] sm:h-[520px]  md:w-[360px]  ">
            <Image
              src={Mypic}
              alt=" my picture"
              layout="fill"
              objectFit="fill"
              className=" w-[100%] h-[100%] rounded-lg"
            ></Image>
          </div> */}
          <Image src={pic} alt="pic" width={367} height={367} priority />
        </section>
      </div>
    </>
  );
};
