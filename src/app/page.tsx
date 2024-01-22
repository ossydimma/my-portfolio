import { About } from "./components/About";
import { Connect } from "./components/Connect";
import { Hero } from "./components/Hero";
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
        styles="lg:justify-center"
      />
      <Connect />
    </main>
  );
}
