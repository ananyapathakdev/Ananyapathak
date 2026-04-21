"use client";
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Blog from './components/Blog';
import Contact from "./components/Contact";
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  // TypeScript automatically infers that this is a boolean
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <main className={`${isDark ? "dark" : ""} min-h-screen w-full transition-colors duration-500 bg-white dark:bg-[#0a0a0a]`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}