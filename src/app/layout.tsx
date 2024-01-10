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
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  // state
  const [theme, setTheme] = useState<"light-bg" | "dark-bg">(
    localStorage.currentTheme === "light" ? "light-bg" : "dark-bg"
  );
  const [showMenu, setShowMenu] = useState<boolean>(
    window.innerWidth > 640 ? true : false
  );
  const [isToggled, setIsToggled] = useState<boolean>(
    localStorage.currentTheme === "light" ? false : true
  );
  const [showDescrip, setshowDescrip] = useState<boolean>(
    window.innerWidth < 640 ? true : false
  );

  useEffect(() => {
    localStorage.currentTheme === null
      ? localStorage.setItem("currentTheme", "light")
      : "";
    if (localStorage.currentTheme === "dark") {
      setTheme("dark-bg");
      setIsToggled(true);
    } else {
      setTheme("light-bg");
      setIsToggled(false);
    }

    window.addEventListener("resize", () => {
      window.innerWidth > 640 ? setShowMenu(true) : setShowMenu(false);
      window.innerWidth < 640 ? setshowDescrip(true) : setshowDescrip(false);
    });
  }, []);

  return (
    <html lang="en" className={`${theme}`}>
      <body className={inter.className}>
        <header
          className={clsx(
            " relative flex justify-between  my-1 mx-4 py-6  sm:mx-[60px] sm:my-2",
            {
              " text-[--light-primary-color]": theme === "light-bg",
              " text-[--dark-primary-color]": theme === "dark-bg",
            }
          )}
        >
          <h2
            className={` text-2xl font-medium sm:text-[32px]  ${bebasNeue.className} `}
          >
            OSITA JERRY
          </h2>

          {/* <--------------------------------  MENU  ------------------------------> */}
          <div>
            {/* <------------------- HAMBURGER MENU ICON ------------------> */}
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
                  <path d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"></path>{" "}
                </g>
              </svg>
            )}

            {showMenu && (
              <ul
                className={clsx(
                  `flex  font-medium text-[16px] mt-1  gap-[32px] ${bebasNeue.className}`,
                  {
                    "flex-col absolute top-[-15px] right-[-60px] bg-[#fff]   text-[#0a0a0a] fill-[#0a0a0a] w-40 h-auto pb-20 px-3 uppercase":
                      window.innerWidth < 640,
                    "!bg-[#0a0a0a] text-[#c7c7c7] fill-[#c7c7c7] ":
                      theme === "light-bg" && window.innerWidth < 640,
                  }
                )}
              >
                {/* <----------------- CANCEL ICON ------------------> */}
                {window.innerWidth < 640 && (
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80px"
                      height="30"
                      viewBox="0 0 16 16"
                      fill="#fff"
                      className="-ml-9 mt-10  bg-[orange]"
                    >
                      <path
                        d="M9.89324 3.45816L7.51247 5.92536L5.04527 3.54459C4.74253 3.25245 4.26009 3.26105 3.96795 3.56379L3.43889 4.11206C3.14675 4.4148 3.15535 4.89724 3.45809 5.18938L5.92529 7.57015L3.54452 10.0373C3.25238 10.3401 3.26098 10.8225 3.56372 11.1147L4.11199 11.6437C4.41473 11.9359 4.89717 11.9273 5.18931 11.6245L7.57008 9.15733L10.0373 11.5381C10.34 11.8302 10.8225 11.8216 11.1146 11.5189L11.6437 10.9706C11.9358 10.6679 11.9272 10.1854 11.6245 9.8933L9.15726 7.51253L11.538 5.04534C11.8302 4.7426 11.8216 4.26016 11.5188 3.96802L10.9706 3.43896C10.6678 3.14682 10.1854 3.15542 9.89324 3.45816Z"
                        onClick={() => setShowMenu(!showMenu)}
                        className=" cursor-pointer"
                      />
                    </svg>
                  </li>
                )}
                <li
                  className={
                    window.innerWidth < 640 ? "nav-text" : "nav-text-full"
                  }
                >
                  <Link
                    href="/"
                    className={pathname === "/" ? "nav-text-active" : ""}
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li
                  className={
                    window.innerWidth < 640 ? "nav-text" : "nav-text-full"
                  }
                >
                  <Link
                    href="/about"
                    className={pathname === "/about" ? "nav-text-active" : ""}
                  >
                    About{" "}
                  </Link>
                </li>
                <li
                  className={
                    window.innerWidth < 640 ? "nav-text" : "nav-text-full"
                  }
                >
                  <Link
                    href="/work"
                    className={pathname === "/work" ? "nav-text-active" : ""}
                  >
                    Works{" "}
                  </Link>
                </li>
                <li
                  className={
                    window.innerWidth < 640 ? "nav-text" : "nav-text-full"
                  }
                >
                  <Link
                    href="/contact"
                    className={pathname === "/contact" ? "nav-text-active" : ""}
                  >
                    Contact{" "}
                  </Link>
                </li>

                {/* <------------------- THEME TOGGLE ------------------> */}
                <li>
                  <div
                    className={
                      window.innerWidth > 640
                        ? ` flex flex-col-reverse gap-1 w-16 h-auto`
                        : "flex justify-between"
                    }
                    onMouseEnter={() => {
                      window.innerWidth > 640 ? setshowDescrip(true) : "";
                    }}
                    onMouseLeave={() => {
                      window.innerWidth > 640 ? setshowDescrip(false) : "";
                    }}
                  >
                    {showDescrip && (
                      <span>{...localStorage.currentTheme}-mode</span>
                    )}
                    <input
                      type="checkbox"
                      checked={isToggled}
                      id="darkmode-toggle"
                    />
                    <label htmlFor="darkmode-toggle">
                      <svg
                        version="1.1"
                        className="moon"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://		www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 49.739 49.739"
                        xmlSpace="preserve"
                        onClick={() => {
                          if (theme === "light-bg") {
                            setTheme("dark-bg");
                            setIsToggled(true);
                            localStorage.setItem("currentTheme", "dark");
                          } else {
                            setTheme("light-bg");
                            setIsToggled(false);
                            localStorage.setItem("currentTheme", "light");
                          }
                        }}
                      >
                        <path
                          d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
                            c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
                            c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
                            C32.639,48.039,28.825,48.888,25.068,48.889z M12.002,4.936c-9.413,6.428-12.756,18.837-7.54,29.253
                            c5.678,11.34,19.522,15.945,30.864,10.268c5.154-2.582,9.136-7.012,11.181-12.357c-5.632,2.427-11.882,2.702-17.752,0.748
                            c-6.337-2.108-11.473-6.557-14.463-12.528C11.899,15.541,11.11,10.16,12.002,4.936z"
                        />
                      </svg>

                      <svg
                        version="1.1"
                        className="sun"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.	w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 496 496"
                        xmlSpace="preserve"
                        onClick={() => {
                          if (theme === "light-bg") {
                            setTheme("dark-bg");
                            setIsToggled(true);
                            localStorage.setItem("currentTheme", "dark");
                          } else {
                            setTheme("light-bg");
                            setIsToggled(false);
                            localStorage.setItem("currentTheme", "light");
                          }
                        }}
                      >
                        <rect
                          x="152.994"
                          y="58.921"
                          transform="matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)"
                          width="40.001"
                          height="16"
                        />
                        <rect
                          x="46.9"
                          y="164.979"
                          transform="matrix(0.9239 0.3827 -0.3827 0.9239 71.29 -12.4346)"
                          width="40.001"
                          height="16"
                        />
                        <rect
                          x="46.947"
                          y="315.048"
                          transform="matrix(0.9239 -0.3827 0.3827 0.9239 -118.531 50.2116)"
                          width="40.001"
                          height="16"
                        />

                        <rect
                          x="164.966"
                          y="409.112"
                          transform="matrix(-0.9238 -0.3828 0.3828 -0.9238 168.4872 891.7491)"
                          width="16"
                          height="39.999"
                        />

                        <rect
                          x="303.031"
                          y="421.036"
                          transform="matrix(-0.3827 -0.9239 0.9239 -0.3827 50.2758 891.6655)"
                          width="40.001"
                          height="16"
                        />

                        <rect
                          x="409.088"
                          y="315.018"
                          transform="matrix(-0.9239 -0.3827 0.3827 -0.9239 701.898 785.6559)"
                          width="40.001"
                          height="16"
                        />

                        <rect
                          x="409.054"
                          y="165.011"
                          transform="matrix(-0.9239 0.3827 -0.3827 -0.9239 891.6585 168.6574)"
                          width="40.001"
                          height="16"
                        />
                        <rect
                          x="315.001"
                          y="46.895"
                          transform="matrix(0.9238 0.3828 -0.3828 0.9238 50.212 -118.5529)"
                          width="16"
                          height="39.999"
                        />
                        <path
                          d="M248,88c-88.224,0-160,71.776-160,160s71.776,160,160,160s160-71.776,160-160S336.224,88,248,88z M248,392
                      c-79.4,0-144-64.6-144-144s64.6-144,144-144s144,64.6,144,144S327.4,392,248,392z"
                        />
                        <rect x="240" width="16" height="72" />
                        <rect
                          x="62.097"
                          y="90.096"
                          transform="matrix(0.7071 0.7071 -0.7071 0.7071 98.0963 -40.6334)"
                          width="71.999"
                          height="16"
                        />
                        <rect y="240" width="72" height="16" />

                        <rect
                          x="90.091"
                          y="361.915"
                          transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 -113.9157 748.643)"
                          width="16"
                          height="71.999"
                        />
                        <rect x="240" y="424" width="16" height="72" />

                        <rect
                          x="361.881"
                          y="389.915"
                          transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 397.8562 960.6281)"
                          width="71.999"
                          height="16"
                        />
                        <rect x="424" y="240" width="72" height="16" />
                        <rect
                          x="389.911"
                          y="62.091"
                          transform="matrix(0.7071 0.7071 -0.7071 0.7071 185.9067 -252.6357)"
                          width="16"
                          height="71.999"
                        />
                      </svg>
                    </label>
                  </div>
                </li>
              </ul>
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
