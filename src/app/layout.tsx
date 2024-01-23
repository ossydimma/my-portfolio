"use client";
// import type { Metadata } from 'next'
import "./globals.css";
import {Space_Grotesk } from "next/font/google";
import {  useState } from "react";
import { NavBar } from "./components/NavBar";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: "700" });



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const [theme, setTheme] = useState<"dark" | ''>('')
  

  return (
    <html lang="en" className={`${theme}`}>
      <body className={` ${SpaceGrotesk.className}`}>
        <NavBar theme={theme} setTheme={setTheme}/>
        {children}
      </body>
    </html>
  );
}
