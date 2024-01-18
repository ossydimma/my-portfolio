import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
// import { ThemeColor } from "../layout";
import { Manrope, Bebas_Neue, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import SneakerImg from "@/app/assets/sneaker_img.jpg";
import calcuImg from "@/app/assets/calculator_img.png";
import spaceImg from "@/app/assets/space_img.png";
import toDoImg from "https://i.postimg.cc/sD6QLyMh/new-To-Do-img.png";
// import data from '../projects.json'

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"], weight: "700" });
const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });
// interface dataType {
//   id: string;
//   image: string;
//   name: string;
//   descri: string;
//   stack: string;
//   year: string;
//   role: string;
//   codeLink: string;
//   webLink: string;
// }

export const Works = () => {
  const data = [
    {
      id: "1",
      image: 'https://i.postimg.cc/FHp1KrTT/space-img.png',
      name: "Space Tourism",
      descri:
        "This website was inspirated by frontend mentor, This website showcase the benefits of using TypeScript in modern web developments, how it improves code quality and make it easier to maintain and scale large projects",
      stack: "React + Typescript + Sass",
      year: "2023",
      role: "Front-end Developer",
      codeLink: "https://github.com/ossydimma/space-tourism",
      webLink: "https://space-tourism-rebuild.vercel.app/",
    },
    {
      id: "2",
      image: 'https://i.postimg.cc/VLDcrJc0/sneaker-img.jpg',
      name: "E-commerce product page",
      descri:
        "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      stack: "React + Typescript + Sass",
      year: "2023",
      role: "Front-end Developer",
      codeLink: "https://github.com/ossydimma/sneakers-store",
      webLink: "https://e-commerce-sneaker-store.vercel.app/",
    },
    {
      id: "3",
      image: 'https://i.postimg.cc/nhgrmjGh/new-To-Do-img1.png',
      name: "To do list",
      descri:
        "Built a to-do-list that helps users enter editable tasks, allowing user to edit and delete tasks, and uses localStorage to store tasks which helps to save and display the tasks even when the page is reloaded. It is very convenient for users to not have to worry about losing their tasks due to a page refresh.",
      stack: "HTML + CSS + JavaScript",
      year: "2022",
      role: "Front-end Developer",
      codeLink: "https://github.com/ossydimma/toDoList2",
      webLink: "https://to-do-bay-two.vercel.app/",
    },
    {
      id: "4",
      image: 'https://i.postimg.cc/90PCNbSL/calculator-img.png',
      name: "Basic Calculator",
      descri:
        "This was one of the first projects I built, it helped improve my HTML and CSS skills, mastering the concepts of flexBox and Grid, which help in creating flexible and responsive web layouts",
      stack: "HTML + CSS + JavaScript",
      year: "2022",
      role: "Front-end Developer",
      codeLink: "https://github.com/ossydimma/basic_calculator",
      webLink: "https://basic-calculator-wine.vercel.app",
    },
  ];

  return (
    <main className="border-y-2 border-[#484848] h-auto w-full">
      <div className="px-[4%] lg:px-[40px]   mt-16 mb-5 w-[100%] ">
        <header className={`text-center  mb-20 ${SpaceGrotesk.className}`}>
          <h1
            className={`${SpaceGrotesk.className} uppercase text-[30px] heading-txt font-[400] text-[#0a0a0a] dark:text-white md:text-[35px] lg:text-[65px]`}
          >
            Featured Projects
          </h1>
          <p
            className={` text-[#222]   -mt-2 font-medium text-sm md:text-xl dark:text-[#c7c7c7]`}
          >
            Here are some of the selected projects that showcase my passion for
            front-end <br /> development.
          </p>
        </header>
        <div>
          {data.map((obj) => (
            <section
              className={`   pb-[120px]  flex flex-col  items-center justify-center  gap-14 lg:flex-row xl:gap-[120px] `}
              key={obj.id}
            >
              <div
                className={`w-[98%] px-[2%] py-12   rounded-xl bg-[#1A1A1A] flex justify-center items-center sm:w-[96%] sm:px-[7%] sm:py-16 lg:px-6  lg:py-20 lg:w-auto`}
              >
                <Image
                  width={400}
                  height={500}
                  src={obj.image}
                  alt=" seakers"
                 
                  className=" border-black  border-2 w-[75%]   rounded-xl "
                />
              </div>
              <article
                className={`w-[96%]    text-[#222] dark:text-[#c7c7c7] flex flex-col gap-1 ] lg:w-[38%] ${SpaceGrotesk.className}`}
              >
                <h3
                  className={`text-2xl   heading-txt text-[#000] lg:text-xl xl:text-3xl dark:text-white ${bebasNeue.className} `}
                >
                  {obj.name}
                </h3>
                <p
                  className={`text-[16px] lg:text-sm xl:leading-[22px]  xl:text-[16px] ${manrope.className}`}
                >
                  {obj.descri}
                </p>
                <ul className={`text-[16px] lg:text-sm xl:leading-4 xl:text-[18px] `}>
                  <li className=" uppercase proj-info text-xl -ml-2 text-[#8F00FF] lg:px-4 xl:px-2 ">
                    Project Info
                  </li>
                  <li className="proj-info flex justify-between">
                    {" "}
                    <span>Tech Stack</span> <span>{obj.stack}</span>
                  </li>
                  <li className="proj-info flex justify-between">
                    {" "}
                    <span>Year</span> <span>{obj.year}</span>
                  </li>
                  <li className="proj-info flex justify-between">
                    {" "}
                    <span>Role</span> <span>{obj.role}</span>
                  </li>
                </ul>
                <div className=" flex mt-2 gap-4 text-xs  text-right text-[#000] md:gap-6 sm:text-sm xl:leading-6 xl:text-[18px] dark:text-white ">
                  <a href={obj.codeLink} className="flex items-center gap-1">
                    <span className=" hover:opacity-75 hover:scale-90 transition-all duration-500">
                      view code
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.0282 2.16669C7.06011 2.16669 2.22302 7.00377 2.22302 12.9719C2.22302 17.745 5.31811 21.7956 9.61244 23.2256C10.153 23.3231 10.348 22.9905 10.348 22.7045C10.348 22.4478 10.3394 21.7674 10.3361 20.8672C7.32986 21.5194 6.69502 19.4177 6.69502 19.4177C6.20536 18.1697 5.49577 17.8371 5.49577 17.8371C4.51536 17.1665 5.57052 17.1817 5.57052 17.1817C6.65602 17.2575 7.22477 18.2954 7.22477 18.2954C8.18894 19.9464 9.75544 19.4697 10.3686 19.1934C10.4672 18.4947 10.7489 18.018 11.0565 17.7483C8.65802 17.4764 6.13602 16.549 6.13602 12.4074C6.13602 11.2299 6.55744 10.2635 7.24536 9.50952C7.13594 9.23544 6.76219 8.13586 7.35261 6.64952C7.35261 6.64952 8.25936 6.3581 10.3231 7.75561C11.2045 7.51583 12.1137 7.39344 13.0271 7.3916C13.9406 7.39309 14.8498 7.51548 15.7311 7.75561C17.7959 6.35702 18.7016 6.64952 18.7016 6.64952C19.292 8.13586 18.9215 9.23544 18.8089 9.50952C19.5022 10.2635 19.9182 11.2288 19.9182 12.4074C19.9182 16.5599 17.394 17.472 14.9869 17.7396C15.3714 18.0733 15.7181 18.7319 15.7181 19.7394C15.7181 21.1846 15.7051 22.3503 15.7051 22.7045C15.7051 22.9938 15.8979 23.3296 16.4494 23.2234C20.7415 21.7913 23.8334 17.7439 23.8334 12.9719C23.8334 7.00377 18.9963 2.16669 13.0282 2.16669Z"
                        fill="#00FDEE"
                      />
                    </svg>
                  </a>
                  <a href={obj.webLink} className=" flex items-center gap-0.5">
                    <span className=" hover:opacity-75 hover:scale-90 transition-all duration-500">
                      view site
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_7_166)">
                        <path
                          d="M5.9897 19.2175L16.3036 8.90363V16.3891L18.3033 16.3891L18.3033 5.48972L7.40391 5.48972L7.40391 7.48942L14.8893 7.48942L4.57549 17.8033L5.9897 19.2175Z"
                          fill="#8F00FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_166">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <h4></h4>
              </article>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};
