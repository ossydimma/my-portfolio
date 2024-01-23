"use client";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ToggleSwitch } from "./ToggleSwitch";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

interface themeType {
    theme: "" | "dark";
    setTheme: React.Dispatch<React.SetStateAction<"" | "dark">>
}

export const NavBar = ({ theme, setTheme }: themeType) => {
    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(true);
    const [isToggled, setIsToggled] = useState(true);
    




    useEffect(() => {
        localStorage.currentTheme === null
            ? localStorage.setItem("currentTheme", "dark")
            : "";
        if (localStorage.currentTheme === "dark") {
            setTheme("dark");
            setIsToggled(true);
        } else {
            setTheme("");
            setIsToggled(false);
        }


        window.innerWidth > 860 ? setShowMenu(true) : setShowMenu(false);;

        window.addEventListener("resize", () => {
            window.innerWidth > 860 ? setShowMenu(true) : setShowMenu(false);
        });
    }, []);
    return (
        <div>
            <nav className={`fixed  top-0 w-[100%] border-b-2 border-[#484848] bg-white z-10 ${theme} `}>
                <header
                    className={
                        " relative flex items-center justify-between h-[8vh] sm:h-[12vh]  pt-4 pb-4  mx-4 sm:pt-6   sm:mx-7 xl:mx-[80px] text-[--light-primary-color] dark:text-[--dark-primary-color]"}
                >
                    <h2
                        className={` text-2xl font-medium sm:text-4xl heading-txt  `}
                    >
                        OSITA JERRY
                    </h2>
                    

                    {/* <--------------------------------  MENU  ------------------------------> */}
                    <div className=" flex gap-6 items-center justify-evenly">
                        {/* <------------------- HAMBURGER MENU ICON ------------------> */}
                        {(
                            <svg
                                viewBox="0 -0.5 25 25"
                                width={55}
                                height={55}
                                className={" cursor-pointer  w-10 visible lg:hidden sm:w-16 fill-[--light-primary-color] dark:fill-[--dark-primary-color]"}
                                onClick={() => setShowMenu(!showMenu)}
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"></path>{" "}
                                </g>
                            </svg>
                            
                        )}
                        
                           

                        {showMenu && (
                            <ul
                                className={
                                    clsx(` ${bebasNeue.className} h-[450px] w-40 pb-20 px-3 flex flex-col font-medium text-[16px] mt-1 z-20 gap-[32px] text-[#c7c7c7] dark:text-[#0a0a0a] bg-[#0a0a0a] dark:bg-[#fff] absolute right-[-16px] top-0 fill-[#0a0a0a] sm:right-[-28px] lg:flex-row lg:static lg:bg-[inherit] lg:h-6 lg:w-auto lg:pb-0 lg:pl-0 lg:pr-16 dark:lg:bg-[inherit] dark:lg:text-[#c7c7c7] lg:text-[#0a0a0a]`, {
                                        ' dark:lg:text-[#c7c7c7] dark:lg:fill-[#c7c7c7] ': theme !== 'dark'
                                    })
                                }
                            >
                                {/* <----------------- CANCEL ICON ------------------> */}

                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="80px"
                                        height="30"
                                        viewBox="0 0 16 16"
                                        fill="#fff"
                                        className="-ml-9 mt-10  bg-[#00FDEE] visible lg:hidden cursor-pointer"
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        <path
                                            d="M9.89324 3.45816L7.51247 5.92536L5.04527 3.54459C4.74253 3.25245 4.26009 3.26105 3.96795 3.56379L3.43889 4.11206C3.14675 4.4148 3.15535 4.89724 3.45809 5.18938L5.92529 7.57015L3.54452 10.0373C3.25238 10.3401 3.26098 10.8225 3.56372 11.1147L4.11199 11.6437C4.41473 11.9359 4.89717 11.9273 5.18931 11.6245L7.57008 9.15733L10.0373 11.5381C10.34 11.8302 10.8225 11.8216 11.1146 11.5189L11.6437 10.9706C11.9358 10.6679 11.9272 10.1854 11.6245 9.8933L9.15726 7.51253L11.538 5.04534C11.8302 4.7426 11.8216 4.26016 11.5188 3.96802L10.9706 3.43896C10.6678 3.14682 10.1854 3.15542 9.89324 3.45816Z"


                                        />
                                    </svg>
                                </li>
                                <li
                                    className={` border-b-2 border-[#c7c7c7] hover:border-[#8F00FE] lg:border-b-0  lg:hover:border-[#8F00FE] lg:hover:border-b-2 `}
                                >
                                    <Link
                                        href="/"
                                        className={pathname === "/" ? "text-[#8F00FF] " : ""}
                                    >
                                        {" "}
                                        Home{" "}
                                    </Link>
                                </li>
                                <li
                                    className={` border-b-2 border-[#c7c7c7] hover:border-[#8F00FE] hover:text-[#00FDEE] lg:border-b-0  lg:hover:border-[#8F00FE] lg:hover:border-b-2`}
                                >
                                    <Link
                                        href="/about"
                                        className={pathname === "/about" ? "text-[#8F00FF]" : ""}
                                    >
                                        About{" "}
                                    </Link>
                                </li>
                                
                                <li
                                    className={` border-b-2 border-[#c7c7c7] hover:border-[#8F00FE] hover:text-[#00FDEE] lg:border-b-0  lg:hover:border-[#8F00FE] lg:hover:border-b-2`}
                                >
                                    <Link
                                        href="/contact"
                                        className={pathname === "/contact" ? "text-[#8F00FF]" : ""}
                                    >
                                        Contact{" "}
                                    </Link>
                                </li>

                                {/* <------------------- THEME TOGGLE ------------------> */}
                                
                            </ul>
                        )}

                        <ToggleSwitch
                            isToggled={isToggled}
                            setIsToggled={setIsToggled}
                            theme={theme}
                            setTheme={setTheme}
                        />
                           
                    </div>
                </header>

            </nav>
        </div>
    )
}
