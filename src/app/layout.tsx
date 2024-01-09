"use client";
// import type { Metadata } from 'next'
import { Inter, Manrope, Bebas_Neue } from "next/font/google";
import  "./globals.css";
import Link from "next/link";
import clsx from 'clsx'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
const inter = Inter({ subsets: ["latin"] });
const bebasNeue = Bebas_Neue({weight: '400', subsets: ['latin']});
interface themeType {
  theme: "light-bg" | "dark-bg";
  setTheme?: Dispatch<SetStateAction<"light-bg" | "dark-bg">>;
}
export const ThemeColor = createContext<themeType>({} as themeType);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light-bg" | "dark-bg">("light-bg");
  return (
    <html lang="en" className={`${theme}`}>
      <body className={inter.className}>
        <header className={ clsx ( ' flex justify-between items-center mx-[60px] py-6', {
          ' text-[--light-primary-color]': theme === 'light-bg',
          ' text-[--dark-primary-color]': theme === 'dark-bg'
        })}>
          <h2 className={  `project-headers-full ${bebasNeue.className} `}>OSITA JERRY</h2>
          <ul className={ `font-medium text-[16px] flex gap-[32px]  ${inter.className}` }>
            <li>
              <Link href='/'>Home </Link>
            </li>
            <li>
              <Link href='/about'>About </Link>
            </li>
            <li>
              <Link href='/work'>Works </Link>
            </li>
            <li>
              <Link href='/contact'>Contact </Link>
            </li>
            <li>
              <Link href='/'><button 
            onClick={()=> theme ==='light-bg' ? setTheme('dark-bg'): setTheme('light-bg')} 
          >click</button></Link>
            </li>  
          </ul>
          
        </header>
        <ThemeColor.Provider value={{theme}}>
          {children}  
        </ThemeColor.Provider>
      </body>
    </html>
  );
}
