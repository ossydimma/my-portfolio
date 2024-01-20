import Link from "next/link";
import { Manrope, Space_Grotesk, Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });
const manrope = Manrope({ subsets: ["latin"], weight: "700" });

// import Resume from '../data/Resume.pdf'
export const Connect = () => {
  return (
    <main className=" mx-4 sm:mx-9 pt-10 ">
      <h1
        className={` heading-txt  uppercase font-[400] text-[45px] text-center  leading-[42px]  text-[#0a0a0a]  sm:text-[50px] sm:leading-[58px] md:text-[50px] md:leading-[65px] xl:text-[80px] xl:leading-[90px] dark:text-[#fff] ${SpaceGrotesk.className}`}
      >
        let&apos;s connect
      </h1>

      <div className=" w-[100%] flex flex-col-reverse gap-[75px]   mt-20 lg:flex-row-reverse  lg-gap-0">
        <div className=" w-[100%]  text-white flex flex-col-reverse  sm:flex-col  lg:w-[43%] ">
          <div className="  ">
            <p
              className={`   font-semibold  uppercase text-lg text-[#000] sm:text-xl   md:text-lg    dark:text-white ${SpaceGrotesk.className}`}
            >
              For more info:
            </p>
            <section className=" w-[100%] lg:w-[85%]  flex flex-col  gap-2 items-start sm:items-end rounded-[70px] rounded-tr-[250px] rounded-tl-none rounded-b-none sm:bg-slate-600 bg-transparent ">
              <a
                href="mailto:chrisjerry070@gmail.com"
                className="  w-[290px] flex items-center gap-3 mr-7  py-4 px-7 bg-gradient-to-l from-[#00FDEE] to-black   rounded-tl-none rounded-br-none rounded-[120px]"
              >
                <div className=" w-3 h-3 bg-black border-2   border-white rounded-full  md:w-4 md:h-4 "></div>
                <span className={`${SpaceGrotesk.className} text-shadow `}>
                  chrisjerry070@gmail.com
                </span>
              </a>
              <a
                href="/Resume.pdf"
                download
                className=" flex w-[190px]   items-center gap-3  uppercase bg-gradient-to-l from-[#8F00FF] to-black shadow-3xl  py-4 px-7 rounded-tl-none rounded-br-none rounded-[120px]"
              >
                <div className=" w-3 h-3 bg-black border-2  border-white rounded-full  md:w-4 md:h-4 "></div>
                <span className={`${SpaceGrotesk.className} text-shadow`}>
                  view Resume
                </span>
              </a>
              <div className=" flex gap-5 mr-0 ml-5 sm:ml-0 sm:mr-[10px]">
                <div className=" icon bg-[#222] h-[54px] w-[54px] cursor-pointer rounded-full flex justify-center items-center ">
                  <a href="https://www.linkedin.com/in/osita-jerry-a87102254/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z"
                        fill="#00FDEE"
                      />
                      <path
                        d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z"
                        fill="#00FDEE"
                      />
                    </svg>
                  </a>
                </div>

                <div className=" icon bg-[#222] h-[54px] w-[54px] cursor-pointer  rounded-full flex justify-center items-center ">
                  <a href="https://github.com/ossydimma">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.0282 2.16675C7.06008 2.16675 2.223 7.00383 2.223 12.9719C2.223 17.7451 5.31808 21.7957 9.61242 23.2257C10.153 23.3232 10.348 22.9906 10.348 22.7046C10.348 22.4478 10.3393 21.7675 10.3361 20.8673C7.32983 21.5194 6.695 19.4178 6.695 19.4178C6.20533 18.1698 5.49575 17.8372 5.49575 17.8372C4.51533 17.1666 5.5705 17.1818 5.5705 17.1818C6.656 17.2576 7.22475 18.2954 7.22475 18.2954C8.18892 19.9464 9.75542 19.4698 10.3686 19.1935C10.4672 18.4948 10.7488 18.0181 11.0565 17.7483C8.658 17.4764 6.136 16.5491 6.136 12.4075C6.136 11.2299 6.55742 10.2636 7.24533 9.50958C7.13592 9.2355 6.76217 8.13592 7.35258 6.64958C7.35258 6.64958 8.25933 6.35817 10.3231 7.75567C11.2045 7.51589 12.1137 7.3935 13.0271 7.39167C13.9405 7.39315 14.8498 7.51554 15.7311 7.75567C17.7959 6.35708 18.7016 6.64958 18.7016 6.64958C19.292 8.13592 18.9215 9.2355 18.8088 9.50958C19.5022 10.2636 19.9182 11.2288 19.9182 12.4075C19.9182 16.5599 17.394 17.4721 14.9868 17.7397C15.3714 18.0733 15.7181 18.732 15.7181 19.7395C15.7181 21.1847 15.7051 22.3503 15.7051 22.7046C15.7051 22.9938 15.8979 23.3297 16.4493 23.2235C20.7415 21.7913 23.8333 17.744 23.8333 12.9719C23.8333 7.00383 18.9963 2.16675 13.0282 2.16675Z"
                        fill="#00FDEE"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className=" w-auto lg:w-[85%] flex flex-col gap-[65px]">
            <p
              className={`  py-4 px-0 sm:px-4 lg:px-8 bg-transparent sm:bg-gradient-to-l from-[#8F00FF] to-black     text-lg tracking-wide   md:leading-6  md:text-xl text-[#c7c7c7]  ${SpaceGrotesk.className}`}
            >
              I am open to remote and onsite full-&nbsp;time, part-time, and
              contract frontend web development jobs.
            </p>
            
          </div>
         
        </div>
        <form className=" w-[100%]  flex flex-col  gap-6 lg:w-[50%] ">
          <input
            type="text"
            className=" w-[100%] p-6 lg:w-[80%] ] lg:p-5 border-[#222] border-[3px] dark:border-[#c7c7c7] bg-transparent outline-none dark:text-gray-200"
            placeholder="NAME"
          />
          <input
            type="email"
            className="  w-[100%] p-6 lg:w-[80%] ] lg:p-5 border-[#222] dark:border-[#c7c7c7] border-[3px] bg-transparent outline-none dark:text-gray-200"
            placeholder="EMAIL"
          />
          <textarea
            placeholder="MESSAGE"
            className=" w-[100%] p-6 lg:w-[80%] ] lg:p-5 h-40 border-[#222] border-[3px] dark:border-[#c7c7c7] bg-transparent outline-none dark:text-gray-200"
          ></textarea>
          <button
            type="submit"
            className={` uppercase shadow-2xl border-[3px] border-[#222] dark:border-[#c7c7c7]  font-bold bg-gradient-to-l from-[#00FDEE] to-black p-4 pl-10 rounded-tl-none   rounded-[200px]  text-white  flex items-center gap-3 text-[16px]  w-[150px] ${SpaceGrotesk.className}}`}
          >
            SUBMIT
          </button>
        </form>
      </div>
     
        <p
          className={`text-center mt-10 mb-5 text-sm text-[#000] dark:text-[#c7c7c7] ${SpaceGrotesk.className}`}
        >
          © 2024 Osita jerry  Designed and built by{" "}
          <span className=" text-[#00FDEE] text-lg">Osita</span> with{" "}
          <span className=" heading-txt text-lg">Love</span> &{" "}
          <span className=" heading-txt text-lg">Coffee</span>.
        </p>

      
    </main>
  );
};
