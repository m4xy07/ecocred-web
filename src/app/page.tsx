import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Footer } from "@/sections/Footer";
import Team from "@/sections/Team";
import { CallToAction } from "@/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/> 
      <LogoTicker />
      <Team/>
      <CallToAction/>
      <Footer />
    </>
  
  );
}
