"use client";
// import type { Metadata } from 'next'
import { Inter, Manrope, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import clsx from "clsx";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"; 

const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
// interface themeType {
//   theme: "light-bg" | "dark-bg";
//   setTheme?: Dispatch<SetStateAction<"light-bg" | "dark-bg">>;
// }
// export const ThemeColor = createContext<themeType>({} as themeType);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // state
  const [theme, setTheme] = useState<"light-bg" | "dark-bg">(
    localStorage.currentTheme === "light" ? "light-bg" : "dark-bg"
  );
  const [showMenu, setShowMenu] = useState<boolean>(
    window.innerWidth > 640 ? true : false
  );

  useEffect(() => {
    localStorage.currentTheme === null
      ? localStorage.setItem("currentTheme", "light")
      : "";
    if (localStorage.currentTheme === "dark") {
      setTheme("dark-bg");
    } else {
      setTheme("light-bg");
    }

    window.addEventListener("resize", () => {
      window.innerWidth > 640 ? setShowMenu(true) : setShowMenu(false);
    });
  }, []);

  return (
    <html lang="en" className={`${theme}`}>
      <body className={inter.className}>
        <header
          className={clsx(" relative flex justify-between  my-1 mx-4 py-6  sm:mx-[60px] sm:my-2", {
            " text-[--light-primary-color]": theme === "light-bg",
            " text-[--dark-primary-color]": theme === "dark-bg",
          })}
        >
          <h2 className={` text-2xl font-medium sm:text-[32px]  ${bebasNeue.className} `}>
            OSITA JERRY
          </h2>
          <div>
            {showMenu && (
              <ul
                className={ clsx( `flex  font-medium text-[16px] mt-1  gap-[32px] ${inter.className}`,{
                  'flex-col absolute top-[-10px] right-[-60px] bg-[--dark-primary-color] text-center text-[#0a0a0a] w-40 h-auto py10' : window.innerWidth < 640
                })}
              >
                <li>
                  <Link href="/">Home </Link>
                </li>
                <li>
                  <Link href="/about">About </Link>
                </li>
                <li>
                  <Link href="/work">Works </Link>
                </li>
                <li>
                  <Link href="/contact">Contact </Link>
                </li>
                <li>
                  <Link href="/">
                    <button
                      onClick={() => {
                        if (theme === "light-bg") {
                          setTheme("dark-bg");
                          localStorage.setItem("currentTheme", "dark");
                          alert(localStorage.currentTheme);
                        } else {
                          setTheme("light-bg");
                          localStorage.setItem("currentTheme", "light");
                          alert(localStorage.currentTheme);
                        }
                      }}
                    >
                      click
                    </button>
                  </Link>
                </li>
              </ul>
            )}
            {!showMenu && (
              <svg
              viewBox="0 -0.5 25 25"
              width={60}
              height={60}
              className={clsx(" cursor-pointer -mt-4", {
                " fill-[--light-primary-color]": theme === "light-bg",
                " fill-[--dark-primary-color]": theme === "dark-bg",
              })}
              onClick={() => setShowMenu(!showMenu)}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"
                  
                ></path>{" "}
              </g>
            </svg>
            )}
            
          </div>
        </header>
        {/* <ThemeColor.Provider value={{ theme }}> */}
        {children}
        {/* </ThemeColor.Provider> */}
      </body>
    </html>
  );
}
