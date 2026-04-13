"use client";
import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe"
import Services from "./components/Services";
import Blog from './components/Blog';
import Contact from "./components/Contact";

// src/app/page.tsx
export default function Home() {
  const [isDark, setIsDark] = useState(true);

  return (
    <main className={`${isDark ? 'dark' : ''} min-h-screen w-full transition-colors duration-500 bg-white dark:bg-[#050505]`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <AboutMe />
      <Services />
      <Blog />
      <Contact/>
    </main>
  );
}