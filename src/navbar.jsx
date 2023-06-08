import React from 'react'
import { useState, useEffect } from 'react';

export default function Navbar() {

      const [theme, setTheme] = useState("light");

      useEffect(() => {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                  setTheme('dark');
            } else {
                  setTheme('light');
            }
      }, [])

      useEffect(() => {
            if(theme === "dark") {
                  document.documentElement.classList.add("dark");
            } else {
                  document.documentElement.classList.remove("dark");
            }
      }, [theme]);

      const handleThemeSwitch = () => {
            setTheme(theme === "dark" ? "light" : "dark");
      };


  return (
    <div className='bg-slate-200 dark:bg-zinc-700 text-zinc-600 dark:text-slate-100 grid grid-cols-10 gap-2 max-md:gap-0'>
      <ul className='grid p-2 m-2 flex font-bold
            col-start-10 grid-cols-4 max-md:col-start-8 max-md:col-span-4 max-lg:col-start-9 max-lg:col-span-2'>
            <li><button onClick={handleThemeSwitch}>Dark </button></li>
      </ul>
    </div>
  )
}