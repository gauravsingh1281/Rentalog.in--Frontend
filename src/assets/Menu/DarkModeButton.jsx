import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeButton = () => {
  const defaultTheme = "light";
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        onClick={handleThemeSwitch}
        className=" shadow-black text-white bg-violet-500 rounded-3xl dark:text-black h-12 w-auto my-auto px-2 py-0"
      >
        {theme === "dark" ? (
          <>
            <MdOutlineLightMode size={"2rem"} color="white"/>
            <p className="text-textWhite"> Light </p>
          </>
        ) : (
          <>
            <MdDarkMode size={"2rem"} />
            <p> Dark </p>
          </>
        )}
      </button>
    </>
  );
};

export default DarkModeButton;
