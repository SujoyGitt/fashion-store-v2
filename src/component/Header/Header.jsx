import React, { useEffect, useState } from "react";
import { Sun, Moon, MenuIcon } from "lucide-react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Nav from "./Navbar";

export const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [scrolled, setScrolled] = useState(false);
  let [menuIcon, setmenuIcon] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className={`main-header ${scrolled ? "scrolled" : ""}`}>
        <NavLink to="/" className="logo">
          <span className="logo-badge">Fashion</span>
          <span className="logo-text">Store</span>
        </NavLink>

        <Nav menuIcon={menuIcon} setmenuIcon={setmenuIcon} />

        <div className="d-flex column-gap-3 align-items-center">
          <MenuIcon
            className="mobile-nav-icon"
            onClick={() => setmenuIcon(true)}
          />
          <button
            className="theme-toggle "
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </>
  );
};
