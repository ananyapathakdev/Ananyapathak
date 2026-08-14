"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Blog from './components/Blog';
import Contact from "./components/Contact";
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = savedTheme ? savedTheme === 'dark' : prefersDark;

    setIsDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    document.documentElement.style.colorScheme = nextTheme ? 'dark' : 'light';
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <main className="min-h-screen w-full transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
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