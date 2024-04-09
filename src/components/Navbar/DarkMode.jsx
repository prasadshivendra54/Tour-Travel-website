  // "use client"
  // import { useState, useEffect } from "react"
  // import {BiSolidSun, BiSolidMoon} from "react-icons/bi"


  // const DarkMode = () => {
  //   const [theme, setTheme] =  useState(
  //     typeof window !== "undefined" && localStorage.getItem
  //     ("theme")
  //     ? localStorage.getItem("theme")
  //     : "light"
  //   )

  //   const element = 
  //     typeof document === "undefined" ? document.documentElement : null;

  //     useEffect(() =>{
  //       localStorage.setItem("theme", theme);
  //       if(theme === "dark"){
  //         element.classList.add("dark")
  //       } else{
  //         element.classList.remove("light")
  //         element.classList.remove("dark")
  //       }
  //     })

  //   return (
  //     <div>
  //       {
  //         theme === "dark" ? (
  //           <BiSolidSun onClick={() => setTheme("light")}
  //           className="text-2xl" />
  //         ) : (
  //           <BiSolidMoon onClick={() => setTheme("light")}
  //           className="text-2xl" />
  //         )
  //       }
  //     </div>
  //   )
  // }

  // export default DarkMode 


// ------------------------------------------


"use client"
import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';

const DarkMode = () => {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme");
            return storedTheme || "light";
        } else {
            return "light";
        }
    });

    useEffect(() => {
        if (typeof document !== "undefined") {
            const element = document.documentElement;
            if (theme === "dark") {
                element.classList.add("dark");
            } else {
                element.classList.remove("dark");
            }
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div>
            {theme === "dark" ? (
                <BiSolidSun onClick={toggleTheme} className="text-2xl cursor-pointer" />
            ) : (
                <BiSolidMoon onClick={toggleTheme} className="text-2xl cursor-pointer" />
            )}
        </div>
    );
};

export default DarkMode;
